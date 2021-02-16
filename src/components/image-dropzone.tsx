import React from "react";
import { Text, Center } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";

type ImageDropzoneProps = {
  onDrop: (files: File[]) => void;
};

const ImageDropzone = ({ onDrop }: ImageDropzoneProps) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Center
      border="2px dashed"
      borderColor="currentColor"
      color="gray.400"
      w={1280}
      h={720}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <Text fontSize="4xl">Drag you thumbnail layout here</Text>
    </Center>
  );
};

export default ImageDropzone;
