import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

type GeneratorProps = {
  image: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
};

const Generator = React.forwardRef<HTMLDivElement, GeneratorProps>(
  ({ image, position, size }, ref) => {
    return (
      <Box pos="fixed" top="100vh">
        <div ref={ref}>
          {[1, 2, 3, 4].map((number) => (
            <Box key={number} w={1280} h={720} pos="relative" overflow="hidden">
              <Flex
                left={position.x}
                top={position.y}
                align="center"
                bg="red.500"
                justify="center"
                pos="absolute"
                w={size.width}
                h={size.height}
              >
                <Text color="white" fontSize="6xl" fontWeight="bold">
                  {number}
                </Text>
              </Flex>
              <Image w="100%" src={image} alt="thumbnail layout" />
            </Box>
          ))}
        </div>
      </Box>
    );
  }
);

export default Generator;
