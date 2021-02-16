import React from 'react'
import {Button, VStack} from '@chakra-ui/react'

type SidebarProps = {
  onDownload: () => Promise<void>;
}

const Sidebar = ({onDownload}: SidebarProps) => {
  return (
    <VStack>
      <Button onClick={onDownload}>Download</Button>
    </VStack>
  )
}

export default Sidebar
