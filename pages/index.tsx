import React from "react";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
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

  const headerColor = useColorModeValue("navy.light", "white");
  const linkColor = useColorModeValue("#0547ff", "purple.custom");

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
        <Heading
          as="h1"
          fontSize={40}
          color={headerColor}
        >{`I'm Lewis, I like to build.`}</Heading>
        <Text fontSize="lg" fontWeight="medium" mt={5}>
          {`I'm a software developer based in Berkshire, UK specialising in building websites and
          applications.`}
        </Text>
        <Text fontSize="lg" fontWeight="medium" mt={5}>
          {`My current toolset includes React, Next, Node and other various
          frameworks, libraries and technologies related to them.`}
        </Text>
        <Text fontSize="lg" fontWeight="medium" mt={5}>
          {` Have a project you'd like to discuss?`} <br />
          {`Let's chat`} {` `}
          <Link
            color={linkColor}
            href="mailto:lewiscasewell@hotmail.co.uk?Subject=Hello"
            target="_top"
          >
            lewiscasewell@hotmail.co.uk
          </Link>
        </Text>
        <Heading as="h2" size="lg" color={headerColor} mt={5}>
          {`Some Things I've Built`}
        </Heading>

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
