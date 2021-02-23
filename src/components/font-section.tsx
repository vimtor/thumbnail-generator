import {
  Box,
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
} from "@chakra-ui/react";
import Section from "./section";
import React, { useEffect, useState } from "react";
import FontProperties, {
  FontFamily,
  FontStyle,
  FontVariant,
  FontWeight,
} from "../types/fonts";
import {
  convertVariantToText,
  extractFontStyle,
  extractFontWeight,
  fetchGoogleFonts,
} from "../utils/fonts";

type FontSectionProps = {
  value: FontProperties;
  onChange: (value: FontProperties) => void;
};

type FontInformation = Record<FontFamily, FontVariant[]>;

const FontSection = ({ value, onChange }: FontSectionProps) => {
  const [fonts, setFonts] = useState<FontInformation>({
    Roboto: ["300", "regular", "italic", "500", "700"],
  });

  useEffect(() => {
    fetchGoogleFonts().then((items) => {
      const newFonts: FontInformation = {};
      items.forEach(({ family, variants }) => {
        newFonts[family] = variants;
      });
      setFonts(newFonts);
    });
  }, []);

  return (
    <Section title="Font settings">
      <FormControl>
        <FormLabel>Size (px)</FormLabel>
        <NumberInput
          allowMouseWheel
          value={value.size}
          onChange={(str, number) => {
            onChange({
              ...value,
              size: number,
            });
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel>Family</FormLabel>
        <Select
          value={value.family}
          onChange={(event) => {
            onChange({
              ...value,
              family: event.target.value,
            });
          }}
        >
          {Object.keys(fonts).map((family) => (
            <option key={family} value={family}>
              {family}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Variant</FormLabel>
        <Select
          value={value.variant}
          onChange={(event) => {
            const variant = event.target.value as FontVariant;
            onChange({
              ...value,
              variant,
              weight: extractFontWeight(variant),
              style: extractFontStyle(variant),
            });
          }}
        >
          {fonts[value.family].map((variant) => (
            <option key={variant} value={variant}>
              {convertVariantToText(variant)}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Color</FormLabel>
        <HStack spacing={4}>
          <InputGroup>
            <InputLeftElement color="gray.300" fontSize="xl">
              #
            </InputLeftElement>
            <Input
              value={value.color}
              onChange={(event) => {
                onChange({
                  ...value,
                  color: event.target.value,
                });
              }}
            />
          </InputGroup>
          <Box
            flexShrink={0}
            bg={`#${value.color}`}
            w={8}
            h={8}
            border="1px solid"
            borderColor="gray.300"
            borderRadius={4}
          />
        </HStack>
      </FormControl>
    </Section>
  );
};

export default FontSection;
