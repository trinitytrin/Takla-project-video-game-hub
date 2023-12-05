import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenres, { Genre } from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
    gameQuery: GameQuery;
}

const DynamicGameHeading = ({ gameQuery }: Props) => {

    const { data: genres } = useGenres();
    const { data: platforms } = usePlatforms();
    const genre = genres?.results.find(g => g.id === gameQuery.genreId);
    const platform = platforms?.results.find(p => p.id === gameQuery.platformId);



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