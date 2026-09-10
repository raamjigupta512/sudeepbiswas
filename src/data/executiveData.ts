import { CareerMilestone, ImpactMetric, CaseStudy, ExpertiseCategory, ThoughtLeadershipTopic } from '../types';

export const EXECUTIVE_INFO = {
  name: "Sudeep Biswas",
  title: "Vice President – ITC Infotech",
  location: "Bengaluru, Karnataka, India",
  tagline: "Technology Leader | Transformation Partner | SAP & S/4HANA Strategist",
  brandMotto: "TRANSFORM | ENABLE | DELIVER",
  heroEyebrow: "STRATEGY   |   TRANSFORMATION   |   PEOPLE   |   IMPACT",
  heroHeadline: "Sudeep Biswas",
  heroSubheadline: "Technology Leader. Transformation Partner.",
  heroHighlight: "Enabling a Smarter, More Resilient Tomorrow.",
  heroBio: "Nearly three decades of experience in helping global enterprises simplify digital transformation — enabling predictable, resilient, and customer-centric SAP ecosystems that drive measurable business value.",
  pdfFileName: "Sudeep Biswas Executive Profile.pdf",
  email: "sudeep28@gmail.com",
  phone: "+91 9972999742",
  linkedin: "https://www.linkedin.com/in/sudeep-biswas-17b1761",
  linkedinDisplay: "www.linkedin.com/in/sudeep-biswas-17b1761"
};

export const HERO_CREDIBILITY = [
  { value: "3 Decades", label: "Experience" },
  { value: "650+", label: "SAP Consultants Led" },
  { value: "89%", label: "Employee Satisfaction" },
  { value: "Global", label: "Delivery Experience" }
];

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: "01",
    value: "40%",
    label: "TCO Reduction",
    description: "Using optimized delivery model, Agile, DevSecOps, GenAI & Automation"
  },
  {
    id: "02",
    value: "30%",
    label: "Cycle Time Reduction",
    description: "Faster, more efficient delivery outcomes"
  },
  {
    id: "03",
    value: ">97%",
    label: "SLA & KPI Achievement",
    description: "Consistent, predictable performance"
  },
  {
    id: "04",
    value: "<2%",
    label: "Change Failure Rate",
    description: "High quality, low risk delivery"
  }
];

export const TRUSTED_ENTERPRISES = [
  { name: "ITC INFOTECH", subtitle: "Enterprise Technology" },
  { name: "MAERSK", subtitle: "Global Logistics & Shipping" },
  { name: "mindtree", subtitle: "Digital Transformation" },
  { name: "Infosys", subtitle: "Next-Gen Services" },
  { name: "HCLTech", subtitle: "Supercharging Progress" },
  { name: "Capgemini", subtitle: "Consulting & Services" },
  { name: "asianpaints", subtitle: "Consumer Manufacturing" },
  { name: "SIEMENS", subtitle: "Industrial Technology" }
];

export const PHILOSOPHY_PILLARS = [
  {
    num: "01",
    name: "PEOPLE",
    lead: "Building high-performing, engaged global teams.",
    description: "Empowering talent through psychological safety, continuous capability development, and purpose-driven alignment that achieved 89% employee engagement across global delivery centers."
  },
  {
    num: "02",
    name: "PROCESS",
    lead: "Creating predictable, scalable and resilient delivery.",
    description: "Institutionalizing Agile, DevSecOps, ITIL and robust governance frameworks that reduce cycle times by 30% and change failure rates below 2%."
  },
  {
    num: "03",
    name: "TECHNOLOGY",
    lead: "Using SAP, automation, GenAI and modern engineering to create measurable value.",
    description: "Architecting clean core S/4HANA ecosystems, automated tax and order-to-cash workflows, and pragmatic AI accelerators to achieve 40% TCO reduction."
  }
];

