import React from 'react'
import {Link, Text, Box, Flex, Container, Heading} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Box bg="gray.700" color="white" justify="space-between" py={6}>
      <Container maxW={1600}>
        <Flex justify="space-between">
            <Heading size="md">Thumbnail Generator</Heading>
            <Link>
              <Flex justify="center" align="center">
                <Text fontSize="xl">
                  GitHub
                </Text>
              </Flex>
            </Link>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar;
