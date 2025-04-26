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
  showOwner: boolean;
}

export interface ProjectSection {
  id: string;
  title: string;
  color: string;
  projects: Project[];
}

export interface VisualProject {
  title: string;
  description: string;
  year: number;
  screenshot: string;
  url?: string;
  repo?: string;
  technologies: string[];
}

export interface ProjectData {
  sections: ProjectSection[];
  profiles: GithubProfile[];
  visualProjects: VisualProject[];
}

export interface GithubProfile {
  username: string;
  description: string;
}

export interface InstagramPost {
  url: string;
  description: string;
}

export interface HobbiesData {
  instagramPosts: InstagramPost[];
  instagramUsername: string;
}

export interface Language {
  language: string;
  level: string;
  percentage: number;
  color: string;
  description: string;
}

export interface LanguagesData {
  languages: Language[];
}

export interface Hobby {
  icon: string;
  text: string;
}

export interface HobbiesSidebarData {
  hobbies: Hobby[];
}

export interface Skill {
  title: string;
  level: number;
}

export interface SkillsData {
  skills: Skill[];
}

export interface ExperienceYear {
  title: string;
  startDate: string;
}

export interface ExperienceYearsData {
  experiences: ExperienceYear[];
}

export interface AboutMeProject {
  text?: string;
  link?: {
    url: string;
    text: string;
  };
}

export interface AboutMeProjectsData {
  projects: (string | AboutMeProject)[];
}