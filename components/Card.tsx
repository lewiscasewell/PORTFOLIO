import React, { useCallback } from "react";

import {
  Box,
  IconButton,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoLogoGithub, IoMdOpen } from "react-icons/io";
import { Project } from "../interfaces/index";

interface Props {
  project: Project;
}

export const Card: React.FC<Props> = ({ project }) => {
  const openLinkInNewTab = useCallback((url: string) => {
    window.open(url, "_blank");
  }, []);
  const linkColor = useColorModeValue("theme.royalBlue", "theme.mint");
  const tagTextColor = useColorModeValue("white", "navy.lighter");
  return (
    <>
      <Box
        bg="navy.light"
        borderRadius="md"
        px={5}
        pt={5}
        pb={8}
        position="relative"
      >
        <Box justifyContent="space-between" display="flex">
          <Box>
            <IconButton
              variant="link"
              _hover={{
                color: linkColor,
              }}
              _focus={{
                borderColor: "",
              }}
              aria-label="Open github link"
              icon={<IoLogoGithub size={30} />}
              onClick={() => openLinkInNewTab(project.url)}
            />
            <IconButton
              variant="link"
              _hover={{
                color: linkColor,
              }}
              _focus={{
                borderColor: "transparent",
              }}
              aria-label="Open website"
              icon={<IoMdOpen size={30} />}
              onClick={() =>
                openLinkInNewTab(
                  project.homepageUrl ? project.homepageUrl : project.url
                )
              }
            />
          </Box>
          <Text>{project.primaryLanguage.name}</Text>
        </Box>
        <Text color="slate.lighter" fontSize="xl" fontWeight="bold" mt={4}>
          {project.name}
        </Text>
        <Text fontWeight="medium" mt={3} noOfLines={3}>
          {project.description}
        </Text>
        <Box>
          {project.repositoryTopics.edges.map((topic, idx) => (
            <Tag
              key={idx}
              mr={2}
              mt={3}
              bg={linkColor}
              color={tagTextColor}
              borderRadius="full"
            >
              {topic.node.topic.name}
            </Tag>
          ))}
        </Box>
      </Box>
    </>
  );
};