export const CAREER_JOURNEY: CareerMilestone[] = [
  {
    year: "1995",
    company: "SIEMENS",
    role: "Executive Trainee",
    location: "India",
    description: "Began career with Siemens in industrial and electrical systems engineering, mastering foundational engineering rigors, structured troubleshooting, and large-scale industrial client engagements.",
    highlights: ["Electrical systems engineering", "Industrial client operations", "Rigorous systems diagnostics"]
  },
  {
    year: "1996–1998",
    company: "SPJIMR",
    role: "MBA – Marketing",
    location: "Mumbai, India",
    description: "Graduated with an MBA in Marketing from SP Jain Institute of Management & Research, establishing deep strategic acumen in market development, organizational behavior, and customer economics.",
    highlights: ["Business strategy & economics", "Customer-centric product strategy", "Market expansion frameworks"]
  },
  {
    year: "1998–2001",
    company: "ASIAN PAINTS",
    role: "Area Manager",
    location: "India",
    description: "Led supply chain execution, regional dealer distribution ecosystems, and commercial operations for India's premier paints conglomerate. Developed operational discipline across fast-moving supply chains.",
    highlights: ["Supply chain & distribution logistics", "Regional revenue accountability", "Dealer ecosystem orchestration"]
  },
  {
    year: "2001–2004",
    company: "CAPGEMINI ERNST & YOUNG",
    role: "Manager",
    location: "India & Global",
    description: "Led business consulting and large-scale ERP advisory engagements. Formulated business process re-engineering blueprints and coordinated multi-functional client stakeholder alignment.",
    highlights: ["Enterprise ERP advisory", "Business process re-engineering", "Executive stakeholder management"]
  },
  {
    year: "2004–2005",
    company: "HCL TECHNOLOGIES",
    role: "Manager",
    location: "Canada & India",
    description: "Spearheaded JD Edwards solution architecture and enterprise practice growth across North American client environments. Successfully scaled the specialized practice to approximately 150 consultants.",
    highlights: ["Scaled practice to ~150 consultants", "Canada market delivery", "JD Edwards solution architecture"]
  },
  {
    year: "2005–2015",
    company: "INFOSYS",
    role: "Group Project Manager",
    location: "Bengaluru & Global",
    description: "A decade of executive delivery and portfolio leadership. Developed Infosys's flagship SAP large-program implementation and rollout methodologies, stewarding multi-million-dollar portfolio P&Ls and global client rollouts.",
    highlights: ["10-year tenure driving large programs", "Pioneered rollout methodologies", "Multi-geography portfolio P&L leadership"]
  },
  {
    year: "2015–2020",
    company: "MINDTREE",
    role: "Associate Vice President",
    location: "Bengaluru, India",
    description: "Led global delivery, pre-sales, and P&L for enterprise SAP. Instrumental in scaling the SAP practice from a few hundred consultants to 1,300+ professionals globally while sustaining top-quartile client satisfaction.",
    highlights: ["Scaled practice from ~300 to 1,300+ consultants", "Global P&L & pre-sales stewardship", "High-margin delivery excellence"]
  },
  {
    year: "2020–2023",
    company: "A.P. MOLLER – MAERSK",
    role: "General Manager – Order-to-Cash Platform",
    location: "Bengaluru, India",
    description: "Served as Co-Product Owner and Senior Engineering Manager for the Order-to-Cash domain within Maersk's strategic New Finance & Tax Platform — driving one of the world's largest greenfield SAP S/4HANA implementations.",
    highlights: ["Order-to-Cash platform ownership", "Greenfield SAP S/4HANA enterprise core", "Global transport & logistics transformation"]
  },
  {
    year: "2023–PRESENT",
    company: "ITC INFOTECH",
    role: "Vice President",
    location: "Bengaluru, India",
    description: "Leading enterprise transformation, strategic technology partnerships, and modern digital delivery ecosystems for Fortune 500 and global enterprise clients across diverse industrial verticals.",
    highlights: ["Strategic technology leadership", "Multi-vendor enterprise governance", "AI, DevSecOps & S/4HANA roadmap"]
  }
];

