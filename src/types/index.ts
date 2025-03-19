export interface RelatedCompany {
  name: string;
  flag: string;
  logo?: string;
  linkedin?: string;
  website?: string;
}

export interface ConsultingCompany {
  name: string;
  flag: string;
  logo?: string;
  linkedin?: string;
  website?: string;
}

export interface Role {
  title: string;
  period: string;
  description: string;
  achievements: string[];
  contractType: 'full-time' | 'part-time' | 'freelance' | 'contract' | null;
  workModel: 'on-site' | 'hybrid' | 'remote' | null;
}

export interface Experience {
  company: string;
  logo: string;
  location: string;
  description: string;
  period: string;
  roles: Role[];
  flag: string;
  relatedCompanies?: RelatedCompany[];
  consultingCompany?: ConsultingCompany;
  linkedin?: string;
  website?: string;
  showDuration?: boolean;
}

export interface Project {
  name: string;
  repo: string;
  description: string;
}

export interface ProjectSection {
  id: string;
  title: string;
  projects: Project[];
}

export interface GithubProfile {
  username: string;
  description: string;
}