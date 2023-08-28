import { Button, HStack, Image, Link, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface GenreListProps {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}


const GenreList = ({ selectedGenre, onSelectGenre }: GenreListProps) => {

    const { data, isLoading } = useGenres();

    if (isLoading) return <Spinner />

    return (
        <List>
            {data.map(genre => <ListItem key={genre.id}>
                <HStack padding={2}>
                    <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                    <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>

                </HStack> </ListItem>)}
        </List>
    )
}

export default GenreList;