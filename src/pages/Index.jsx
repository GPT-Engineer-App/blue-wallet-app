import { Container, VStack, Text, Box, Button } from "@chakra-ui/react";
import { FaWallet } from "react-icons/fa";

const Index = () => {
  return (
    <Container 
      centerContent 
      maxW="container.md" 
      height="100vh" 
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center" 
      bgGradient="linear(to-r, purple.900 70%, blue.500 30%)"
      color="white" 
      borderRadius="lg" 
      mx={{ base: "10px", md: "30px" }} 
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "33vh",
        bgGradient: "linear(to-r, purple.900 70%, blue.500 30%)",
        clipPath: "polygon(0 83.33%, 100% 66.67%, 100% 100%, 0 100%)"
      }}
    >
      <VStack spacing={6} width="100%" maxW="400px">
        <Box as={FaWallet} size="64px" />
        <Text fontSize="4xl" fontWeight="bold">My Wallet</Text>
        <Text fontSize="lg" textAlign="center">Manage your finances effortlessly</Text>
        <Button colorScheme="teal" size="lg" width="100%">Get Started</Button>
      </VStack>
      <Box position="absolute" bottom="0" width="90%" maxW="400px" height="33vh" bg="white" borderRadius="lg" m={{ base: "10px", md: "30px" }} boxShadow="xl" />
    </Container>
  );
};

export default Index;