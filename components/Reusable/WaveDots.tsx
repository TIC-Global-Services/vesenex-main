"use client";

import React, { useRef, useEffect, useMemo } from "react";

export default function RadialDotPattern() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<SVGCircleElement[]>([]);
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5, hovered: false });
  const lastUpdateRef = useRef<number[]>([]);
  const timeRef = useRef(0);
  const aspectRatioRef = useRef(1);
  
  const cols = 40;
  const rows = 38;
  
  const gridData = useMemo(() => {
    const positions: { x: number; y: number }[] = [];
    const centerDistances: number[] = [];
    
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c / (cols - 1);
        const y = r / (rows - 1);
        positions.push({ x, y });
        
        // Pre-calculate center distance
        const cdx = x - 0.5;
        const cdy = y - 0.5;
        centerDistances.push(Math.sqrt(cdx * cdx + cdy * cdy));
      }
    }
    return { positions, centerDistances };
  }, [cols, rows]);

  useEffect(() => {
    // Initialize aspect ratio
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      aspectRatioRef.current = rect.width / rect.height;
    }
    
    const mouse = mouseRef.current;
    const { positions, centerDistances } = gridData;
    const lastUpdate = lastUpdateRef.current;
    let lastTime = performance.now();
    
    // Initialize lastUpdate array
    if (lastUpdate.length === 0) {
      for (let i = 0; i < positions.length; i++) {
        lastUpdate.push(0);
      }
    }
    
    const animate = (currentTime: number) => {
      // Throttle to ~60fps max
      const deltaTime = currentTime - lastTime;
      if (deltaTime < 16) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }
      
      // Update aspect ratio if container exists
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        aspectRatioRef.current = rect.width / rect.height;
      }
      
      // Increment time for wave animation
      timeRef.current += deltaTime * 0.003;
      lastTime = currentTime;

      // Smooth mouse interpolation
      const dx = mouse.targetX - mouse.x;
      const dy = mouse.targetY - mouse.y;
      
      // Only update if movement is significant
      if (Math.abs(dx) > 0.001 || Math.abs(dy) > 0.001) {
        mouse.x += dx * 0.15;
        mouse.y += dy * 0.15;
      } else if (!mouse.hovered) {
        // Skip animation if mouse hasn't moved and not hovered
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      const dots = dotsRef.current;
      const mx = mouse.x;
      const my = mouse.y;
      const isHovered = mouse.hovered;
      const time = timeRef.current;
      const aspectRatio = aspectRatioRef.current;

      // Batch DOM updates with transform compositing
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        if (!dot) continue;

        const pos = positions[i];
        const baseOpacity = Math.max(0, 1 - centerDistances[i] * 1.4);

        let opacity = baseOpacity * 0.25;
        let scale = 1;

        if (isHovered) {
          // Normalize coordinates based on aspect ratio for proper circular effect
          const normalizedDx = (pos.x - mx) * aspectRatio;
          const normalizedDy = pos.y - my;
          const dist = Math.sqrt(normalizedDx * normalizedDx + normalizedDy * normalizedDy);
          
          // Simple circular glow effect
          const glowRadius = 0.75;
          if (dist < glowRadius) {
            const intensity = 1 - dist / glowRadius;
            opacity = baseOpacity * (0.25 + intensity * 0.75);
            scale = 1 + intensity * 0.4;
          }
        }

        // Pack opacity and scale into single value for comparison
        const newValue = opacity * 1000 + scale;
        
        // Only update if values changed significantly (reduces repaints)
        if (Math.abs(lastUpdate[i] - newValue) > 0.5) {
          lastUpdate[i] = newValue;
          
          // Use transform for both scale and opacity (GPU accelerated)
          if (scale !== 1) {
            dot.style.transform = `scale(${scale.toFixed(3)})`;
          } else if (dot.style.transform) {
            dot.style.transform = "";
          }
          
          dot.style.opacity = opacity.toFixed(3);
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [gridData]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newX = (e.clientX - rect.left) / rect.width;
    const newY = (e.clientY - rect.top) / rect.height;
    
    // Only update if movement is significant (reduces unnecessary calculations)
    if (Math.abs(newX - mouseRef.current.targetX) > 0.005 || 
        Math.abs(newY - mouseRef.current.targetY) > 0.005) {
      mouseRef.current.targetX = newX;
      mouseRef.current.targetY = newY;
    }
  };

  const handleEnter = () => {
    mouseRef.current.hovered = true;
  };

  const handleLeave = () => {
    mouseRef.current.hovered = false;
    mouseRef.current.targetX = 0.5;
    mouseRef.current.targetY = 0.5;
  };

  return (
    <div className="h-full w-full flex items-center justify-center bg-black">
      <div
        ref={containerRef}
        className="w-full h-full relative"
        onMouseMove={handleMove}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <svg width="100%" height="100%" className="absolute inset-0" style={{ pointerEvents: 'none' }}>
          {gridData.positions.map((pos, i) => (
            <circle
              key={i}
              ref={(el) => {
                if (el) dotsRef.current[i] = el;
              }}
              cx={`${pos.x * 100}%`}
              cy={`${pos.y * 100}%`}
              r="1.5"
              fill="#5678EB"
              style={{
                opacity: 0.25,
                transformOrigin: 'center'
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}