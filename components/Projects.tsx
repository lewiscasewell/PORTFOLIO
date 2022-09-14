import { Text, SimpleGrid, Spinner, Box, Center } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import useSWR from "swr";

import { Project } from "../interfaces/index";
import { Card } from "./Card";

const fetcher = async (url: string) => {
  const { data } = await axios.get<Project[]>(url);
  return data;
};

const ErrorMessage = () => {
  return <Text textAlign="center">An error occurred. Please refresh.</Text>;
};

const Projects: React.FC = () => {
  const { data, error } = useSWR("/api/repositories", fetcher);
  return (
    <>
      {error && !data && <ErrorMessage />}
      {!error && !data && (
        <Center w="100%" h="500px">
          <Spinner size="xl" />
        </Center>
      )}
      {!error && data && (
        <SimpleGrid columns={[1, null, 2]} spacing={5}>
          {data && data.map((item, idx) => <Card project={item} key={idx} />)}
        </SimpleGrid>
      )}
    </>
  );
};

export default Projects;
