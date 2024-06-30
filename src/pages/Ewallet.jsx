import { Box, Flex, IconButton, Text, Button, Link, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Divider, useColorMode, Switch, Menu, MenuButton, MenuList, MenuItem, Image, Grid, GridItem } from "@chakra-ui/react";
import { FaBars, FaBell, FaHome, FaUser, FaCog, FaQrcode, FaExchangeAlt, FaWallet } from "react-icons/fa";

const Ewallet = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isDark = colorMode === "dark";

  const handleToggleTheme = () => {
    toggleColorMode();
  };

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
        <Divider borderColor="whiteAlpha.600" />
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Flex direction="column">
              <Button as="a" href="#" leftIcon={<FaHome />} variant="ghost" justifyContent="flex-start" width="100%">Home</Button>
              <Button as="a" href="#" leftIcon={<FaUser />} variant="ghost" justifyContent="flex-start" width="100%">Profile</Button>
              <Button as="a" href="#" leftIcon={<FaCog />} variant="ghost" justifyContent="flex-start" width="100%">Settings</Button>
              <Button as="a" href="#" leftIcon={<FaBell />} variant="ghost" justifyContent="flex-start" width="100%">Notifications</Button>
              <Button as="a" href="#" leftIcon={<FaQrcode />} variant="ghost" justifyContent="flex-start" width="100%">QR Code</Button>
              <Button as="a" href="#" leftIcon={<FaExchangeAlt />} variant="ghost" justifyContent="flex-start" width="100%">Transactions</Button>
              <Button as="a" href="/ewallet" leftIcon={<FaWallet />} variant="ghost" justifyContent="flex-start" width="100%">Wallet</Button>
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>Close</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

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
        <Box textAlign="center" mb={4}>
          <Text fontSize="2xl" fontWeight="bold">Hello!</Text>
          <Button colorScheme="blue" size="sm" ml={2}>HELP</Button>
        </Box>
        <Box
          width="100%"
          bg="blue.500"
          p={4}
          borderRadius="md"
          color="white"
          textAlign="center"
          mb={4}
        >
          <Text fontSize="xl" fontWeight="bold">₱ 37.98</Text>
          <Text fontSize="md">AED 2.34</Text>
          <Button colorScheme="blue" size="sm" mt={2}>+ Cash In</Button>
        </Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={4}>
          <GridItem>
            <Button variant="ghost" leftIcon={<FaExchangeAlt />} justifyContent="flex-start" width="100%">Send</Button>
          </GridItem>
          <GridItem>
            <Button variant="ghost" leftIcon={<FaQrcode />} justifyContent="flex-start" width="100%">Load</Button>
          </GridItem>
          <GridItem>
            <Button variant="ghost" leftIcon={<FaHome />} justifyContent="flex-start" width="100%">Transfer</Button>
          </GridItem>
          <GridItem>
            <Button variant="ghost" leftIcon={<FaBell />} justifyContent="flex-start" width="100%">Bills</Button>
          </GridItem>
          <GridItem>
            <Button variant="ghost" leftIcon={<FaUser />} justifyContent="flex-start" width="100%">Borrow</Button>
          </GridItem>
          <GridItem>
            <Button variant="ghost" leftIcon={<FaCog />} justifyContent="flex-start" width="100%">GSave</Button>
          </GridItem>
          <GridItem>
            <Button variant="ghost" leftIcon={<FaWallet />} justifyContent="flex-start" width="100%">GInsure</Button>
          </GridItem>
          <GridItem>
            <Button variant="ghost" leftIcon={<FaExchangeAlt />} justifyContent="flex-start" width="100%">GInvest</Button>
          </GridItem>
          <GridItem>
            <Button variant="ghost" leftIcon={<FaQrcode />} justifyContent="flex-start" width="100%">GLife</Button>
          </GridItem>
          <GridItem>
            <Button variant="ghost" leftIcon={<FaHome />} justifyContent="flex-start" width="100%">A+ Rewards</Button>
          </GridItem>
          <GridItem>
            <Button variant="ghost" leftIcon={<FaBell />} justifyContent="flex-start" width="100%">GForest</Button>
          </GridItem>
          <GridItem>
            <Button variant="ghost" leftIcon={<FaUser />} justifyContent="flex-start" width="100%">Cards</Button>
          </GridItem>
        </Grid>
        <Button colorScheme="blue" size="sm" mb={4}>View All Services</Button>
        <Box
          width="100%"
          bg="blue.500"
          p={4}
          borderRadius="md"
          color="white"
          textAlign="center"
        >
          <Text fontSize="lg" fontWeight="bold">GCash Exclusives</Text>
          <Text fontSize="md">Stream all you want with Giga Video 50</Text>
        </Box>
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
    </Box>
  );
};

export default Ewallet;