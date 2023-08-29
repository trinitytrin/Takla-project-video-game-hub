import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props {
    gameQuery: GameQuery;
}

const DynamicGameHeading = ({ gameQuery }: Props) => {

    const dynamicHeading = `${gameQuery.platform?.name || ''}
    ${gameQuery.genre?.name || ''}
     Games`;

    return (
        <Heading as='h1' marginBottom={10} fontSize='5xl'>
            {dynamicHeading}
        </Heading >
    )
}

export default DynamicGameHeading;