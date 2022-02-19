import {
  ExternalLinkIcon,
  HamburgerIcon,
  InfoOutlineIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  IconButton,
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
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

export default function Header() {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.800");
  const themeIcon = useColorModeValue(<MoonIcon />, <SunIcon />);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const linkColor = useColorModeValue("theme.royalBlue", "theme.mint");
  const textColor = useColorModeValue("white", "navy.lighter");

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
        <Button
          variant="ghost"
          fontSize="xl"
          onClick={scrollToTop}
          _hover={{}}
          _focus={{}}
        >
          Lewis Casewell.
        </Button>
        <Box>
          <IconButton
            mr={1}
            onClick={toggleColorMode}
            variant="ghost"
            aria-label="Toggle theme"
            icon={themeIcon}
            _hover={{}}
            _focus={{}}
          />
          <Menu>
            <MenuButton
              icon={<HamburgerIcon />}
              as={IconButton}
              variant="ghost"
              aria-label="Menu"
              _hover={{}}
              _focus={{}}
            />
            <MenuList>
              <MenuItem
                icon={<ExternalLinkIcon />}
                onClick={() => window.open("CV.pdf", "_blank")}
              >
                Open CV
              </MenuItem>
              <MenuItem icon={<InfoOutlineIcon />} onClick={onOpen}>
                More about me
              </MenuItem>
            </MenuList>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
              <ModalContent>
                <ModalHeader>More about me</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <p>{`I have two primary passions that are very important to me
                  which are fitness and technology.\n

                  I have been training with weights, doing calisthenics and
                  other forms of fitness training for more than 7 years now.
                  I love pushing myself to my body's limits and treating it 
                  scientifically.\n

                  I love technology like anyone else... because it makes it
                  my life easier. It can be used to make any task in any industry
                  easier. For that reason, it seems extremely ordinary to enjoy 
                  technology. However, I cannot denie that i enjoy spending my time
                  reflecting on how technology can make my day-to-day life easier.\n

                  Recently web 3 technology has caught my attention from it's ability
                  to create ownership on the internet. Seeing how blockchain technology
                  can help with identity and credential verification to simplify user
                  flows in application is a future I would like to personally see
                  come to fruition.
                  `}</p>
                </ModalBody>

                <ModalFooter>
                  <Button
                    bg={linkColor}
                    color={textColor}
                    mr={3}
                    _hover={{}}
                    onClick={() =>
                      window.open(
                        "mailto:lewiscasewell@hotmail.co.uk?Subject=Hello"
                      )
                    }
                  >
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
