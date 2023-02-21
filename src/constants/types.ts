export interface Project {
	image: string;
	altText: string;
	title: string;
	description: string;
	githubUrl?: string;
	siteUrl?: string;
	comingSoon?: boolean;
	language: string;
  framework: string;
  stateManagement: string;
  designTools: string;
  testingTools: string;
};

export type Projects = Project[];

export interface Job {
	title: string;
	companyName: string;
	experienceList: string[];
};

export type Jobs = Job[];

export type TechnicalSkills = string[];

export interface CodeSample {
	appName: string;
  appDescription: string;
  siteUrl?: string;
  githubLink: string;
};

export type CodeSamples = CodeSample[];

export interface EmploymentHistory {
  companyName: string;
  city: string;
  state: USState | string;
  jobTitle: string;
  startYear: number | string;
  endYear: number | string;
};

export type EmploymentHistories = EmploymentHistory[];

export type USState =
	'AL' | 'AK' | 'AZ'  | 'AR' | 'CA' |
	'CO' | 'CT' | 'DE'  | 'FL' | 'GA' |
	'HI' | 'ID' | 'IL'  | 'IN' | 'IA' |
	'KS' | 'KY' | 'LA'  | 'ME' | 'MD' |
	'MA' | 'MI' | 'MN'  | 'MS' | 'MO' |
	'MT' | 'NE' | 'NV'  | 'NH' | 'NJ' |
	'NM' | 'NY' | 'NC'  | 'ND' | 'OH' |
	'OK' | 'OR' | 'PA'  | 'RI' | 'SC' |
	'SD' | 'TN' | 'TX'  | 'UT' | 'VT' |
	'VA' | 'WA' | 'WV'  | 'WI' | 'WY';


export interface PortfolioContextType {
  projects: Projects
}