export const CAREER_HIGHLIGHTS = [
  {
    value: "650+",
    label: "SAP Consultants Built & Led",
    subtext: "Built, coached and directed world-class global consulting practices across multiple geographies"
  },
  {
    value: "1,300+",
    label: "SAP Practice Scale at Mindtree",
    subtext: "Instrumental in growing practice from a few hundred specialized engineers to over 1,300 consultants"
  },
  {
    value: "89%",
    label: "Employee Satisfaction Score",
    subtext: "High-trust leadership fostering retention, technical mastery and psychological safety"
  },
  {
    value: "40%",
    label: "TCO Reduction Achieved",
    subtext: "Realized through modern delivery models, DevSecOps automation, and GenAI accelerators"
  },
  {
    value: "30%",
    label: "Cycle Time Reduction",
    subtext: "Streamlining release velocity and Order-to-Cash pipelines across complex enterprise landscapes"
  },
  {
    value: ">97%",
    label: "SLA & KPI Performance",
    subtext: "Consistent delivery predictability across multi-million dollar global enterprise portfolios"
  },
  {
    value: "<2%",
    label: "Change Failure Rate",
    subtext: "Disciplined engineering standards and rigorous verification ensuring flawless production releases"
  },
  {
    value: "~150",
    label: "JD Edwards Practice at HCL",
    subtext: "Scaled enterprise ERP capabilities across Canadian and international cross-border accounts"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-maersk",
    number: "01",
    company: "MAERSK",
    title: "New Finance & Tax Platform",
    role: "Co-Product Owner & Senior Engineering Manager (Order-to-Cash)",
    context: "A.P. Moller – Maersk global transformation connecting container logistics across 130+ nations.",
    summary: "Sudeep served as co-product owner and senior engineering manager for Order-to-Cash within Maersk's strategic New Finance & Tax Platform transformation, architecting a greenfield SAP S/4HANA backbone.",
    highlights: ["DATA QUALITY", "PROCESS OPTIMIZATION", "AUTOMATION"],
    tags: ["SAP S/4HANA", "Order-to-Cash", "Greenfield Transformation", "Data Harmonization", "Process Optimization", "Automation"],
    challenge: "Maersk required replacing fragmented legacy billing and financial engines with a unified, real-time core platform capable of handling immense global transaction volumes while harmonizing cross-border customs, tax requirements, and freight contracts.",
    strategy: "Spearheaded Order-to-Cash domain engineering by integrating SAP S/4HANA greenfield architecture with automated data validation pipelines, decoupled microservices, and end-to-end process visibility for international logistics.",
    outcomes: [
      "Streamlined global Order-to-Cash lifecycle across high-volume ocean and inland logistics workflows.",
      "Achieved high data consistency and automated tax compliance across international operational nodes.",
      "Accelerated invoice-to-cash reconciliation cycle with resilient modern engineering standards."
    ]
  },
  {
    id: "case-mindtree",
    number: "02",
    company: "MINDTREE",
    title: "Scaling a Global SAP Practice",
    role: "Associate Vice President – Global Delivery & Practice Leadership",
    context: "Strategic hyper-growth initiative to expand Mindtree's enterprise footprint into Tier-1 global accounts.",
    summary: "Sudeep was instrumental in scaling Mindtree's SAP practice from a few hundred consultants to 1,300+ professionals globally, delivering sustained high-margin profitability, top pre-sales win rates, and 89% employee satisfaction.",
    highlights: ["SAP", "GLOBAL DELIVERY", "P&L", "PRE-SALES", "PEOPLE LEADERSHIP"],
    tags: ["SAP Practice Growth", "Global Delivery", "P&L Management", "Pre-Sales", "People Leadership", "Capability Incubation"],
    challenge: "Rapidly scaling an enterprise practice without diluting delivery quality, losing technical depth, or causing attrition in a highly competitive consulting talent market.",
    strategy: "Instituted structured competency academies, established rigorous solution architecture review boards, aligned account managers with pre-sales engineering, and cultivated a culture of psychological safety and mentorship.",
    outcomes: [
      "Grew practice head-count from ~300 to over 1,300 certified consultants globally.",
      "Maintained industry-leading 89% employee engagement and reduced key talent attrition.",
      "Secured multi-million-dollar long-term transformation contracts across US and European markets."
    ]
  },
  {
    id: "case-hcl",
    number: "03",
    company: "HCL TECHNOLOGIES",
    title: "JD Edwards Practice & Transformation",
    role: "Manager – Enterprise Applications",
    context: "Expanding North American ERP presence and establishing an agile delivery footprint in Canada.",
    summary: "Spearheaded JD Edwards solution architecture and enterprise practice growth, scaling specialized ERP talent to approximately 150 consultants delivering complex Canadian and cross-border implementations.",
    highlights: ["JD EDWARDS", "SOLUTION ARCHITECTURE", "PROGRAM MANAGEMENT", "CANADA"],
    tags: ["JD Edwards", "Solution Architecture", "Program Management", "Canada Operations", "Cross-Border Delivery"],
    challenge: "Clients in manufacturing and distribution required localized compliance, integrated supply chain workflows, and seamless ERP migrations within tight operational turnaround windows.",
    strategy: "Architected repeatable solution templates for Canadian regulatory and multi-currency standards, paired onshore client delivery leaders with offshore development centers, and led critical program governance.",
    outcomes: [
      "Scaled the dedicated JD Edwards practice to approximately 150 consultants.",
      "Delivered zero-downtime go-lives for key Canadian manufacturing and distribution clients.",
      "Created reusable solution accelerators that reduced onboarding and project initiation timelines by 25%."
    ]
  },
  {
    id: "case-infosys",
    number: "04",
    company: "INFOSYS",
    title: "Large Program Transformation & Rollout Frameworks",
    role: "Group Project Manager – Enterprise SAP",
    context: "A decade of stewarding complex multinational SAP rollouts across North America, Europe, and Asia.",
    summary: "Played a pivotal leadership role in developing Infosys's proprietary SAP large-program implementation and rollout methodologies, managing multi-million-dollar portfolio P&Ls and global client rollouts.",
    highlights: ["SAP", "PROGRAM MANAGEMENT", "PORTFOLIO P&L", "GLOBAL ROLLOUTS"],
    tags: ["SAP Large Programs", "Program Management", "Portfolio P&L", "Global Rollouts", "Delivery Methodology"],
    challenge: "Global enterprise clients faced massive budget overruns and operational friction when rolling out corporate SAP templates across diverse international operating companies.",
    strategy: "Designed standardized global template rollout frameworks that decoupled core enterprise rules from localized statutory requirements, instituting rigid stage-gate governance and multi-vendor coordination.",
    outcomes: [
      "Developed standardized SAP rollout methodology adopted across multi-country enterprise programs.",
      "Delivered >97% SLA & KPI adherence over a 10-year leadership tenure across premier accounts.",
      "Sustained profitable portfolio P&L performance while navigating complex multi-vendor ecosystems."
    ]
  }
];

