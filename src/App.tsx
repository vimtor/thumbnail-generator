import React, {useCallback, useRef, useState} from 'react';
import {Box, ChakraProvider, Flex, Grid, GridItem, Image, Text} from '@chakra-ui/react'
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Canvas from "./components/canvas";
import {toPng} from "html-to-image";
import download from "downloadjs";

const App = () => {
  const [image, setImage] = useState('')
  const [position, setPosition] = useState({x: 0, y: 0})
  const ref = useRef<HTMLDivElement>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setImage(URL.createObjectURL(file))
  }, [])

  const handleDownload = async () => {
    if (!ref.current) return

    const images = Array.from(ref.current.childNodes)
    let index = 1;

    for (const image of images) {
      const dataUrl = await toPng(image as HTMLElement)
      download(dataUrl, `file-${index}.png`)
      index += 1;
    }
  }

  return (
    <ChakraProvider>
      <Grid h="100vh" templateRows="auto repeat(5, 1fr)" templateColumns="repeat(7, 1fr)">
        <GridItem rowSpan={1} colSpan={7} >
          <Navbar/>
        </GridItem>
        <GridItem rowSpan={5} colSpan={5}>
          <Canvas image={image} onDrop={onDrop} onPositionChange={(event, delta) => {
            setPosition({x: delta.x, y: delta.y})
          }}/>
        </GridItem>
        <GridItem rowSpan={5} colSpan={2}>
          <Sidebar onDownload={handleDownload}/>
        </GridItem>
      </Grid>
      <Box pos="fixed" top="100vh">
        <div ref={ref}>
          {[1,2,3,4].map(number => {
            return (
              <Box key={number} w={1280} h={720} pos="relative" overflow="hidden">
                <Flex
                  left={position.x}
                  top={position.y}
                  align="center" bg="red.500" justify="center" pos="absolute" w={200} h={200}>
                  <Text color="white" fontSize="6xl" fontWeight="bold">
                    {number}
                  </Text>
                </Flex>
                <Image w="100%" src={image} alt="thumbnail layout"/>
              </Box>
            )
          })}
        </div>
      </Box>
    </ChakraProvider>
  );
};

export default App;
