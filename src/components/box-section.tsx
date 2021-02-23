import React from "react";
import Section from "./section";
import {
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from "@chakra-ui/react";
import Size from "../types/size";
import Position from "../types/position";

type BoxSectionProps = {
  size: Size;
  position: Position;
  onPositionChange: (position: Position) => void;
  onSizeChange: (size: Size) => void;
};

const BoxSection = ({
  size,
  position,
  onPositionChange,
  onSizeChange,
}: BoxSectionProps) => {
  return (
    <Section title="Box properties">
      <SimpleGrid columns={2} spacing={4}>
        <InputGroup>
          <InputLeftElement color="gray.300" fontSize="xl">
            X
          </InputLeftElement>
          <Input
            value={position.x}
            onChange={(event) => {
              onPositionChange({
                x: parseInt(event.target.value),
                y: position.y,
              });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement color="gray.300" fontSize="xl">
            Y
          </InputLeftElement>
          <Input
            value={position.y}
            onChange={(event) => {
              onPositionChange({
                x: position.x,
                y: parseInt(event.target.value),
              });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement color="gray.300" fontSize="xl">
            W
          </InputLeftElement>
          <Input
            value={size.width}
            onChange={(event) => {
              onSizeChange({
                width: parseInt(event.target.value),
                height: size.height,
              });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement color="gray.300" fontSize="xl">
            H
          </InputLeftElement>
          <Input
            value={size.height}
            onChange={(event) => {
              onSizeChange({
                width: size.width,
                height: parseInt(event.target.value),
              });
            }}
          />
        </InputGroup>
      </SimpleGrid>
    </Section>
  );
};

export default BoxSection;
