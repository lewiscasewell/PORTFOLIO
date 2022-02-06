import { HamburgerIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuButton,
  MenuIcon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FilterIcon, LightBulbIcon } from "../styles/icons";

export default function Header() {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.800");
  const themeIcon = useColorModeValue(<MoonIcon />, <LightBulbIcon />);

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
          </Menu>
        </Box>
      </Container>
    </Box>
  );
}
