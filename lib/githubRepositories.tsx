import axios from "axios";
import { Project } from "../interfaces/index";

const GET_REPOSITORIES = ` query {
  user(login: "lewiscasewell") {
    repositories(first: 6, isFork: false, orderBy: { field: STARGAZERS, direction: DESC }) {
      nodes {
        name
        description
        url
        homepageUrl
        forkCount
        stargazers {
          totalCount
        }
        primaryLanguage {
          name
        }
        diskUsage
      }
    }
  }
}
`;

export async function getRepositories(): Promise<Project[]> {
  try {
    const response = await axios({
      url: "https://api.github.com/graphql",
      method: "post",
      headers: {
        Authorization: `Bearer ${process.env.portfolio_github_access_token}`,
      },
      data: {
        query: GET_REPOSITORIES,
      },
    });

    if (response.data.errors) {
      throw new Error(response.data.errors);
    }

    return response.data.data.user.repositories.nodes;
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}
