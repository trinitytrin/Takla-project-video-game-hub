import { Button, HStack, Heading, Image, Link, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface GenreListProps {
    onSelectGenre: (genre: Genre) => void;
    selectedGenreId?: number;
}


const GenreList = ({ selectedGenreId, onSelectGenre }: GenreListProps) => {

    const { data, isLoading, error } = useGenres();

    if (isLoading) return <Spinner />

    return (
        <>
            <Heading fontSize='2xl' marginBottom={2}> Genres </Heading>
            <List>
                {data?.results.map(genre => <ListItem key={genre.id}>
                    <HStack padding={2}>
                        <Image boxSize='32px'
                            borderRadius={8}
                            objectFit='cover'
                            src={getCroppedImageUrl(genre.image_background)} />
                        <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>

                    </HStack> </ListItem>)}
            </List>
        </>
    )
}

export default GenreList;