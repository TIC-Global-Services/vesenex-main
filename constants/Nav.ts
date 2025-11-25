import {
  Cyber1,
  Cyber2,
  Cyber3,
  Cyber4,
  Cyber5,
  Cyber6,
  Cyber7,
  Cyber8,
  ManagedIcon1,
  ManagedIcon2,
  ManagedIcon3,
  ManagedIcon4,
} from "@/components/Reusable/Images";

export const NAV_LINKS = [
  { name: "Home", link:'/' },
  {
    name: "Managed Protection",
    dropdown: [
      {
        title: "Managed Detection & Response (MDR)",
        desc: "Proactive detection, hunting, and neutralization of threats across endpoints and cloud.",
        icon: ManagedIcon1,
        link: "/managed-protection/managed-detection-response",
      },
      {
        title: "Managed SIEM",
        desc: "Advanced log analysis and correlation to catch threats before they escalate.",
        icon: ManagedIcon2,
        link: "/managed-protection/managed-siem",
      },
      {
        title: "Managed Firewall Security",
        desc: "Expert firewall policy management with real-time intrusion prevention.",
        icon: ManagedIcon3,
        link: "/managed-protection/managed-firewall-security",
      },
      {
        title: "Endpoint Detection & Response",
        desc: "Continuous endpoint monitoring, rapid detection, and automated response to stop threats at the source.",
        icon: ManagedIcon4,
        link: "/managed-protection/endpoint-detection-response",
      },
    ],
  },
  {
    name: "Cyber security projects ",
    dropdown: [
      {
        link: "/cyber-security-projects/vulnerability-management",
        title: "Vulnerability Management",
        desc: "Spot weaknesses before attackers do. Continuous scanning, prioritization, and remediation guidance to keep your systems airtight.",
        icon: Cyber1,
      },
      {
        link: "/cyber-security-projects/penetration-testing",
        title: "Penetration Testing",
        desc: "Internal, external, and web app testing to expose real-world attack paths before criminals find them.",
        icon: Cyber2,
      },
      {
        link: "/cyber-security-projects/grc",
        title: "Governance, Risk, Compliance & Strategies",
        desc: "Align with frameworks like ASD Essential Eight, NIST, and ISO 27001.",
        icon: Cyber3,
      },
      {
        link: "/cyber-security-projects/cyber-maturity-assessment",
        title: "Cyber Maturity Assessments",
        desc: "Pinpoint gaps and build a clear, actionable roadmap.",
        icon: Cyber4,
      },
      {
        link: "/cyber-security-projects/threat-intelligence",
        title: "Threat Intelligence",
        desc: "Dark web monitoring, global threat feeds, and industry-specific alerts.",
        icon: Cyber5,
      },
      {
        link: "/cyber-security-projects/cybersecurity-consulting",
        title: "Cybersecurity Consulting",
        desc: "Tailored strategies for long-term resilience.",
        icon: Cyber6,
      },
      {
        link: "/cyber-security-projects/cyber-awareness-training-phishing-simulation",
        title: "Cyber Awareness Training",
        desc: "Engaging, role-based learning to reduce risky behaviours.",
        icon: Cyber7,
      },
      {
        link: "/cyber-security-projects/email-phishing-protection",
        title: "Phishing & Email Security",
        desc: "Protect against BEC, spoofing, and malicious email threats.",
        icon: Cyber8,
      },
    ],
  },
  { name: "Company" },
  { name: "Resources" },
];

export const Footer_LINKS = [
  {
    name: "Quick Links",
    dropdown: [
      { name: "Home", link: "/" },
      { name: "Company", link: "/company" },
      { name: "Resources", link: "/resource" },
    ],
  },
  {
    name: "Cyber security projects ",
    dropdown: [
      {
        link: "/cyber-security-projects/vulnerability-management",
        title: "Vulnerability Management",
        desc: "Spot weaknesses before attackers do. Continuous scanning, prioritization, and remediation guidance to keep your systems airtight.",
        icon: Cyber1,
      },
      {
        link: "/cyber-security-projects/penetration-testing",
        title: "Penetration Testing",
        desc: "Internal, external, and web app testing to expose real-world attack paths before criminals find them.",
        icon: Cyber2,
      },
      {
        link: "/cyber-security-projects/",
        title: "Governance, Risk, Compliance & Strategies",
        desc: "Align with frameworks like ASD Essential Eight, NIST, and ISO 27001.",
        icon: Cyber3,
      },
      {
        link: "/cyber-security-projects/",
        title: "Cyber Maturity Assessments",
        desc: "Pinpoint gaps and build a clear, actionable roadmap.",
        icon: Cyber4,
      },
      {
        link: "/cyber-security-projects/",
        title: "Threat Intelligence",
        desc: "Dark web monitoring, global threat feeds, and industry-specific alerts.",
        icon: Cyber5,
      },
      {
        link: "/cyber-security-projects/",
        title: "Cybersecurity Consulting",
        desc: "Tailored strategies for long-term resilience.",
        icon: Cyber6,
      },
      {
        link: "/cyber-security-projects/",
        title: "Cyber Awareness Training",
        desc: "Engaging, role-based learning to reduce risky behaviours.",
        icon: Cyber7,
      },
      {
        link: "/cyber-security-projects/",
        title: "Phishing & Email Security",
        desc: "Protect against BEC, spoofing, and malicious email threats.",
        icon: Cyber8,
      },
    ],
  },
  {
    name: "Managed Protection",
    dropdown: [
      {
        title: "Managed Detection & Response (MDR)",
        desc: "Proactive detection, hunting, and neutralization of threats across endpoints and cloud.",
        icon: ManagedIcon1,
        link: "/managed-protection/managed-detection-response",
      },
      {
        title: "Managed SIEM",
        desc: "Advanced log analysis and correlation to catch threats before they escalate.",
        icon: ManagedIcon2,
        link: "/managed-protection/managed-siem",
      },
      {
        title: "Managed Firewall Security",
        desc: "Expert firewall policy management with real-time intrusion prevention.",
        icon: ManagedIcon3,
        link: "/managed-protection/managed-firewall-security",
      },
      {
        title: "Endpoint Detection & Response",
        desc: "Continuous endpoint monitoring, rapid detection, and automated response to stop threats at the source.",
        icon: ManagedIcon4,
        link: "/managed-protection/endpoint-detection-response",
      },
    ],
  },
];
