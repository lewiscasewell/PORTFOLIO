import React from "react";
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import { Card } from "../components/Card";
import CardSkeleton from "../components/CardSkeleton";

import axios from "axios";
import useSWR from "swr";

import { Project } from "../interfaces/index";

const fetcher = async (url: string) => {
  const { data } = await axios.get<Project[]>(url);
  return data;
};

const Home: React.FC = () => {
  const { data, error } = useSWR("/api/repositories", fetcher);
  return (
    <Box h="100vh" display="flex" flexDir="column">
      <Header />
      <Flex
        margin="0 auto"
        direction="column"
        maxW={992}
        px={[5, 8, 8]}
        py={5}
        mt="95px"
      >
        <Heading as="h1" fontSize={40}>{`I'm Lewis, I like to code.`}</Heading>
        {error ? (
          <Text mt={5}>An error occurred. Please refresh.</Text>
        ) : (
          <SimpleGrid columns={[1, null, 2]} spacing={5} mt={5}>
            {data
              ? data.map((item, idx) => <Card project={item} key={idx} />)
              : [...Array(6).keys()].map((item) => <CardSkeleton key={item} />)}
          </SimpleGrid>
        )}
      </Flex>
    </Box>
  );
};

export default Home;
