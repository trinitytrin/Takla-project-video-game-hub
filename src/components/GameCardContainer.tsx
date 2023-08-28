import { Box } from '@chakra-ui/react';
import { Children, ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode
}

const GameCardContainer = ({ children }: ContainerProps) => {
    return (
        <Box width={300} borderRadius={10} overflow='hidden'>
            {children}
        </Box>
    )
}

export default GameCardContainer;