import React from 'react'
import {Text, Box, Flex, Container, Heading} from '@chakra-ui/react'
import {IoLogoGithub} from "react-icons/all";

const Navbar = () => {
  return (
    <Box bg="gray.700" color="white" justify="space-between" px={6} py={4}>
      <Container maxW={1600}>
        <Flex justify="space-between">
            <Heading size="md">Thumbnail Generator</Heading>
            <Flex justify="center" align="center">
              <Text mr={2}>
                GitHub
              </Text>
              <IoLogoGithub />
            </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar;
