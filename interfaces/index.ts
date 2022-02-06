export interface Project {
  name: string;
  description: string;
  url: string;
  homepageUrl: string;
  forkCount: number;
  stargazers: {
    totalCount: number;
  };
  primaryLanguage: {
    name: string;
  };
  diskUsage: number;
}
