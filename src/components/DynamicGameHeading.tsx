import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenres, { Genre } from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';
import useFindPlatform from '../hooks/useFindPlatform';
import useFindGenre from '../hooks/useFindGenre';

interface Props {
    gameQuery: GameQuery;
}

const DynamicGameHeading = ({ gameQuery }: Props) => {

    const genre = useFindGenre(gameQuery.genreId);
    const platform = useFindPlatform(gameQuery.platformId);



    const dynamicHeading = `${platform?.name || ''}
    ${genre?.name || ''}
     Games`;

    return (
        <Heading as='h1' marginBottom={10} fontSize='5xl'>
            {dynamicHeading}
        </Heading >
    )
}

export default DynamicGameHeading;