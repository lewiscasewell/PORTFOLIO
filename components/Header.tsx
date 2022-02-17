import {
  ExternalLinkIcon,
  HamburgerIcon,
  InfoOutlineIcon,
  MoonIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useCallback } from "react";
import { LightBulbIcon } from "../styles/icons";

export default function Header() {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.800");
  const themeIcon = useColorModeValue(<MoonIcon />, <LightBulbIcon />);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box position="fixed" w="100%" zIndex={1} bg={bgColor}>
      <Container
        maxW="3xl"
        py={3}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button variant="ghost" fontSize="xl" onClick={scrollToTop}>
          Lewis Casewell.
        </Button>
        <Box>
          <IconButton
            mr={1}
            onClick={toggleColorMode}
            variant="ghost"
            aria-label="Toggle theme"
            icon={themeIcon}
          />
          <Menu>
            <MenuButton
              icon={<HamburgerIcon />}
              as={IconButton}
              variant="ghost"
            />
            <MenuList>
              <MenuItem
                icon={<ExternalLinkIcon />}
                onClick={() => window.open("https://google.com")}
              >
                Open CV
              </MenuItem>
              <MenuItem icon={<InfoOutlineIcon />} onClick={onOpen}>
                More about me
              </MenuItem>
            </MenuList>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>More about me</ModalHeader>
                <ModalCloseButton />
                <ModalBody>Hey there you seem great</ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={() => {}}>
                    Contact
                  </Button>
                  <Button variant="ghost" onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Menu>
        </Box>
      </Container>
    </Box>
  );
}
