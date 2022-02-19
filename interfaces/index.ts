export interface Project {
  name: string;
  description: string;
  url: string;
  homepageUrl: string;
  repositoryTopics: {
    edges: Array<{
      node: {
        topic: {
          name: string;
        };
      };
    }>;
  };
  primaryLanguage: {
    name: string;
    color: string;
  };
}
