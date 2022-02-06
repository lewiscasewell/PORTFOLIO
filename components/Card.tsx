import React, { useCallback } from "react";

import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { IoLogoGithub, IoMdOpen } from "react-icons/io";
import { Project } from "../interfaces/index";

interface Props {
  project: Project;
}

export const Card: React.FC<Props> = ({ project }) => {
  const openLinkInNewTab = useCallback((url: string) => {
    window.open(url, "_blank");
  }, []);

  console.log(project);

  return (
    <>
      <Box
        bg="navy.light"
        borderRadius="md"
        px={5}
        pt={5}
        pb="60px"
        position="relative"
      >
        <Box justifyContent="space-between">
          <IconButton
            variant="link"
            _hover={{
              color: "green.custom",
            }}
            _focus={{
              borderColor: "transparent",
            }}
            aria-label="Open github link"
            icon={<IoLogoGithub size={30} />}
            onClick={() => openLinkInNewTab(project.url)}
          />
          <IconButton
            variant="link"
            _hover={{
              color: "green.custom",
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
        <Text color="slate.lighter" fontSize="xl" fontWeight="bold" mt={4}>
          {project.name}
        </Text>
        <Text fontWeight="medium" mt={3}>
          {project.description}
        </Text>
      </Box>
    </>
  );
};
