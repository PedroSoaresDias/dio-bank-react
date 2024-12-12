import React from 'react'
import { Box } from '@chakra-ui/react'

export default function Card({ children }: { children: React.ReactNode }) {

  return (
    <Box backgroundColor={"#FFF"} borderRadius={"25px"} padding={15} color={"#000"}>
      {children}
    </Box>
  )
}