import { useState } from "react";
import { Container, Box, Flex, IconButton, Text, Switch, useColorMode, Menu, MenuButton, MenuList, MenuItem, Image, Divider, Button, Link } from "@chakra-ui/react";
import { FaHome, FaUser, FaCog, FaBell, FaQrcode, FaExchangeAlt, FaBars, FaWallet } from "react-icons/fa";

const darkPurple = "#4B0082"; // Dark Purple
const mediumPurple = "#6A0DAD"; // Medium Purple
const lightPurple = "#9370DB"; // Light Purple
const darkBlue = "#1a365d"; // Dark Blue
const mediumBlue = "#153e75"; // Medium Blue
const lightBlue = "#2a69ac"; // Light Blue
const white = "#FFFFFF"; // White
const headerFooterColor = darkBlue; // Header and Footer Color
const rowColor = white; // Row Color
const dirtyWhite = "#E8E8E8"; // Dirty White Color

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDark, setIsDark] = useState(colorMode === "dark");

  const handleToggleTheme = () => {
    toggleColorMode();
    setIsDark(!isDark);
  };

  return (
    <Container 
      centerContent 
      maxW={{ base: "100%", md: "container.sm" }} 
      height="100vh" 
      display="flex" 
      flexDirection="column" 
      justifyContent="flex-start" 
      alignItems="center" 
      bg={darkPurple} 
      color={isDark ? "gray.100" : "black"} 
      borderRadius="2xl" 
      mx={{ base: "0", md: "auto" }} 
      position="relative"
      overflow="hidden"
      p={0}
      border={isDark ? "8px solid black" : "8px solid black"} 
      boxShadow={isDark ? "0 0 10px gray.700" : "0 0 10px white"} 
    >
      <Box 
        width="100%" 
        bg={headerFooterColor} 
        p={4} 
        borderRadius="0 0 2xl 2xl"
        color="white"
        position="sticky"
        top="0"
        zIndex="1000"
        boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
      >
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <IconButton
            icon={<FaBars />}
            aria-label="Menu"
            variant="ghost"
            color="white"
            fontSize="24px"
          />
          <Box textAlign="center">
            <Box mb={2}>
              <Image src="https://marcroland84.wordpress.com/wp-content/uploads/2024/06/copy-of-innovate-hub-2-1.png?w=1024" alt="Innovate Hub" height="50px" />
            </Box>
            <Text fontSize="lg" fontWeight="bold" color="white">E-wallet</Text>
          </Box>
          <Flex>
            <IconButton
              icon={<FaBell />}
              aria-label="Notifications"
              variant="ghost"
              color="white"
              fontSize="24px"
            />
          </Flex>
        </Flex>
        <Divider borderColor="whiteAlpha.600" />
      </Box>

      {/* Body Container (c1) */}
      <Box 
        width="100%" 
        height="100%"
        flex="1" 
        p={4}
        mx="auto"
        mt="auto"
        mb="20px"
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
        position="relative"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Image src="https://marcroland84.files.wordpress.com/2024/06/copy-of-innovate-hub-2-1.png?w=1024" alt="Centered Image" objectFit="contain" maxH="100%" maxW="100%" />
      </Box>

      {/* Login Button and Text Container */}
      <Box 
        mt={4} 
        textAlign="center" 
        width="100%" 
        mb="20px"
        bg={darkPurple}
        p={4}
      >
        <Button 
          colorScheme="purple" 
          mb={2} 
          width="80%" 
          _hover={{ bg: "purple.600" }}
          fontWeight="bold"
          color="white"
          paddingTop="12px"
          paddingBottom="12px"
        >
          Login
        </Button>
        <Text fontWeight="bold" color="white">
          You have no account yet?{" "}
          <Link color="blue.500" href="#">Create an account</Link>
        </Text>
      </Box>

      <Box 
        as="footer"
        width="100%"
        bg={headerFooterColor}  
        height="60px"
        position="sticky"
        bottom="0"
        p={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        zIndex="1000"
      >
        <Box display="flex" justifyContent="space-between" width="100%">
          <Box flex="1" display="flex" justifyContent="center" alignItems="center">
            <FaWallet size="24px" color="white" />
          </Box>
          <Box flex="1" display="flex" justifyContent="center" alignItems="center">
            <FaExchangeAlt size="24px" color="white" />
          </Box>

          <Box flex="1" textAlign="center" position="relative">
            <Box 
              width="50px" 
              height="50px" 
              bg="white" 
              borderRadius="50%" 
              display="flex" 
              justifyContent="center" 
              alignItems="center" 
              position="absolute" 
              top="-25px" 
              left="50%" 
              transform="translateX(-50%)"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
            >
              <FaQrcode size="32px" color="blue.500" />
            </Box>
          </Box>

          <Box flex="1" display="flex" justifyContent="center" alignItems="center">
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<FaCog />}
                aria-label="Settings"
                variant="ghost"
                color="white"
                fontSize="24px"
              />
              <MenuList bg="gray.700" color="white">
                <MenuItem>
                  <Flex alignItems="center">
                    <Text mr={2}>Dark Mode</Text>
                    <Switch 
                      isChecked={isDark} 
                      onChange={handleToggleTheme} 
                      colorScheme="purple"
                      bg={isDark ? "gray.700" : "gray.300"} 
                      borderColor={isDark ? "gray.600" : "gray.400"} 
                      _checked={{
                        bg: "purple.500",
                        borderColor: "purple.500",
                      }}
                    />
                  </Flex>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box flex="1" display="flex" justifyContent="center" alignItems="center">
            <FaUser size="24px" color="white" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;