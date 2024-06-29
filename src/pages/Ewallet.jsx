import { Box, Text, Flex, Button, IconButton, useColorMode, useDisclosure } from "@chakra-ui/react";
import { FaBars, FaBell, FaHome, FaUser, FaCog, FaQrcode, FaExchangeAlt, FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";

const Ewallet = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isDark = colorMode === "dark";

  return (
    <Box
      centerContent
      maxW={{ base: "100%", md: "container.sm" }}
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      bg={isDark ? "gray.800" : "white"}
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
        bg={isDark ? "gray.900" : "gray.100"}
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
            onClick={onOpen}
          />
          <Box textAlign="center">
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
      </Box>

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
        <Text fontSize="2xl" fontWeight="bold" mb={4}>Welcome to your E-wallet</Text>
        <Text fontSize="lg" mb={6}>Manage your transactions and balance here.</Text>
        <Button colorScheme="purple" mb={2} width="80%" _hover={{ bg: "purple.600" }} fontWeight="bold" color="white" paddingTop="12px" paddingBottom="12px">
          View Transactions
        </Button>
        <Button colorScheme="purple" mb={2} width="80%" _hover={{ bg: "purple.600" }} fontWeight="bold" color="white" paddingTop="12px" paddingBottom="12px">
          Add Funds
        </Button>
      </Box>

      <Box
        as="footer"
        width="100%"
        bg={isDark ? "gray.900" : "gray.100"}
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
            <Link to="/ewallet">
              <FaWallet size="24px" color="white" />
            </Link>
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
            <FaUser size="24px" color="white" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Ewallet;