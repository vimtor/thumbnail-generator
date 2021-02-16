import React from 'react';
import {ChakraProvider, Grid, GridItem} from '@chakra-ui/react'
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Canvas from "./components/canvas";

const App = () => {
  return (
    <ChakraProvider>
      <Grid h="100vh" templateRows="auto repeat(5, 1fr)" templateColumns="repeat(7, 1fr)">
        <GridItem rowSpan={1} colSpan={7} >
          <Navbar/>
        </GridItem>
        <GridItem rowSpan={5} colSpan={5}>
          <Canvas/>
        </GridItem>
        <GridItem rowSpan={5} colSpan={2}>
          <Sidebar/>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

export default App;
