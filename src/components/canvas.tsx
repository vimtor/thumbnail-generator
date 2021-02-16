import ImageDropzone from "./image-dropzone";
import React, {useCallback, useRef, useState} from "react";
import {Text, Button, Center, Image, Box} from '@chakra-ui/react'
import {toPng} from "html-to-image";
import download from "downloadjs";

const Canvas = () => {
  const [image, setImage] = useState<string>()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setImage(URL.createObjectURL(file))
  }, [])


  const ref = useRef<HTMLDivElement>(null)

  const handleClick = async () => {
    if (!ref.current) {
      return
    }

    const images = Array.from(ref.current.childNodes)
    let index = 1;

    for (const image of images) {
      const dataUrl = await toPng(image as HTMLElement)
      download(dataUrl, `file-${index}.png`)
      index += 1;
    }
  }

  return (
    <Center bg="gray.100" h="100%" w="100%">
      <Box w={1280} h={720}>
        {image ? (
          <Image w="100%" src={image} alt="thumbnail layout"/>
        ): (
          <ImageDropzone onDrop={onDrop} />
        )}
      </Box>
      <Button onClick={handleClick}>Download</Button>
      <Box pos="fixed" top="100vh">
        <div ref={ref}>
          {[1,2,3,4].map(number => {
            return (
              <Box key={number} pos="relative" w={1280} h={720}>
                <Image w="100%" src={image} alt="thumbnail layout"/>
                <Text fontSize="3xl" color="red.500" pos="absolute" top="0" left="0">
                  {number}
                </Text>
              </Box>
            )
          })}
        </div>
      </Box>
    </Center>
  )
}

export default Canvas
