import React from 'react'

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  isFullScreen?: boolean
  isHeroContent?:boolean
  isMobileFullScreen?: boolean
  className?: string
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  isFullScreen = false, 
  isMobileFullScreen=false,
  isHeroContent = true,
  className = '',
  ...props 
}) => {
  const baseClasses =
  isFullScreen && isHeroContent
    ? 'w-full md:px-[63px]'
    : isFullScreen
    ? 'w-full'
    : `xl:px-[16px] lg:px-[16px] md:px-3 px-3 mx-auto ${isMobileFullScreen ? 'px-0' : 'px-3'}`;


  const combinedClasses = `${baseClasses} ${className}`.trim()

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  )
}

export default Layout