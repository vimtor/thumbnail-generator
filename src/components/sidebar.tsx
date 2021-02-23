import React, { ReactNode } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import Section from "./section";

type SidebarProps = {
  children: ReactNode;
  onDownload: () => Promise<void>;
  onClear: () => void;
};

const Sidebar = ({ children, onDownload, onClear }: SidebarProps) => {
  return (
    <Box minW={350}>
      <Flex h="100%" px={6} py={16} direction="column" justify="space-between">
        <Box>
          {children}
          <Section title="Generator settings">
            <FormControl>
              <FormLabel>Number of images</FormLabel>
              <NumberInput allowMouseWheel defaultValue={12}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl>
              <FormLabel>Filename pattern</FormLabel>
              <Input defaultValue="file-{number}" />
            </FormControl>
            <FormControl>
              <FormLabel>File extension</FormLabel>
              <Select defaultValue="png">
                <option value="png">PNG</option>
                <option value="jpg">JPG</option>
                <option value="svg">SVG</option>
              </Select>
            </FormControl>
          </Section>
        </Box>
        <VStack spacing={4}>
          <Button w="100%" onClick={onClear} variant="outline">
            Clear image
          </Button>
          <Button
            w="100%"
            leftIcon={<DownloadIcon />}
            colorScheme="teal"
            onClick={onDownload}
          >
            Download
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Sidebar;
