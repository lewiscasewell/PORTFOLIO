import { NextApiRequest, NextApiResponse } from "next";
import { getRepositories } from "../../lib/githubRepositories";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await getRepositories();
    return res.json(data);
  } catch (e) {
    return res.status(500).send(e);
  }
};

export default handler;
