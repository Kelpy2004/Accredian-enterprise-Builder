// Static catalog data served by the Next.js API routes.
// Mirrors the Express api-server data so the frontend behavior is identical.

export type Solution = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  accent: string;
};

export type Program = {
  id: string;
  title: string;
  category: string;
  duration: string;
  level: string;
  description: string;
  outcomes: string[];
  modules: string[];
};

export type Stats = {
  professionalsTrained: number;
  batchesLaunched: number;
  satisfactionScore: number;
  enterprisePartners: number;
  countriesReached: number;
  learningHours: number;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
};

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export const SOLUTIONS: Solution[] = [
  {
    id: "data-ai-training",
    title: "Data & AI Training",
    tagline: "Industry-grade Data Science and AI fluency for every team.",
    description:
      "Hands-on programs that turn analysts, engineers, and managers into AI-fluent practitioners — from foundations to applied generative AI.",
    highlights: [
      "Capstones built on your own datasets",
      "Live mentorship from FAANG and Tier-1 product leaders",
      "Outcomes mapped to business KPIs",
    ],
    accent: "#1A73E8",
  },
  {
    id: "leadership-programs",
    title: "Leadership Programs",
    tagline: "Build the next generation of decision-makers.",
    description:
      "Structured leadership tracks for emerging managers and senior executives, blending behavioural science with real boardroom case studies.",
    highlights: [
      "Cohort-based with peer learning circles",
      "1:1 executive coaching sessions",
      "ISB, IIM, and global faculty network",
    ],
    accent: "#4F46E5",
  },
  {
    id: "technology-upskilling",
    title: "Technology Upskilling",
    tagline: "Modernize engineering teams at scale.",
    description:
      "Role-based pathways across Cloud, DevOps, Cybersecurity, and Full-Stack engineering — designed for measurable productivity gains.",
    highlights: [
      "Skill-gap diagnostics before each cohort",
      "Live labs and sandboxed environments",
      "Certification-aligned curriculum",
    ],
    accent: "#0EA5E9",
  },
  {
    id: "custom-learning-paths",
    title: "Custom Learning Paths",
    tagline: "Bespoke programs built around your business goals.",
    description:
      "Co-create a learning roadmap with our enterprise solutions team — sequenced modules, custom assessments, and dedicated success management.",
    highlights: [
      "Dedicated learning success partner",
      "White-glove onboarding for 100+ learners",
      "Quarterly impact reviews with leadership",
    ],
    accent: "#2563EB",
  },
];

