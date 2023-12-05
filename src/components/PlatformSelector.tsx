import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms, { Platform } from '../hooks/usePlatforms';
import useFindPlatform from '../hooks/useFindPlatform';


interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatformId?: number;
}


const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {

    const { data, error } = usePlatforms();
    const selectedPlatform = useFindPlatform(selectedPlatformId);
    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}> {selectedPlatform?.name || 'Select Platform'}</MenuButton>
            <MenuList>
                {data?.results.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id} >{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector;