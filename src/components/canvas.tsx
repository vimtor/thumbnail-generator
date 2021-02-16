import React from "react";
import ImageDropzone from "./image-dropzone";
import {Text, Flex, Center, Image, Box} from '@chakra-ui/react'
import {Rnd, RndDragCallback} from "react-rnd";

type CanvasProps = {
  image: string;
  onDrop: (files: File[]) => void;
  onPositionChange: RndDragCallback;
}

const Canvas = ({image, onDrop, onPositionChange}: CanvasProps) => {
  return (
    <Center bg="gray.100" h="100%" w="100%">
      <Box w={1280} h={720}>
        {image ? (
          <Box w={1280} h={720} overflow="hidden">
            <Image w="100%" src={image} alt="thumbnail layout"/>
            <Rnd default={{height: 200, width: 200, x: 0, y: 0}} onDragStop={onPositionChange} bounds="parent">
              <Flex align="center" justify="center" w="100%" h="100%" border="2pt dashed" borderColor="white">
                <Text color="white" fontSize="6xl" fontWeight="bold">
                  01
                </Text>
              </Flex>
            </Rnd>
          </Box>
        ): (
          <ImageDropzone onDrop={onDrop} />
        )}
      </Box>
    </Center>
  )
}

export default Canvas
