import React from "react";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue,
  Center,
  Button,
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
  const linkColor = useColorModeValue("theme.royalBlue", "theme.mint");

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
          {`I'm a junior software developer based in Berkshire, 
          UK. I combine my 2 year product background with web development
           to iteratively build websites and applications with fast user 
           feedback loops. I also specialise in using a mobile first approach
            when creating applications in order to provide a consistent and
             quality user experience.
          `}
        </Text>
        <Text fontSize="lg" fontWeight="medium" mt={5}>
          {`My current tech stack includes React, Next, Node and several other
          frameworks and libraries similar to them.`}
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
          {`What have I built?`}
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

        <Center mt={5}>
          <Button
            size="lg"
            borderColor={linkColor}
            color={linkColor}
            variant="outline"
            _hover={{}}
            _focus={{}}
            onClick={() =>
              window.open("https://github.com/lewiscasewell", "_blank")
            }
          >
            Visit my GitHub
          </Button>
        </Center>
      </Flex>
    </Box>
  );
};

export default Home;