export const TRANSFORMATION_TOOLKIT: ExpertiseCategory[] = [
  {
    title: "STRATEGY",
    description: "Aligning boardroom vision with pragmatic technological execution.",
    items: [
      "Technology Strategy",
      "Business Transformation",
      "IT Strategy & Roadmaps",
      "Target Operating Models",
      "Enterprise Architecture Alignment"
    ]
  },
  {
    title: "SAP",
    description: "Architecting resilient, clean-core enterprise application ecosystems.",
    items: [
      "SAP S/4HANA Greenfield & Brownfield",
      "SAP Implementation & Governance",
      "Global SAP Rollouts",
      "Order-to-Cash (O2C) Platforms",
      "SAP Ecosystem Optimization"
    ]
  },
  {
    title: "LEADERSHIP",
    description: "Inspiring global teams and steering multi-vendor delivery governance.",
    items: [
      "Global Delivery & Hub Orchestration",
      "P&L Management & Commercial Growth",
      "People Leadership (650+ Led)",
      "CXO Stakeholder Management",
      "Multi-Vendor Partner Ecosystems"
    ]
  },
  {
    title: "ENGINEERING",
    description: "Modernizing velocity, security, and intelligent automation.",
    items: [
      "Agile & Scaled Delivery Frameworks",
      "DevSecOps & Automated Pipelines",
      "Process Automation & RPA",
      "GenAI & AI-Powered Operations",
      "Continuous Integration & Quality Engineering"
    ]
  },
  {
    title: "OPERATIONS",
    description: "Ensuring predictable resilience, governance, and SLA adherence.",
    items: [
      "ITSM & ITIL Governance",
      "SLA & KPI Management (>97% Track Record)",
      "Risk Mitigation & Disaster Resilience",
      "Change Management (<2% Failure Rate)",
      "Vendor & Contract Governance"
    ]
  }
];

