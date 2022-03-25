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

export const Header: React.FC = () => {
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
                  <Text>{`My two passions are fitness and technology.`}</Text>
                  <Text>
                    {`I have been weight-training and doing calisthenics for more than 7 years now.
                  I love pushing myself to my body's limits and seeing progress in different avenues. 
                  My goal is to be a well-rounded athlete, including mobility, flexibility and strength.`}
                  </Text>
                  <Text>
                    {`I love technology because it can make any task more efficient.
                    I fell in love with coding because you don't need large sums of capital to start building real, usable products and the marginal cost of production is zero (i.e. one more download doesn't cost more to produce).
                  I like to see how new technological trends can help solve new problems that arise.`}
                  </Text>
                  <Text>
                    {`Recently web 3 technology has caught my attention from it's ability
                  to allow digital ownership on the internet. Looking past the scams, pumps and greed; this new era of the web is exciting and is something I think every web developer should at least keep their eye on.
                  An example being how blockchain technology can help with identity and credential verification to simplify user
                  flows in all applications is a future I would like to personally see
                  come to fruition.
                  `}
                  </Text>
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
};
