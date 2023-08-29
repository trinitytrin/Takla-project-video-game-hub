import { FaWindows, FaPlaceOfWorship, FaXbox, FaLinux, FaApple, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si'
import { Game } from '../hooks/useGames';
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';

interface GameProps {
    game: Game;
}


const GameCard = ({ game }: GameProps) => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>

                <HStack justifyContent='space-between' marginBottom={2}>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize='2xl'>{game.name}</Heading>

            </CardBody>
        </Card>
    )
}

export default GameCard;