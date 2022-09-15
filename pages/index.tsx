import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Center,
  Button,
  IconButton,
  Tooltip,
  Image,
} from "@chakra-ui/react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  EmailIcon,
  ExternalLinkIcon,
  QuestionOutlineIcon,
} from "@chakra-ui/icons";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import Projects from "../components/Projects";

const CODING_PHILOSOPHY_LIST = [
  "building once, deploying everywhere - so features can be built faster",
  "taking a mobile first approach when building applications",
  "using fast user feedback loops to build products users love",
  "using the most simple methods and technologies for the job",
];

const Home: React.FC = () => {
  const [codingPhilosophyIndex, setCodingPhilosophyIndex] = useState(0);
  const [philosophyOpacity, setPhilosophyOpacity] = useState(0);
  const projectsRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    setPhilosophyOpacity(1);
    if (codingPhilosophyIndex <= CODING_PHILOSOPHY_LIST.length - 1) {
      const timer = setTimeout(() => {
        setCodingPhilosophyIndex(codingPhilosophyIndex + 1);
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      setCodingPhilosophyIndex(0);
    }
  }, [codingPhilosophyIndex]);

  return (
    <Box display="flex" flexDir="column">
      <Box position="absolute" w="100%" h="100%" zIndex={-1}>
        <Box
          w="100%"
          h="100%"
          bgGradient="linear(to-b, gray.800 25%, gray.800 100%)"
          opacity={0.5}
          position="absolute"
          zIndex={1}
        />
        <Image
          transform={"translate3d(0, 0, 0) translateZ(0)"}
          alt="northen-lights"
          src="/northern-lights.jpg"
          w="100%"
          h="100%"
          objectFit="fill"
          filter="blur(100px)"
          position="absolute"
          zIndex={0}
        />
      </Box>
      <Flex
        h="100vh"
        p={4}
        margin="0 auto"
        direction="column"
        maxW={992}
        gap={5}
      >
        <Box mt={["20vh"]} w="fit-content" ref={headingRef} minW="340px">
          <Heading
            bgGradient="linear(to-br, #42FFEF, #AEFF9D)"
            bgClip="text"
            as="h1"
            fontSize={[46, 60, 88]}
          >
            {`Lewis Casewell`}
          </Heading>
        </Box>
        <Flex gap={2} alignItems="center">
          <Tooltip label="Email">
            <IconButton
              aria-label="mail"
              rounded="full"
              icon={<EmailIcon />}
              onClick={() => {
                window.location.assign(
                  "mailto:lewiscasewell@hotmail.co.uk?Subject=Hello"
                );
              }}
            />
          </Tooltip>
          <Link
            href="https://www.linkedin.com/in/lewis-casewell-bb1769182/"
            target="_blank"
          >
            <Tooltip label="LinkedIn">
              <IconButton
                aria-label="linkedIn"
                rounded="full"
                icon={<IoLogoLinkedin />}
              />
            </Tooltip>
          </Link>
          <Link href="https://github.com/lewiscasewell" target="_blank">
            <Tooltip label="GitHub">
              <IconButton
                aria-label="github"
                rounded="full"
                icon={<IoLogoGithub />}
              />
            </Tooltip>
          </Link>
          <Tooltip label="Open CV">
            <IconButton
              aria-label="CV"
              rounded="full"
              icon={<ExternalLinkIcon />}
              onClick={() => window.open("CV.pdf", "_blank")}
            />
          </Tooltip>
          <Link href="https://polls.lewiscasewell.com" target="_blank">
            <Tooltip label="Start a poll">
              <IconButton
                aria-label="poll"
                rounded="full"
                icon={<QuestionOutlineIcon />}
              />
            </Tooltip>
          </Link>
        </Flex>
        <Box maxW={headingRef.current?.offsetWidth} h={200}>
          <Text fontSize={[16, 18, 20]} color="gray.400">
            I am a front-end developer who believes in...
          </Text>
          <Text
            fontSize={[22, 26, 28]}
            fontStyle="italic"
            color="gray.300"
            opacity={philosophyOpacity}
            transition="opacity 0.2s ease-in"
          >
            {CODING_PHILOSOPHY_LIST[codingPhilosophyIndex]}
          </Text>
        </Box>
        <Center
          flexDirection="column"
          gap={2}
          onClick={() =>
            window.scrollTo({
              top: projectsRef.current.offsetTop,
              behavior: "smooth",
            })
          }
        >
          <Text
            fontSize={20}
            as="h2"
            fontWeight="bold"
            bgGradient="linear(to-br, #63FFD5, #D3FE84)"
            bgClip="text"
          >
            Go to projects
          </Text>
          <IconButton
            rounded="full"
            variant="ghost"
            aria-label="go-to-projects"
            w="fit-content"
            icon={<ArrowDownIcon />}
            onClick={() =>
              window.scrollTo({
                top: projectsRef.current.offsetTop,
                behavior: "smooth",
              })
            }
          />
        </Center>
      </Flex>
      <Flex
        mb="25vh"
        p={4}
        marginX="auto"
        direction="column"
        maxW={992}
        gap={5}
        ref={projectsRef}
      >
        <Box textAlign="center" mt="35px">
          <Heading as="h1" fontSize={40} color="white">
            {`I like to build `}
            <Tooltip label="This is me">👨‍💻</Tooltip>
          </Heading>
          <Text>Check out some of my projects...</Text>
        </Box>
        <Box mt={5}>
          <Projects />
        </Box>

        <Center mt={5} mb={5}>
          <Button
            size="lg"
            borderColor="#89FFB9"
            color="#89FFB9"
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
        <Center
          marginTop={10}
          flexDirection="column"
          gap={2}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <IconButton
            rounded="full"
            variant="ghost"
            aria-label="go-to-projects"
            w="fit-content"
            icon={<ArrowUpIcon />}
            onClick={() =>
              window.scrollTo({
                top: projectsRef.current.offsetTop,
                behavior: "smooth",
              })
            }
          />
          <Text
            fontSize={20}
            as="h2"
            fontWeight="bold"
            bgGradient="linear(to-br, #63FFD5, #D3FE84)"
            bgClip="text"
          >
            Back to top
          </Text>
        </Center>
      </Flex>
    </Box>
  );
};

export default Home;
