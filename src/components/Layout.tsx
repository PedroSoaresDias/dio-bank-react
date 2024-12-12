import React from 'react'
import Header from './Header'
import { Box } from '@chakra-ui/react'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Box minHeight={"100vh"} backgroundColor={"#9413dc"}>
            <Header />
            {children}
            </Box>
        </>
    )
}
