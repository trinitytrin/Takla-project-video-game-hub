
import { Platform } from '../hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react';

import { FaPlaystation, FaWindows, FaLinux, FaAndroid, FaXbox, FaApple } from 'react-icons/fa';
import { SiNintendo } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons';

interface PlatformProps {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformProps) => {
    const iconMap: { [key: string]: IconType } = {
        //name: PlayStation
        //slug: playstation
        pc: FaWindows,
        linux: FaLinux,
        android: FaAndroid,
        xbox: FaXbox,
        playstation: FaPlaystation,
        nintendo: SiNintendo,
        mac: FaApple,
        ios: MdPhoneIphone,
        web: BsGlobe

    }

    return (
        <HStack marginY={1.5}>
            {platforms.map((platform) => <Icon as={iconMap[platform.slug]} color='gray.500' />)}
        </HStack>
    )
}

export default PlatformIconList;