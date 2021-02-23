import React from "react";
import ImageDropzone from "./image-dropzone";
import { Text, Flex, Center, Image, Box } from "@chakra-ui/react";
import { Rnd, RndDragCallback, RndResizeCallback } from "react-rnd";
import Position from "../types/position";
import Size from "../types/size";
import FontProperties from "../types/fonts";

type CanvasProps = {
  image: string;
  position: Position;
  size: Size;
  fontSettings: FontProperties;
  onDrop: (files: File[]) => void;
  onDrag: RndDragCallback;
  onResize: RndResizeCallback;
};

const Canvas = ({
  image,
  fontSettings,
  position,
  size,
  onDrop,
  onDrag,
  onResize,
}: CanvasProps) => {
  return (
    <Center bg="gray.100" h="100%" w="100%">
      <Box w={1280} h={720}>
        {image ? (
          <>
            <Image w="100%" src={image} alt="thumbnail layout" />
            <Rnd
              position={position}
              size={size}
              onDragStop={onDrag}
              onResizeStop={onResize}
              bounds="parent"
            >
              <Flex
                align="center"
                justify="center"
                w="100%"
                h="100%"
                border="2pt dashed"
                borderColor="white"
              >
                <Text
                  color={`#${fontSettings.color}`}
                  fontSize={fontSettings.size}
                  fontFamily={fontSettings.family}
                  fontStyle={fontSettings.style}
                  fontWeight={fontSettings.weight}
                >
                  01
                </Text>
              </Flex>
            </Rnd>
          </>
        ) : (
          <ImageDropzone onDrop={onDrop} />
        )}
      </Box>
    </Center>
  );
};

export default Canvas;
