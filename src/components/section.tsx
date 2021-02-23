import { Heading, VStack } from "@chakra-ui/react";
import React from "react";

type SectionProps = {
  title: string;
  children: any;
};

const Section = ({ title, children }: SectionProps) => {
  return (
    <VStack mb={10} spacing={4} align="flex-start">
      <Heading fontSize="xl">{title}</Heading>
      {children}
    </VStack>
  );
};

export default Section;
