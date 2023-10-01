import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms, { Platform } from '../hooks/usePlatforms';


interface Props {
    onSelectPlatform: (platform: Platform) => void;
    platform: Platform | null;
}


const PlatformSelector = ({ onSelectPlatform, platform }: Props) => {

    const { data, error } = usePlatforms();
    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}> {platform?.name || 'Select Platform'}</MenuButton>
            <MenuList>
                {data?.results.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id} >{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector;