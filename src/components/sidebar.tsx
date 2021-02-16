import React from 'react'
import {Box, Button, VStack} from '@chakra-ui/react'
import {DownloadIcon} from '@chakra-ui/icons'

type SidebarProps = {
  onDownload: () => Promise<void>;
  onClear: () => void;
}

const Sidebar = ({onDownload, onClear}: SidebarProps) => {
  return (
    <Box minW={350}>
      <VStack p={6}>
        <Button w="100%" onClick={onClear} variant="outline">
          Clear
        </Button>
        <Button w="100%" leftIcon={<DownloadIcon />} colorScheme="teal"  onClick={onDownload}>
          Download
        </Button>
      </VStack>
    </Box>
  )
}

export default Sidebar
