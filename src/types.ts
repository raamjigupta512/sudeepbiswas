export interface CareerMilestone {
  year: string;
  company: string;
  role: string;
  location?: string;
  description: string;
  highlights?: string[];
}

export interface ImpactMetric {
  id: string;
  value: string;
  unit?: string;
  label: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  number: string;
  company: string;
  title: string;
  role: string;
  context: string;
  summary: string;
  highlights: string[];
  tags: string[];
  challenge: string;
  strategy: string;
  outcomes: string[];
}

export interface ExpertiseCategory {
  title: string;
  items: string[];
  description?: string;
}

export interface ThoughtLeadershipTopic {
  title: string;
  subtitle: string;
  theme: string;
  status: string;
  readTime?: string;
}
