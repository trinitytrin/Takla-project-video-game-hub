import { FaWindows, FaPlaceOfWorship, FaXbox, FaLinux, FaApple, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si'
import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';

interface GameProps {
    game: Game;
}


const GameCard = ({ game }: GameProps) => {
    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
            </CardBody>
        </Card>
    )
}

export default GameCard;