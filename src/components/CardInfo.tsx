import React from 'react'
import { Box, Text } from '@chakra-ui/react'

interface ICardInfo {
  mainContent: string;
  content: string;
}

export default function CardInfo({ mainContent, content }: ICardInfo) {
  return (
    <Box
      minHeight={"120px"}
      backgroundColor={"#EEE"}
      padding={8}
      color={"#000"}
      borderRadius={25}
    >
      <Text fontSize={"2xl"} fontWeight={"bold"}>{ mainContent }</Text>
      <Text fontSize={"xl"}>{ content }</Text>
    </Box>
  )
}
