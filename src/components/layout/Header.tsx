import { useState } from "react";
import {Flex,Heading,IconButton,Input,InputGroup,InputRightElement, Link as ChakraLink, Container,Drawer,
  DrawerBody,DrawerOverlay, DrawerContent,VStack,Avatar} from "@chakra-ui/react";
import { FaBars, FaTimes, FaBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container
      height={"60px"}
      px={6}
      top={0}
      position="fixed"
      zIndex={10}
      bgColor={"gray.900"}
      color={"white"}
      maxWidth={"100%"}
      boxShadow="md"
    >
      <Flex alignItems="center" justifyContent="space-between" py={2}>
        {/* Mobile Menu Button */}
        <IconButton
          aria-label="menu"
          colorScheme="teal"
          variant="ghost"
          icon={<FaBars />}
          rounded="full"
          display={{ base: "flex", md: "none" }}
          onClick={() => setIsOpen(true)}
        />

        {/* Logo */}
        <Heading fontWeight="black" size={"lg"}>
          CL-WEB
        </Heading>

        {/* Desktop Navigation */}
        <Flex gap={10} display={{ base: "none", md: "flex" }} fontSize="lg">
          <ChakraLink as={Link} to="/" _hover={{ color: "teal.400", borderBottom: "2px solid teal" }}>
            Home
          </ChakraLink>
          <ChakraLink as={Link} to="/courses" _hover={{ color: "teal.400", borderBottom: "2px solid teal" }}>
            Courses
          </ChakraLink>
          <ChakraLink as={Link} to="/about" _hover={{ color: "teal.400", borderBottom: "2px solid teal" }}>
            About
          </ChakraLink>
        </Flex>

        {/* Search and Notifications */}
        <Flex alignItems="center" gap={3}>
          <InputGroup size="sm" display={{ base: "none", md: "flex" }}>
            <Input variant="filled" placeholder="Search..." bg="gray.700" color="white" />
            <InputRightElement>
              <FaSearch color="white" />
            </InputRightElement>
          </InputGroup>

          <IconButton
            aria-label="search"
            icon={<FaBell />}
            variant="ghost"
            colorScheme="teal"
            rounded="full"
            size="sm"
            onClick={() => alert("You have no notifications!")}
          />
          <Avatar size="sm" name="John Doe" colorScheme="teal" />  
        </Flex>
      </Flex>

      {/* Sidebar Drawer for Mobile Navigation */}
      <Drawer isOpen={isOpen} placement="left" onClose={() => setIsOpen(false)}>
        <DrawerOverlay />
        <DrawerContent bg="gray.900" color="white">
          <IconButton
            aria-label="Close menu"
            icon={<FaTimes />}
            position="absolute"
            top="4"
            right="4"
            size="lg"
            variant="ghost"
            color="white"
            onClick={() => setIsOpen(false)}
          />

          <DrawerBody>
            <VStack spacing={6} mt={10} fontSize="xl">
              <ChakraLink as={Link} to="/" onClick={() => setIsOpen(false)}>
                Home
              </ChakraLink>
              <ChakraLink as={Link} to="/courses" onClick={() => setIsOpen(false)}>
                Courses
              </ChakraLink>
              <ChakraLink as={Link} to="/about" onClick={() => setIsOpen(false)}>
                About
              </ChakraLink>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Container>
  );
}