export const GLOBAL_LOCATIONS = [
  { name: "Bengaluru, India", role: "Current Leadership Hub (ITC Infotech, Maersk, Mindtree, Infosys)", x: 69.5, y: 54 },
  { name: "Mumbai, India", role: "Academic Pedigree (SPJIMR, VJTI) & Siemens Foundations", x: 67.8, y: 51 },
  { name: "Toronto / Montreal, Canada", role: "HCL Technologies Enterprise Delivery & JD Edwards Practice", x: 28, y: 31 },
  { name: "Copenhagen, Denmark", role: "A.P. Moller – Maersk HQ Strategic Program Coordination", x: 52, y: 26 },
  { name: "North America & Europe", role: "Global Enterprise Client Rollouts & Multi-Continent Delivery", x: 45, y: 35 }
];

export const GLOBAL_INDUSTRIES = [
  "CPG (Consumer Packaged Goods)",
  "Shipping & Logistics",
  "Industrial Equipment",
  "Automotive",
  "Banking & Financial Services",
  "Petrochemicals",
  "Media & Entertainment",
  "Consumer Durables",
  "Aerospace",
  "Realty Services"
];

export const THOUGHT_LEADERSHIP_TOPICS: ThoughtLeadershipTopic[] = [
  {
    title: "The Clean Core Imperative: Realizing Real Value from S/4HANA",
    subtitle: "Why modernizing ERP requires unbundling custom code, harmonizing data foundations, and treating ERP as an agile API-driven core.",
    theme: "SAP S/4HANA",
    status: "Coming soon",
    readTime: "7 min read"
  },
  {
    title: "Beyond the Hype: Pragmatic GenAI & Automation in Enterprise Delivery",
    subtitle: "A practitioner's perspective on reducing TCO by 40% without compromising enterprise governance, security, or compliance.",
    theme: "AI & Automation",
    status: "Coming soon",
    readTime: "6 min read"
  },
  {
    title: "Scaling Engineering Organizations with High Psychological Safety",
    subtitle: "How we sustained an 89% employee satisfaction score while tripling practice headcount from 300 to 1,300+ consultants.",
    theme: "Technology Leadership",
    status: "Coming soon",
    readTime: "8 min read"
  },
  {
    title: "The Order-to-Cash Engine in Global Supply Chains",
    subtitle: "De-risking multi-jurisdictional tax compliance, customs velocity, and revenue recognition in volatile global trade.",
    theme: "Digital Transformation",
    status: "Coming soon",
    readTime: "5 min read"
  },
  {
    title: "Modernizing Operating Models in Complex Multi-Vendor Landscapes",
    subtitle: "Moving from transactional vendor contracts to outcome-based partnership charters that guarantee SLA predictability.",
    theme: "Operating Model Transformation",
    status: "Coming soon",
    readTime: "9 min read"
  },
  {
    title: "Bridging the Executive Divide: Translating Architecture into Boardroom Value",
    subtitle: "How CIOs and technology leaders can frame core platform modernizations around working capital, risk reduction, and agility.",
    theme: "Building High-Performance Teams",
    status: "Coming soon",
    readTime: "6 min read"
  }
];

export const EDUCATION = [
  {
    institution: "SPJIMR",
    fullName: "SP Jain Institute of Management & Research",
    degree: "Master of Business Administration (MBA)",
    specialization: "Marketing",
    years: "1996 – 1998",
    location: "Mumbai, India",
    notes: "Premier Indian management institution renowned for value-based leadership, strategic marketing, and cross-functional enterprise management."
  },
  {
    institution: "VJTI",
    fullName: "Veermata Jijabai Technological Institute",
    degree: "Bachelor of Engineering (B.E.)",
    specialization: "Electrical Engineering",
    years: "1991 – 1995",
    location: "Mumbai, India",
    notes: "One of Asia's most historic engineering academies (est. 1887), cultivating rigorous analytical foundations, systems modeling, and technical discipline."
  }
];
