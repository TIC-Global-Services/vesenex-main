import {
  DetectionHeroBanner,
  Resilience1,
  Resilience2,
  Resilience3,
  Resilience4,
  Resilience5,
} from "@/components/Reusable/Images";
import { ServiceData } from "@/types/service";

export const serviceData: ServiceData = {
  "managed-protection": {
    "managed-detection-response": {
      slug: "managed-detection-response",
      bannerVideoWeb: "/videos/managed-protection/md-web.mp4",
      bannerVideoMobile: "/videos/managed-protection/md-mobile.mp4",
      AnimatedText:
        "Vesenex MDR is your always-on cyber shield, combining real-time monitoring, proactive threat hunting, and instant responses to stop attacks before they cause chaos.",
      gridTitle: (
        <>
          From Risk to <span className="text-primary">Resilience</span>
        </>
      ),
      grid: [
        {
          name: "Around-the-Clock Security",
          desc: "We at Vesenex continuously monitor endpoints, networks, and cloud environments for suspicious activity, ensuring early detection and rapid containment before threats escalate.",
          img: Resilience1,
        },
        {
          name: "Faster Incident Response",
          desc: "We minimise downtime by quickly isolating compromised systems, stopping lateral movement, and initiating recovery protocols within minutes, not hours.",
          img: Resilience2,
        },
        {
          name: "Reduced False Positives",
          desc: "Our advanced analytics and tuned detection cut through false positives, allowing your team to focus on genuine security incidents.",
          img: Resilience3,
        },
        {
          name: "Zero Non-Compliance Headaches",
          desc: "Built-in logging, reporting, and forensic data collection help you meet frameworks like ASD Essential Eight, NIST and ISO 27001 without additional overhead.",
          img: Resilience4,
        },
        {
          name: "Assured Business Continuity",
          desc: "By containing incidents in their nascent stage, we help ensure your systems online and critical operations remain uninterrupted. ",
          img: Resilience5,
        },
      ],
      imgSeq: "/seq/managed/detection/",
      totalFrames: 400,
      why: [
        {
          title: "Adaptive Detection Methods",
          desc: "Our approach is based on the combination of AI-powered analytics with behavioural baselining. As attacker tactics evolve, our detection logic evolves with them — closing the gap between compromise and containment.",
        },
        {
          title: "Dedicated Cyber Advisor",
          desc: "You get a named security expert who knows your infrastructure inside out. They streamline incident handling, coordinate investigations, and keep you updated without drowning you in technical noise.",
        },
        {
          title: "Enterprise-Grade Security Stack",
          desc: "Our MDR platform integrates advanced SIEM, EDR, and SOAR capabilities. This is the same caliber used by Fortune 500 companies, but ours is specifically designed to address the needs of small and mid-sized companies",
        },
        {
          title: "Local Expertise With Global Threat Intelligence",
          desc: "Our Australian-based SOC analysts understand local compliance requirements while tapping into live global threat intelligence feeds, so you’re shielded from both regional and worldwide attack campaigns.",
        },
        {
          title: "Continuous Optimization",
          desc: "We continually fine-tune your MDR environment by adapting to new threat intelligence, incident patterns, and infrastructure changes, keeping protection sharp and relevant.",
        },
      ],
      faq: [
        {
          ques: "What is Managed Detection and Response (MDR)?",
          ans: "Managed Detection and Response (MDR) is a cybersecurity service that combines advanced monitoring tools, global threat intelligence, and expert human analysis to identify and stop threats around the clock. It goes beyond traditional antivirus or firewalls by actively hunting for suspicious activity and containing issues before they can impact your business.",
        },
        {
          ques: "How does MDR protect my business?",
          ans: "We continuously monitor your endpoints, networks, and cloud environments. When suspicious activity appears, our security team investigates immediately. If it's confirmed to be a threat, we act quickly—isolating affected devices, blocking malicious connections, or disabling compromised accounts to prevent further spread.",
        },
        {
          ques: "How quickly can you respond to a threat?",
          ans: "Speed is critical. In most situations, our analysts begin containment within minutes of validating a threat. For high-severity incidents, automated safeguards respond instantly while our team conducts deeper investigation and remediation.",
        },
        {
          ques: "Does my company still need an in-house IT or security team if we have MDR?",
          ans: "Yes. MDR is designed to support your internal team—not replace them. We handle 24/7 monitoring, threat hunting, and incident response so your staff can focus on maintaining systems, supporting users, and managing on-site operations.",
        },
        {
          ques: "Is MDR compliant with Australian security standards?",
          ans: "Absolutely. Our MDR services are aligned with key standards such as ASD Essential Eight, ISO 27001, and NIST. All data is managed in accordance with Australian privacy laws.",
        },
        {
          ques: "How much does MDR cost?",
          ans: "Costs vary depending on factors such as the number of endpoints, your IT environment, and the coverage level required. We offer clear, predictable pricing to ensure you get enterprise-grade protection without unexpected expenses.",
        },
      ],
    },
    "managed-siem": {
      slug: "managed-siem",
      bannerVideoWeb: "/videos/managed-protection/msiem-web.mp4",
      bannerVideoMobile: "/videos/managed-protection/msiem-mobile.mp4",
      AnimatedText:
        "Vesenex Managed SIEM gives you the clarity you need, without drowning you in false alarms. We combine continuous log monitoring, advanced analytics, and expert human oversight to detect threats early and guide fast, effective responses.",
      gridTitle: (
        <>
          From Security Visibility to{" "}
          <span className="text-primary">Proactive Threat Response</span>
        </>
      ),
      grid: [
        {
          name: "Centralised Log Management",
          desc: "We collect and unify security events from across your network, cloud, and endpoints, giving you a single, clear view of your entire security landscape. This means no more chasing alerts across multiple tools.",
          img: "/images/managed-protection/Seim/1.png",
        },
        {
          name: "Advanced Threat Correlation",
          desc: "Our SIEM platform uses behavioural analytics and threat intelligence feeds to connect the dots between seemingly unrelated events, spotting attacks that would otherwise slip under the radar.",
          img: "/images/managed-protection/Seim/2.png",
        },
        {
          name: "Rapid Incident Detection",
          desc: "We filter out the noise, flag real threats, and alert you with clear next steps. Our focus is on speed and accuracy, so you can act before the damage is done.",
          img: "/images/managed-protection/Seim/3.png",
        },
        {
          name: "Compliance-Ready Reporting",
          desc: "From ISO 27001 to ASD Essential Eight, our built-in reporting helps you tick compliance boxes with minimal effort while keeping auditors happy.",
          img: "/images/managed-protection/Seim/4.png",
        },
        {
          name: "Expert Oversight 24/7",
          desc: "Our Australian-based security team monitors your SIEM around the clock, ensuring nothing suspicious gets ignored — no matter when it happens.",
          img: "/images/managed-protection/Seim/5.png",
        },
      ],
      totalFrames: 200,
      imgSeq: "/seq/managed/siem/",
      why: [
        {
          title: "Tailored SIEM Deployment",
          desc: "We fine-tune the SIEM to your environment and business priorities, so it works for you — not the other way around.",
        },
        {
          title: "Actionable Intelligence",
          desc: "Our approach focuses on SIEM transformation of raw logs into insights that protect brand trust, reduce financial risk, and improve incident response speed.",
        },
        {
          title: "Proactive Threat Hunting",
          desc: "We don’t wait for alerts to pop up. Our analysts actively search for hidden threats lurking in your logs, closing gaps before attackers exploit them.",
        },
        {
          title: "Scalable for Growth",
          desc: "Whether you have 50 endpoints or 5,000, our Managed SIEM grows with your business, ensuring you’re never under-protected.",
        },
        {
          title: "Continuous Optimisation",
          desc: "We constantly review and adjust correlation rules, detection logic, and data sources to ensure your SIEM stays ahead of evolving threats.",
        },
      ],
      faq: [
        {
          ques: "What is SIEM?",
          ans: "SIEM stands for Security Information and Event Management. It collects and analyzes logs from across your IT environment to detect potential security incidents. Managed SIEM means we run it for you, so you get the benefits without the overhead.",
        },
        {
          ques: "How does Managed SIEM protect my business?",
          ans: "By gathering security data from all corners of your environment and applying advanced analysis, we can detect suspicious patterns and stop threats before they escalate.",
        },
        {
          ques: "Can you integrate with my existing tools?",
          ans: "Yes. We work with a wide range of log sources, security tools, and cloud platforms, ensuring smooth integration into your existing setup.",
        },
        {
          ques: "Will I get too many alerts?",
          ans: "No. We tune the SIEM to your environment to reduce false positives, so you only hear about the threats that matter.",
        },
        {
          ques: "Is Managed SIEM compliant with Australian regulations?",
          ans: "Yes. Our services align with key standards like ASD Essential Eight, ISO 27001, and APRA CPS 234, with all data handled under Australian privacy laws.",
        },
        {
          ques: "How much does Managed SIEM cost?",
          ans: "Pricing depends on your environment’s size, the number of log sources, and the level of coverage required. We provide predictable monthly billing without hidden charges.",
        },
      ],
    },
    "managed-firewall-security": {
      slug: "managed-firewall-security",
      bannerVideoWeb: "/videos/managed-protection/mfs-web.mp4",
      bannerVideoMobile: "/videos/managed-protection/mfs-mobile.mp4",
      AnimatedText:
        "Vesenex Managed Firewall Security takes the complexity out of protecting your perimeter. We configure, manage, and monitor your firewall so threats are blocked before they even knock on your door. No guesswork, no tech headaches, just a strong, reliable shield between you and the internet’s bad neighbourhoods.",
      gridTitle: (
        <>
          From Block to <span className="text-primary">Protect</span>
        </>
      ),
      grid: [
        {
          name: "Always-On Protection",
          desc: "We keep your firewall running at peak performance, updating rules, firmware, and configurations so it’s ready to stop new threats the moment they appear. This ensures your defences stay strong without you lifting a finger.",
          img: "/images/managed-protection/firewall/1.png",
        },
        {
          name: "Threat Detection and Blocking",
          desc: "We spot and block malicious traffic in real time, from known malware sources to suspicious patterns that indicate an attack in progress. That means fewer risks getting anywhere near your systems.",
          img: "/images/managed-protection/firewall/2.png",
        },
        {
          name: "Policy Tailored to Your Business",
          desc: "Every business runs differently, so we configure your firewall rules to suit your workflows. The goal is to keep security high without slowing down your team or interrupting important work.",
          img: "/images/managed-protection/firewall/3.png",
        },
        {
          name: "24/7 Monitoring by Experts",
          desc: "Our security analysts watch over your firewall around the clock, ready to respond to alerts and tweak settings if anything unusual pops up. You get constant protection without the need to build an in-house SOC.",
          img: "/images/managed-protection/firewall/4.png",
        },
        {
          name: "Incident Response Ready",
          desc: "If an attack slips through, we move fast to contain it, block harmful traffic, and close any gaps. This quick reaction minimises disruption and protects sensitive data.",
          img: "/images/managed-protection/firewall/5.png",
        },
      ],
      imgSeq: "/seq/managed/firewall/",
      totalFrames: 300,

      why: [
        {
          title: "Proactive Management",
          desc: "Our team actively tunes and optimises settings to keep pace with the latest threats.",
        },
        {
          title: "End-to-End Visibility",
          desc: "Centralised monitoring and reporting that gives you a clear picture of all network traffic and blocked threats in one place.",
        },
        {
          title: "Simple, Transparent Pricing",
          desc: "Predictable monthly costs mean you know exactly what you’re paying for. So, you get enterprise-grade firewall security without hidden surprises.",
        },
        {
          title: "Continuous Threat Intelligence",
          desc: "We integrate global threat feeds and emerging IOC data, ensuring your firewall policies evolve with the threat landscape.",
        },
        {
          title: "Compliance-Ready Controls",
          desc: "Our endpoint security aligns with frameworks like ASD Essential Eight, ISO 27001, and NIST, ensuring your device fleet is both secure and audit ready.",
        },
      ],
      faq: [
        {
          ques: "What is a managed firewall service?",
          ans: "It’s a fully handled firewall solution where we take care of setup, configuration, updates, monitoring, and response. Instead of you or your IT team trying to keep up with ever-changing threats, our experts do it for you, 24/7.",
        },
        {
          ques: "Why do I need a managed firewall if I already have one installed?",
          ans: "A firewall only works well if it’s constantly updated and properly configured. Cyber threats evolve daily, so outdated rules or missed patches can leave you exposed. Managed Firewall Security ensures your firewall is always in top shape.",
        },
        {
          ques: "What threats can a managed firewall stop?",
          ans: "A managed firewall can block malware, ransomware, phishing sites, suspicious IP addresses, and unauthorised access attempts. It also stops attacks that target vulnerabilities in your network before they reach your systems.",
        },
        {
          ques: "How quickly can you respond to an incident?",
          ans: "Our monitoring is real-time, and our response starts within minutes of detecting a critical issue. We work to contain the threat immediately and secure your systems.",
        },
        {
          ques: "Is a managed firewall enough to keep my business safe?",
          ans: "It’s a strong first line of defence, but it should be part of a larger security strategy. We recommend pairing it with services like endpoint protection, threat intelligence, and ongoing security awareness training.",
        },
        {
          ques: "Do you offer reporting and compliance support?",
          ans: "Yes. We provide clear reports on firewall activity, blocked threats, and configuration changes. These can also help with compliance for standards like ISO 27001, PCI DSS, and ASD Essential Eight.",
        },
      ],
    },
    "endpoint-detection-response": {
      slug: "endpoint-detection-response",
      bannerVideoWeb: "/videos/managed-protection/es-web.mp4",
      bannerVideoMobile: "/videos/managed-protection/es-mobile.mp4",
      AnimatedText:
        "Vesenex Endpoint Security hardens your endpoints against malware, ransomware, zero-day exploits, and insider threats. We combine advanced detection, prevention, and control measures to keep devices safe without slowing them down, thereby ensuring your people can work securely from anywhere.",
      gridTitle: (
        <>
          Protection That <span className="text-primary"> Pays Off</span>
        </>
      ),
      grid: [
        {
          name: "Next-Gen Antivirus (NGAV)",
          desc: "Beyond signature-based detection, our NGAV uses behavioural analysis and machine learning to block both known and never-before-seen threats in real time.",
          img: "/images/managed-protection/endpoint/1.png",
        },
        {
          name: "Device Control & Hardening",
          desc: "We apply policy-based restrictions on USB drives, external media, and unapproved applications to prevent data leakage and malware injection.",
          img: "/images/managed-protection/endpoint/2.png",
        },
        {
          name: "Application Whitelisting",
          desc: "Only trusted applications can execute on protected endpoints, ultimately stopping malicious or unauthorised software before it runs.",
          img: "/images/managed-protection/endpoint/3.png",
        },
        {
          name: "Exploit Prevention",
          desc: "Our tools identify and block attempts to exploit software vulnerabilities, cutting off one of the most common attack vectors.",
          img: "/images/managed-protection/endpoint/4.png",
        },
        {
          name: "Centralised Visibility",
          desc: "All endpoint activity is logged and analysed from a single console, giving us a clear view of device health, compliance, and suspicious activity across your entire fleet.",
          img: "/images/managed-protection/endpoint/5.png",
        },
      ],
      imgSeq: "/seq/managed/endpoint/",
      totalFrames: 200,

      why: [
        {
          title: "Layered Endpoint Defence",
          desc: "We stack prevention, detection, and response capabilities to catch threats at multiple stages — from initial delivery to execution.",
        },
        {
          title: "Behavioural Threat Hunting",
          desc: "We track anomalies in process behaviour, network calls, and system changes, allowing us to catch threats that bypass traditional defences.",
        },
        {
          title: "Seamless Deployment",
          desc: "Our endpoint security agents work on Windows, macOS, and Linux, with minimal performance impact and no disruption to existing workflows.",
        },
        {
          title: "Integrated Threat Response",
          desc: "If a device is compromised, we can remotely isolate it from the network, stop malicious processes, and initiate recovery without needing to touch the device physically.",
        },
        {
          title: "Compliance-Ready Controls",
          desc: "Our endpoint security aligns with frameworks like ASD Essential Eight, ISO 27001, and NIST, ensuring your device fleet is both secure and audit ready.",
        },
      ],
      faq: [
        {
          ques: "How is this different from a regular antivirus?",
          ans: "Traditional antivirus software mainly blocks known threats. Our endpoint security adds AI-driven behavioural detection, exploit prevention, application control, and integrated incident response, which makes it far more effective against modern attacks.",
        },
        {
          ques: "Can you secure remote and BYOD devices?",
          ans: "Yes. Our security agents work on corporate and personal devices alike, ensuring they meet security policies before they connect to business resources.",
        },
        {
          ques: "Will this slow down my devices?",
          ans: "No, we use lightweight agents that run in the background without noticeable performance impact, even during active scanning.",
        },
        {
          ques: "Does it protect against ransomware?",
          ans: "Absolutely. Our system blocks malicious file encryption activity, isolates infected devices, and supports fast rollback to a clean state if needed.",
        },
        {
          ques: "Can I see what’s happening on my endpoints in real time?",
          ans: "Yes. You get visibility through centralised reporting and alerts, so you always know the state of your endpoints and any actions we’ve taken.",
        },
        {
          ques: "How much does Endpoint Security cost?",
          ans: "Pricing is based on the number of devices and the level of coverage you choose. We offer predictable pricing so you can scale easily as your workforce grows.",
        },
      ],
    },
  },

  "cyber-security-projects": {
    "vulnerability-management": {
      slug: "vulnerability-management",
      bannerVideoWeb: "/videos/cyber-security/vm-web.mp4",
      bannerVideoMobile: "/videos/cyber-security/vm-mobile.mp4",
      AnimatedText:
        "Vesenex Vulnerability Management is your ongoing security health check. We continuously scan, assess, and prioritise weaknesses in your IT environment, giving you a clear plan to fix them before they turn into breaches. No endless spreadsheets. No guesswork. Just actionable insights and measurable results.",
      gridTitle: (
        <>
          From Gaps to <span className="text-primary"> Guardrails</span>
        </>
      ),
      grid: [
        {
          name: "Continuous Scanning and Monitoring",
          desc: "Vesenex team members will regularly check your systems, networks, and applications while also performing scheduled scans to spot vulnerabilities, so we catch threats as soon as they appear. This helps us ensure clients are not blindsided by a weakness that has been hiding from them in plain sight.",
          img: "/images/cyber-security/Vulnerability/1.png",
        },
        {
          name: "Smart Prioritisation",
          desc: "We understand that not all vulnerabilities are equally dangerous, which is why we rank them by risk level, business impact, and exploitation possibility. This way, we can tackle the most critical ones first, ensuring our client’s resources are spent where they matter the most.",
          img: "/images/cyber-security/Vulnerability/2.png",
        },
        {
          name: "Fast Remediation Support",
          desc: "We give you a clear, step-by-step fix plan for each issue we uncover. If you need help applying patches or configuration changes, our team is ready to guide you or step in directly as well.",
          img: "/images/cyber-security/Vulnerability/3.png",
        },
        {
          name: "Compliance-Ready Reports",
          desc: "Detailed, audit-friendly reports help you meet security requirements for frameworks like ISO 27001, Essential Eight, PCI DSS, and more. You get evidence of due diligence that satisfies both auditors and stakeholders.",
          img: "/images/cyber-security/Vulnerability/4.png",
        },
        {
          name: "Proactive Risk Reduction",
          desc: "We focus on closing the gaps and patching the vulnerabilities quickly so that your attack surface remains as small as possible while making it harder for threat actors to get a foothold. Vesenex is a big believer in the fact that prevention costs far less than recovery.",
          img: "/images/cyber-security/Vulnerability/5.png",
        },
      ],
      videoSeq: "/seq/cyber/vulnerability/vulnerability-web.mp4",
      videoSeqMobile: "/seq/cyber/vulnerability/vulnerability-web.mp4",

      why: [
        {
          title: "Holistic Approach",
          desc: "We don’t just scan and hand over a list; we instead help you understand the risks and work with you until the fixes are done.",
        },
        {
          title: "Intelligent-Driven Detection",
          desc: "Our vulnerability database is fed by live intelligence from global threat feeds, so we catch emerging exploits early.",
        },
        {
          title: "Tailored to Your Environment",
          desc: "We fine-tune scanning schedules, reporting formats, and remediation guidance to suit your business needs and internal processes.",
        },
        {
          title: "Trackable Security",
          desc: "Our approach delivers clear improvements to your risk posture, so you see the impact in reduced vulnerabilities and stronger compliance over time.",
        },
        {
          title: "Continuous Optimization",
          desc: "We continually fine-tune your MDR environment by adapting to new threat intelligence, incident patterns, and infrastructure changes, keeping protection sharp and relevant.",
        },
      ],
      faq: [
        {
          ques: "What is Vulnerability Management?",
          ans: "It’s an ongoing process of finding, assessing, prioritising, and fixing security weaknesses in your IT environment before they can be exploited.",
        },
        {
          ques: "How is it different from a one-time security scan?",
          ans: "A one-time scan gives you a snapshot. Vulnerability Management is continuous, so you’re protected against new weaknesses as they emerge.",
        },
        {
          ques: "Will this disrupt my business operations?",
          ans: "No. Scans are scheduled to minimise impact, and remediation guidance is designed to work with your existing workflows.",
        },
        {
          ques: "Do you only focus on software vulnerabilities?",
          ans: "No, we assess hardware, network devices, operating systems, applications, and even misconfigurations that could be exploited.",
        },
        {
          ques: "Can this help with compliance?",
          ans: "Yes. Vulnerability Management is often a requirement for standards like ISO 27001, PCI DSS, and ASD Essential Eight, and we provide the documentation to support compliance.",
        },
      ],
    },
    "penetration-testing": {
      slug: "penetration-testing",
      bannerVideoWeb: "/videos/cyber-security/pt-web.mp4",
      bannerVideoMobile: "/videos/cyber-security/pt-mobile.mp4",
      AnimatedText:
        "Vesenex Penetration Testing shows you exactly where your defences are strong and where they are vulnerable. Our ethical hackers step into an attacker’s shoes, testing your systems, networks, and applications for weaknesses. Then we give you a clear, prioritised plan to close those gaps, strengthen your security, and stay ahead of threats.",
      gridTitle: (
        <>
          From Reactive <span className="text-primary"> to Ready</span>
        </>
      ),
      grid: [
        {
          name: "Real-World Attack Simulation",
          desc: "We go beyond automated scans, using manual techniques and adversary tactics to simulate realistic intrusion attempts. This approach reveals vulnerabilities that scanners alone often miss.",
          img: "/images/cyber-security/penetration/1.png",
        },
        {
          name: "Comprehensive Testing Scope",
          desc: "Whether it is your external perimeter, internal network, web applications, APIs, or cloud environment, we test across multiple attack surfaces to ensure no critical weakness slips through.",
          img: "/images/cyber-security/penetration/2.png",
        },
        {
          name: "Actionable Remediation Guidance",
          desc: "You receive a clear, prioritised report with technical details, proof-of-concept exploits, and step-by-step remediation advice so your and our teams can act quickly and confidently.",
          img: "/images/cyber-security/penetration/3.png",
        },
        {
          name: "Regulatory and Compliance Readiness",
          desc: "Our penetration tests help meet requirements for frameworks like ASD Essential Eight, ISO 27001, PCI DSS, and APRA CPS 234 by demonstrating proactive vulnerability management.",
          img: "/images/cyber-security/penetration/4.png",
        },
        {
          name: "Improved Security Posture",
          desc: "Regular testing reduces your attack surface, improves incident readiness, and builds resilience against both opportunistic and targeted cyberattacks.",
          img: "/images/cyber-security/penetration/5.png",
        },
      ],
      videoSeq: "/seq/cyber/vulnerability/vulnerability-web.mp4",
      videoSeqMobile: "/seq/cyber/vulnerability/vulnerability-web.mp4",

      why: [
        {
          title: "Proven Offensive Security Expertise",
          desc: "Our testers bring years of hands-on experience in offensive security, combining technical expertise with a deep understanding of attacker behaviour and motives.",
        },
        {
          title: "Tailored Testing Methodology",
          desc: "We adapt our approach to your business environment, risk profile, and industry regulations. No cookie-cutter tests; every engagement is relevant to your real-world threat landscape.",
        },
        {
          title: "Clear, Action-Focused Reporting",
          desc: "Our reports are written for both technical and executive audiences, ensuring everyone from the SOC team to the board understands the risks and next steps.",
        },
        {
          title: "Safe & Controlled Execution",
          desc: "All tests are performed in a controlled manner to avoid disruption to your operations, with strict safeguards and pre-approved rules of engagement.",
        },
        {
          title: "Continuous Partnership",
          desc: "We do not just hand over a report and walk away. We stay engaged to validate fixes and guide your long-term improvement journey.",
        },
      ],
      faq: [
        {
          ques: "What is penetration testing?",
          ans: "Penetration testing is a cybersecurity method that involves simulating a real-world attack where white-hat hackers try to exploit vulnerabilities and gaps in your systems, networks, or applications, just like an actual hacker would do. It’s done to find and fix the vulnerabilities before a real threat actor does.",
        },
        {
          ques: "How is penetration testing different from vulnerability assessment?",
          ans: "In vulnerability assessment, automated tools are used to identify gaps, while in penetration testing, an ethical hacker actively exploits security issues to assess their real-world impact. Our ethical hackers also submit a remediation report suggesting ways to close the gaps efficiently.",
        },
        {
          ques: "What types of penetration testing do you offer?",
          ans: "We provide external, internal, web application, mobile app, API, wireless network, and cloud penetration testing, as well as specialised social engineering and phishing simulations.",
        },
        {
          ques: "Will testing disrupt my operations?",
          ans: "Our engagements are designed to be safe and minimally disruptive. We work with you to define the scope, schedule, and secure testing procedures to avoid operational impact.",
        },
        {
          ques: "How often should penetration testing be done?",
          ans: "You should get it done at least once a year, or whenever significant changes are made to your IT infrastructure. It’s best to do it once every 3 to 6 months, especially if you belong to high-risk industries.",
        },
        {
          ques: "Is penetration testing required for compliance?",
          ans: "Yes, many frameworks, including PCI DSS, ISO 27001, and APRA CPS 234, recommend or require regular penetration testing as part of a robust security program.",
        },
        {
          ques: "How much does Vesenex penetration testing cost?",
          ans: "Pricing depends on the scope, complexity, and duration of the engagement. We offer clear, fixed-cost proposals with no hidden charges.",
        },
      ],
    },
    grc: {
      slug: "grc",
      bannerVideoWeb: "/videos/cyber-security/grc-web.mp4",
      bannerVideoMobile: "/videos/cyber-security/grc-mobile.mp4",
      AnimatedText:
        "Vesenex GRC services help you put the right governance in place, manage risk with clarity, and stay compliant without drowning in paperwork. We make complex frameworks understandable, practical, and achievable, so you’re always audit-ready and breach-resistant.",
      gridTitle: (
        <>
          From Compliance Burden{" "}
          <span className="text-primary"> to Competitive Edge</span>
        </>
      ),
      grid: [
        {
          name: "Structured Governance",
          desc: "We help you define policies, roles, and responsibilities so security becomes part of your organisation’s DNA. When you have clear governance, you have fewer grey areas and smoother decision-making capabilities in place.",
          img: "/images/cyber-security/governance/1.png",
        },
        {
          name: "Proactive Risk Management",
          desc: "Instead of reacting to problems, we help you identify, assess, and reduce risks before they impact your business. That means fewer surprises and more control over your security posture.",
          img: "/images/cyber-security/governance/2.png",
        },
        {
          name: "Compliance Without the Headache",
          desc: "We guide you through frameworks like ISO 27001, ASD Essential Eight, PCI DSS, NIST CSF, and others. Our approach streamlines documentation, reporting, and evidence gathering so you pass audits with confidence.",
          img: "/images/cyber-security/governance/3.png",
        },
        {
          name: "Integrated Processes",
          desc: "We make sure your risk, governance, and compliance efforts aren’t siloed. So, when everything works in coordination, changes in one area are reflected across the board.",
          img: "/images/cyber-security/governance/4.png",
        },
        {
          name: "Measurable Outcomes",
          desc: "The team Vesenex helps clients with clear metrics and reporting so you can track improvements over time and show stakeholders the value of your security investments.",
          img: "/images/cyber-security/governance/5.png",
        },
      ],
      videoSeq: "/seq/cyber/vulnerability/vulnerability-web.mp4",
      videoSeqMobile: "/seq/cyber/vulnerability/vulnerability-web.mp4",

      why: [
        {
          title: "Business-Aligned Approach",
          desc: "We don’t just “do compliance” — we align governance and risk processes with your business goals, ensuring security is an enabler, not a blocker.",
        },
        {
          title: "Clear, Plain Language Guidance",
          desc: "We translate legal and technical requirements into straightforward steps your team can understand and follow.",
        },
        {
          title: "Cross-Industry Expertise",
          desc: "Our consultants have worked across finance, healthcare, government, and critical infrastructure, so we know what works in different sectors.",
        },
        {
          title: "Local Knowledge, Global Standards",
          desc: "We understand the Australian regulatory environment while keeping you aligned with internationally recognised best practices.",
        },
        {
          title: "Continuous Partnership",
          desc: "We do not just hand over a report and walk away. We stay engaged to validate fixes and guide your long-term improvement journey.",
        },
      ],
      faq: [
        {
          ques: "What is GRC in cybersecurity?",
          ans: "GRC is the framework that helps organisations manage security in a structured way that defines governance (who does what), manages risks (what could go wrong and how to prevent it), and ensures compliance (meeting laws, regulations, and standards).",
        },
        {
          ques: "Why is GRC important?",
          ans: "Without GRC, security can be inconsistent, reactive, and hard to measure. A good GRC approach makes your security predictable, reliable, and easier to prove to regulators or clients.",
        },
        {
          ques: "Do you only work with large organisations?",
          ans: "No. We tailor our GRC services to fit small, mid-sized, and large businesses. We customise our approach to meet your specific needs.",
        },
        {
          ques: "How does GRC help with compliance audits?",
          ans: "GRC keeps your policies, processes, and evidence organised year-round, so you’re always audit-ready instead of scrambling at the last minute.",
        },
        {
          ques: "Can you integrate GRC with existing security tools?",
          ans: "Yes. We work with your existing tools and processes, recommending changes only where they’ll make a measurable difference.",
        },
      ],
    },
    "cyber-awareness-training-phishing-simulation": {
      slug: "cyber-awareness-training-phishing-simulation",
      bannerVideoWeb: "/videos/cyber-security/catp-web.mp4",
      bannerVideoMobile: "/videos/cyber-security/catp-mobile.mp4",
      AnimatedText:
        " Vesenex Cyber Awareness Training gives your team the knowledge and habits they need to spot threats and avoid falling for them. We keep it simple, practical, and engaging, so people actually remember what they learn.",
      gridTitle: (
        <>
          Turn Your Team Into{" "}
          <span className="text-primary"> Your First Line of Defence</span>
        </>
      ),
      grid: [
        {
          name: "Real-World Examples",
          desc: "We use everyday scenarios your staff can relate to, so they can recognise a suspicious email or dodgy link before it’s too late.",
          img: "/images/cyber-security/cyber-awarness/1.png",
        },
        {
          name: "Interactive Learning",
          desc: "Short, hands-on exercises make training stick. Your team will practice spotting phishing attempts, creating strong passwords, and handling data securely.",
          img: "/images/cyber-security/cyber-awarness/2.png",
        },
        {
          name: "Up-to-Date Content",
          desc: "Cyber threats change fast. We regularly update our training with the latest scams, tactics, and attack trends so your people are always ready",
          img: "/images/cyber-security/cyber-awarness/3.png",
        },
        {
          name: "AI-Powered Phishing Simulation",
          desc: "Adaptive campaigns that learn from user behaviour and evolve with emerging threats.",
          img: "/images/cyber-security/cyber-awarness/4.png",
        },
        {
          name: "Measurable Outcomes",
          desc: "The team Vesenex helps clients with clear metrics and reporting so you can track improvements over time and show stakeholders the value of your security investments.",
          img: "/images/cyber-security/cyber-awarness/5.png",
        },
      ],
      videoSeq: "/seq/cyber/vulnerability/vulnerability-web.mp4",
      videoSeqMobile: "/seq/cyber/vulnerability/vulnerability-web.mp4",

      why: [
        {
          title: "We Make It Engaging",
          desc: "No boring slides. Our training is interactive, conversational, and easy to follow — no jargon overload.",
        },
        {
          title: "Built for All Skill Levels",
          desc: "Whether your staff are tech-savvy or complete beginners, we make sure everyone walks away more confident and capable. ",
        },
        {
          title: "Proven Results",
          desc: "Our clients see measurable drops in phishing click rates and other risky behaviours after training.",
        },
        {
          title: "Flexible Delivery",
          desc: "Online, in-person, or a mix of both — we fit training around your schedule and team size.",
        },
        {
          title: "Continuous Partnership",
          desc: "We do not just hand over a report and walk away. We stay engaged to validate fixes and guide your long-term improvement journey.",
        },
      ],
      faq: [
        {
          ques: "Why is cyber awareness training important?",
          ans: "Even the best security tools can’t stop a bad click, and that’s why training your staff reduces the risk of human error that hackers love to exploit.",
        },
        {
          ques: "How often should we do training?",
          ans: "Cyber awareness works best when it’s ongoing. A full program once a year is essential, but regular refreshers and phishing simulations every few months keep staff sharp and up to date.",
        },
        {
          ques: "Will it be too technical for non-IT staff?",
          ans: "Not at all. We explain concepts in plain language, using relatable examples instead of technical jargon.",
        },
        {
          ques: "Can you include phishing simulations?",
          ans: "Yes. We can run realistic phishing tests to measure progress and identify where more training is needed.",
        },
        {
          ques: "Do you train remote teams?",
          ans: "Absolutely. We have online training options that work just as well for distributed teams.",
        },
      ],
    },
    "cybersecurity-consulting": {
      slug: "cybersecurity-consulting",
      bannerVideoWeb: "/videos/cyber-security/cc-web.mp4",
      bannerVideoMobile: "/videos/cyber-security/cc-mobile.mp4",
      AnimatedText:
        "Vesenex Cybersecurity Consulting cuts through the noise, giving you clear, actionable advice tailored to your business. Whether you’re building a strategy from scratch, refining existing defences, or preparing for compliance audits, we help you make confident, informed decisions that protect your organisation now and in the future.",
      gridTitle: (
        <>
          From Advice <span className="text-primary"> to Action</span>
        </>
      ),
      grid: [
        {
          name: "Tailored Security Strategies",
          desc: "We design security strategies that match your goals, risk appetite, and operational reality, so you can invest in what truly matters.",
          img: "/images/cyber-security/consulting/1.png",
        },
        {
          name: "Risk Assessment and Management",
          desc: "Our consultants identify your most critical assets and the risks they face, then recommend ways to reduce exposure without slowing your business down.",
          img: "/images/cyber-security/consulting/2.png",
        },
        {
          name: "Technology and Vendor Selection",
          desc: "Choosing the right tools can be tricky. We help you evaluate and select security technologies and vendors that fit your budget, integrate well, and deliver real value.",
          img: "/images/cyber-security/consulting/3.png",
        },
        {
          name: "Policy and Process Development",
          desc: "From incident response plans to user access policies, we create practical, easy-to-follow processes that strengthen your security posture.",
          img: "/images/cyber-security/consulting/4.png",
        },
        {
          name: "Compliance Readiness",
          desc: "We prepare you for frameworks like ASD Essential Eight, ISO 27001, and PCI DSS by aligning your people, processes, and technology to the required standards.",
          img: "/images/cyber-security/consulting/5.png",
        },
      ],
      videoSeq: "/seq/cyber/vulnerability/vulnerability-web.mp4",
      videoSeqMobile: "/seq/cyber/vulnerability/vulnerability-web.mp4",

      why: [
        {
          title: "Business-First Thinking",
          desc: "We focus on security that supports your business. Every recommendation is weighed against your operational goals, so protection never comes at the cost of productivity.",
        },
        {
          title: "Independent Advice",
          desc: "We partner with leading vendors when it makes sense, but our guidance is always shaped by what best strengthens your security posture",
        },
        {
          title: "Hands-On Experience",
          desc: "Our consultants have worked in real-world breach response, security architecture, and governance roles, giving them insight that theory alone can’t match. This means our advice is grounded in what actually works when the pressure is on.",
        },
        {
          title: "Clear, Actionable Guidance",
          desc: "We translate complex threats into plain language and give you a roadmap you can actually implement.",
        },
        {
          title: "Continuous Partnership",
          desc: "We do not just hand over a report and walk away. We stay engaged to validate fixes and guide your long-term improvement journey.",
        },
      ],
      faq: [
        {
          ques: "What does a cybersecurity consultant do?",
          ans: "We provide expert advice and guidance on protecting your business from cyber threats. This can include assessing risks, designing security strategies, selecting technologies, and preparing for compliance.",
        },
        {
          ques: "Do you only work with large organisations?",
          ans: "No. We work with businesses of all sizes, tailoring our recommendations to your scale, complexity, and budget.",
        },
        {
          ques: "Can you help us choose security tools?",
          ans: "Yes. We can assess your requirements, shortlist suitable vendors, and help you implement solutions that give you the most value.",
        },
        {
          ques: "How is consulting different from managed services?",
          ans: "Consulting focuses on strategy, planning, and advice. Managed services like MDR handle day-to-day monitoring and response. Many clients use both for complete coverage.",
        },
        {
          ques: "Will you work with our internal IT team?",
          ans: "Absolutely. We collaborate closely with your existing team to make sure recommendations are realistic, achievable, and fully supported.",
        },
        {
          ques: "Is the advice product-neutral?",
          ans: "Yes. We’re completely independent and recommend solutions based only on your needs.",
        },
      ],
    },
    "cyber-maturity-assessment": {
      slug: "cyber-maturity-assessment",
      bannerVideoWeb: "/videos/cyber-security/cma-web.mp4",
      bannerVideoMobile: "/videos/cyber-security/cma-mobile.mp4",
      AnimatedText:
        "Our Cyber Maturity Assessment shows you exactly where your security stands today — what’s strong, what’s at risk, and where to focus next. We benchmark your organisation against proven frameworks, uncover hidden gaps, and deliver a business-aligned roadmap to strengthen resilience without wasted spend.",
      gridTitle: (
        <>
          From Assessment <span className="text-primary"> to Action</span>
        </>
      ),
      grid: [
        {
          name: "Comprehensive Security Review",
          desc: "We assess your policies, processes, technologies, and culture to get an accurate picture of your cyber resilience across people, process, and technology layers.",
          img: "/images/cyber-security/maturity-assessment/1.png",
        },
        {
          name: "Benchmark Against Standards",
          desc: "Your maturity is measured against industry-recognised frameworks like NIST CSF, ISO 27001, and ASD Essential Eight, giving you a clear position on the scale from basic to advanced.",
          img: "/images/cyber-security/maturity-assessment/2.png",
        },
        {
          name: "Gap Identification and Prioritisation",
          desc: "Not every security gap carries the same risk. We highlight where you’re most exposed and prioritise actions based on business impact, cost, and effort.",
          img: "/images/cyber-security/maturity-assessment/3.png",
        },
        {
          name: "Practical, Actionable Roadmap",
          desc: "Instead of generic recommendations, we provide a tailored improvement plan you can realistically implement within your resources and budget.",
          img: "/images/cyber-security/maturity-assessment/4.png",
        },
        {
          name: "Support for Compliance",
          desc: "If compliance is a driver, we align your assessment to relevant standards and regulations so you can demonstrate due diligence to regulators, clients, and partners.",
          img: "/images/cyber-security/maturity-assessment/5.png",
        },
      ],
      videoSeq: "/seq/cyber/vulnerability/vulnerability-web.mp4",
      videoSeqMobile: "/seq/cyber/vulnerability/vulnerability-web.mp4",

      why: [
        {
          title: "Business-Aligned Approach",
          desc: "We review your policies, processes, and technology. Every recommendation ties back to protecting what matters most to your business.",
        },
        {
          title: "Independent, Expert View",
          desc: "Our assessors bring decades of frontline security experience, ensuring findings are unbiased, relevant, and grounded in real-world threat knowledge.",
        },
        {
          title: "Clear Communication",
          desc: "We translate complex technical findings into straightforward language, so decision-makers and technical teams are on the same page.",
        },
        {
          title: "Tailored for All Sizes",
          desc: "Whether you’re a growing SMB or a large enterprise, we scale the assessment to match your size, complexity, and objectives.",
        },
        {
          title: "Continuous Partnership",
          desc: "We do not just hand over a report and walk away. We stay engaged to validate fixes and guide your long-term improvement journey.",
        },
      ],
      faq: [
        {
          ques: "What is a Cyber Maturity Assessment?",
          ans: "It’s a structured evaluation of your organisation’s current security capabilities, measured against best-practice frameworks. It identifies strengths, weaknesses, and areas for improvement, along with a plan to enhance your resilience.",
        },
        {
          ques: "Why should my business get one?",
          ans: "Without knowing your current maturity, it’s easy to over-invest in the wrong areas or overlook critical gaps. An assessment helps you prioritise your efforts and spending for maximum impact.",
        },
        {
          ques: "How is it different from a penetration test?",
          ans: "A penetration test looks for technical vulnerabilities in systems. A maturity assessment takes a broader view, covering strategy, governance, processes, and culture as well as technical controls.",
        },
        {
          ques: "How often should we conduct one?",
          ans: "We recommend every 8–12 months, or after significant changes in your business, IT environment, or regulatory landscape.",
        },
        {
          ques: "Will it help with compliance?",
          ans: "Yes. We can tailor the assessment to align with compliance standards relevant to your industry, helping you demonstrate adherence to regulators, auditors, and clients.",
        },
        {
          ques: "How long does it take?",
          ans: "Depending on the size of your organisation, most assessments take 2–4 weeks from initial scoping to final report delivery.",
        },
      ],
    },
    "email-phishing-protection": {
      slug: "email-phishing-protection",
      bannerVideoWeb: "/videos/cyber-security/epp-web.mp4",
      bannerVideoMobile: "/videos/cyber-security/epp-mobile.mp4",
      AnimatedText:
        "Vesenex Email & Phishing Protection stops malicious messages before they ever reach your inbox, using a mix of advanced filtering, real-time threat intel, and targeted user protection. You get fewer suspicious emails, smarter safeguards, and the peace of mind that comes with knowing someone’s watching your back every time.",
      gridTitle: (
        <>
          Results You <span className="text-primary"> Can Count On</span>
        </>
      ),
      grid: [
        {
          name: "Advanced Email Filtering",
          desc: "We scan inbound, outbound, and internal messages in real time to block spam, phishing attempts, malware-laced attachments, and malicious links before they can be clicked.",
          img: "/images/cyber-security/email-phishing/1.png",
        },
        {
          name: "Domain & Brand Protection",
          desc: "We deploy SPF, DKIM, and DMARC enforcement to block spoofed messages pretending to be from your organisation, protecting both your team and your customers from fraud.",
          img: "/images/cyber-security/email-phishing/2.png",
        },
        {
          name: "AI-Powered Threat Detection",
          desc: "Our detection engines learn from every campaign they see, spotting new phishing tactics, typo-squatted domains, and language-based scams that bypass traditional filters.",
          img: "/images/cyber-security/email-phishing/3.png",
        },
        {
          name: "User Awareness & Safe Engagement",
          desc: "Suspicious emails are flagged with clear warnings, while users can report threats in one click, feeding back into our detection system to make it even sharper.",
          img: "/images/cyber-security/email-phishing/4.png",
        },
        {
          name: "Faster Incident Containment",
          desc: "If a user clicks on a phishing email, we move instantly, revoking stolen credentials, quarantining inboxes, and blocking malicious senders across your environment. We proactively take care of everything.",
          img: "/images/cyber-security/email-phishing/5.png",
        },
      ],
      videoSeq: "/seq/cyber/vulnerability/vulnerability-web.mp4",
      videoSeqMobile: "/seq/cyber/vulnerability/vulnerability-web.mp4",

      why: [
        {
          title: "Layered Email Defence",
          desc: "We combine signature-based scanning, behavioural analysis, and machine learning to detect both known and never-before-seen email threats, thereby closing the gap between arrival and removal.",
        },
        {
          title: "Human-Backed Verification",
          desc: "Not every suspicious email is a clear-cut case. Our analysts manually review edge cases, ensuring genuine business emails aren’t mistakenly quarantined and important work doesn’t stall.",
        },
        {
          title: "Global Threat Intelligence",
          desc: "Our email security platform taps into live global feeds to identify active phishing campaigns and malicious domains, stopping them in their tracks before they hit your users.",
        },
        {
          title: "Seamless Integration",
          desc: "We work natively with Microsoft 365, Google Workspace, and on-prem email servers, deploying protection without slowing down performance or disrupting existing workflows.",
        },
        {
          title: "Continuous Policy Optimization",
          desc: "We don’t just set rules and walk away; your filters, policies, and detection logic are constantly updated based on the latest phishing trends and your unique email traffic patterns.",
        },
      ],
      faq: [
        {
          ques: "What is Email & Phishing Protection?",
          ans: "It’s a service that shields your organisation from malicious email-based attacks like phishing scams, business email compromise (BEC), malware attachments, and spoofing. We block harmful messages before they’re delivered, help users spot suspicious content, and respond quickly if a threat slips through.",
        },
        {
          ques: "Why is phishing such a considerable risk?",
          ans: "Since phishing targets people, not just systems, even the best firewalls can’t stop a user from being tricked into clicking a malicious link or giving away credentials. Phishing is also constantly evolving, making traditional defences less effective on their own.",
        },
        {
          ques: "How does Vesenex stop phishing attacks?",
          ans: "We use a layered approach: real-time scanning of all messages, AI-based analysis to detect suspicious patterns, domain authentication to block spoofing, and global threat feeds to identify active campaigns. If something slips through and a click happens, we respond immediately to contain the impact.",
        },
        {
          ques: "Do you protect against internal phishing or compromised accounts?",
          ans: "Absolutely. We monitor internal email traffic as well, which helps detect unusual sending patterns from compromised accounts and stops them before they can spread malicious messages to other staff or customers.",
        },
        {
          ques: "Is this compliant with Australian security standards?",
          ans: "Yes. We follow the ASD Essential Eight recommendations for email security and ensure all data handling meets Australian privacy laws.",
        },
        {
          ques: "How much does Email & Phishing Protection cost?",
          ans: "Pricing is based on the number of mailboxes and the level of protection required. We offer simple billing plans so you can scale protection as your team grows.",
        },
      ],
    },
    "threat-intelligence": {
      slug: "threat-intelligence",
      bannerVideoWeb: "/videos/cyber-security/ti-web.mp4",
      bannerVideoMobile: "/videos/cyber-security/ti-mobile.mp4",
      AnimatedText:
        "Vesenex Threat Intelligence turns that scattered noise into actionable insight. We identify emerging threats, track malicious actors, and study their tactics so you can prepare for what is coming, not just react to what has already happened. Our intelligence feeds are curated, analysed, and translated into clear, practical security actions that strengthen your defences without overloading your team.",
      gridTitle: (
        <>
          From Threat Surface{" "}
          <span className="text-primary"> to Trusted Security</span>
        </>
      ),
      grid: [
        {
          name: "Real-Time Threat Feeds",
          desc: "We collect and correlate data from trusted global sources, industry-specific intelligence networks, and government advisories to give you a current picture of evolving threats.",
          img: "/images/cyber-security/threat/1.png",
        },
        {
          name: "Adversary Profiling",
          desc: "We track the tactics, techniques, and procedures of known threat actors so you understand exactly who might target you and how they operate.",
          img: "/images/cyber-security/threat/2.png",
        },
        {
          name: "Vulnerability Prioritisation",
          desc: "We match threat intelligence with your infrastructure to highlight which vulnerabilities are most likely to be exploited, helping you focus resources where they matter most.",
          img: "/images/cyber-security/threat/3.png",
        },
        {
          name: "Incident Enrichment",
          desc: "During a security incident, our analysts pull relevant threat intelligence to add context, link indicators of compromise, and speed up investigations.",
          img: "/images/cyber-security/threat/4.png",
        },
        {
          name: "Sector-Specific Insights",
          desc: "We tailor intelligence to your industry, factoring in the unique risks, regulations, and threat patterns that apply to your sector.",
          img: "/images/cyber-security/threat/5.png",
        },
      ],
      videoSeq: "/seq/cyber/vulnerability/vulnerability-web.mp4",
      videoSeqMobile: "/seq/cyber/vulnerability/vulnerability-web.mp4",

      why: [
        {
          title: "Curated, Not Cluttered",
          desc: "We filter out irrelevant noise, so you only see intelligence that applies to your business and threat landscape.",
        },
        {
          title: "Local Analysts with Global Reach",
          desc: "Our Australian-based intelligence team works with both regional data sources and international feeds, combining local context with global awareness.",
        },
        {
          title: "Integration with Existing Security Tools",
          desc: "Threat intelligence is fed directly into your SIEM, EDR, and other security platforms for automated detection and faster response.",
        },
        {
          title: "Proactive Defence",
          desc: "By spotting attacker activity before it reaches your network, we help you take pre-emptive measures instead of scrambling to contain damage.",
        },
        {
          title: "Continuous Updates",
          desc: "Our intelligence database is refreshed constantly, reflecting the latest research, attack patterns, and discovered vulnerabilities.",
        },
      ],
      faq: [
        {
          ques: "What is Threat Intelligence?",
          ans: "Threat intelligence is the collection and analysis of information about potential and existing cyber threats. It helps you understand who might attack you, why they would do it, and how they might try to succeed.",
        },
        {
          ques: "How does it help my business?",
          ans: "It gives you a clear picture of the risks you face, enabling you to strengthen defences, patch critical vulnerabilities, and make faster, better-informed security decisions.",
        },
        {
          ques: "Is this only useful for large enterprises?",
          ans: "Not at all. Sophisticated attackers increasingly target small and mid-sized organisations. Threat intelligence levels the playing field by providing early warning and insight typically reserved for large corporations.",
        },
        {
          ques: "What sources do you use for intelligence?",
          ans: "We combine open-source intelligence, commercial feeds, industry sharing groups, and proprietary research. This ensures you get a broad, accurate, and timely view of the threat landscape.",
        },
        {
          ques: "Do you provide alerts or reports?",
          ans: "Yes. You receive regular reports and real-time alerts when we detect threats relevant to your environment. These can be delivered in plain language summaries or technical detail, depending on your needs.",
        },
        {
          ques: "How is this different from what my antivirus or firewall already does?",
          ans: "Antivirus and firewalls block threats they recognise now. Threat intelligence works ahead of time, arming your defences with the latest attacker profiles and tactics so they are prepared for new and emerging threats.",
        },
        {
          ques: "How much does Threat Intelligence cost?",
          ans: "Pricing depends on the number of intelligence sources, integration points, and the level of analyst support you require. We provide flexible pricing options so you can scale coverage to your needs.",
        },
      ],
    },
  },
};