export const PROGRAMS: Program[] = [
  {
    id: "executive-data-science",
    title: "Executive Program in Data Science",
    category: "Data Science",
    duration: "9 months",
    level: "Intermediate",
    description:
      "End-to-end Data Science track covering Python, statistics, ML, and applied case studies for analytics and product teams.",
    outcomes: [
      "Build production-ready ML models",
      "Translate business problems into data products",
      "Lead cross-functional analytics initiatives",
    ],
    modules: [
      "Python & SQL for Data",
      "Statistics & Experimentation",
      "Machine Learning Foundations",
      "MLOps & Deployment",
      "Capstone with Industry Mentor",
    ],
  },
  {
    id: "ai-ml-leaders",
    title: "AI & ML for Business Leaders",
    category: "AI & ML",
    duration: "6 months",
    level: "Advanced",
    description:
      "Designed for senior tech and product leaders — covers deep learning, generative AI, and the strategy of deploying AI at enterprise scale.",
    outcomes: [
      "Architect responsible AI roadmaps",
      "Evaluate build vs. buy for GenAI",
      "Lead AI transformation programs",
    ],
    modules: [
      "Deep Learning Foundations",
      "Generative AI & LLMs",
      "AI Product Strategy",
      "AI Governance & Ethics",
      "Enterprise GenAI Capstone",
    ],
  },
  {
    id: "product-management-pro",
    title: "Product Management Professional",
    category: "Product Management",
    duration: "6 months",
    level: "Beginner to Intermediate",
    description:
      "A practitioner-led PM track for engineers, designers, and analysts moving into product roles — with frameworks used at top product orgs.",
    outcomes: [
      "Ship customer-validated features",
      "Run discovery and prioritisation rituals",
      "Own roadmap and stakeholder narrative",
    ],
    modules: [
      "Product Discovery",
      "User Research & Analytics",
      "Roadmapping & Prioritisation",
      "GTM & Launch Strategy",
      "Live PM Capstone",
    ],
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation Leadership",
    category: "Digital Transformation",
    duration: "5 months",
    level: "Senior",
    description:
      "Equip CXO-track leaders with the playbooks to modernize legacy operations, orchestrate change, and unlock measurable digital ROI.",
    outcomes: [
      "Design a 24-month transformation plan",
      "Build a digital operating model",
      "Drive change with measurable KPIs",
    ],
    modules: [
      "Operating Models for the Digital Era",
      "Customer Experience & CX Tech",
      "Data-Driven Decision Making",
      "Org Design & Change Management",
      "Transformation Capstone",
    ],
  },
  {
    id: "leadership-excellence",
    title: "Leadership Excellence Program",
    category: "Leadership",
    duration: "4 months",
    level: "Mid to Senior",
    description:
      "Behavioural and strategic leadership for managers stepping into multi-team and P&L ownership roles.",
    outcomes: [
      "Lead high-performing distributed teams",
      "Coach and develop senior talent",
      "Communicate with executive presence",
    ],
    modules: [
      "Self-Awareness & EQ",
      "Coaching & Feedback",
      "Strategic Thinking",
      "Influence & Storytelling",
      "Leadership Simulation",
    ],
  },
  {
    id: "cloud-devops-engineer",
    title: "Cloud & DevOps Engineering",
    category: "Technology",
    duration: "5 months",
    level: "Intermediate",
    description:
      "Hands-on Cloud (AWS/Azure) and DevOps program for engineering teams modernizing delivery pipelines and platform reliability.",
    outcomes: [
      "Design resilient cloud architectures",
      "Implement CI/CD at enterprise scale",
      "Operate observable, secure platforms",
    ],
    modules: [
      "Cloud Foundations (AWS / Azure)",
      "Containers & Kubernetes",
      "CI/CD & Infrastructure as Code",
      "Site Reliability Engineering",
      "Platform Capstone",
    ],
  },
];

export const STATS: Stats = {
  professionalsTrained: 25000,
  batchesLaunched: 320,
  satisfactionScore: 4.7,
  enterprisePartners: 250,
  countriesReached: 18,
  learningHours: 480000,
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "tata-cliq",
    quote:
      "Accredian helped us upskill 400+ engineers in under a year. The cohort structure and live mentorship made the difference — adoption was the highest we've ever seen on an L&D program.",
    author: "Priya Menon",
    role: "Head of Talent Development",
    company: "Tata CLiQ",
  },
  {
    id: "genpact",
    quote:
      "The Data & AI track was directly mapped to our analytics roadmap. Within two quarters, our teams shipped three production ML use cases that wouldn't have been possible otherwise.",
    author: "Rahul Kapoor",
    role: "VP, Analytics & AI",
    company: "Genpact",
  },
  {
    id: "hcl",
    quote:
      "From custom curriculum design to learner success management, the Accredian team operated like an extension of our L&D function. The impact on retention has been measurable.",
    author: "Anita Verma",
    role: "Director, Learning & Development",
    company: "HCL Technologies",
  },
];

export const FAQS: Faq[] = [
  {
    id: "faq-customisation",
    question: "Can programs be customized to our internal context and tooling?",
    answer:
      "Yes. Every enterprise engagement begins with a discovery workshop. We adapt curriculum, assessments, and capstones to your stack, processes, and business priorities.",
  },
  {
    id: "faq-cohort-size",
    question: "What is the typical cohort size for enterprise batches?",
    answer:
      "Cohorts run from 25 to 250 learners. For larger workforces we run staggered batches with a dedicated learning success partner per program.",
  },
  {
    id: "faq-delivery",
    question: "How are programs delivered — live, async, or blended?",
    answer:
      "All programs are blended: live mentor-led sessions, on-demand modules, hands-on labs, and a capstone. We can deliver fully virtual, hybrid, or on-site.",
  },
  {
    id: "faq-measurement",
    question: "How do you measure program impact?",
    answer:
      "We instrument every program with skill-gap diagnostics, knowledge checks, capstone evaluations, manager surveys, and a quarterly business impact review with your leadership.",
  },
  {
    id: "faq-pricing",
    question: "What does pricing look like for a typical engagement?",
    answer:
      "Pricing is structured per learner per program with volume tiers, plus optional white-glove services. Book a demo and our team will share a tailored proposal within 48 hours.",
  },
];
