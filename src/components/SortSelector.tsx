import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}


const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {

    const sortOrders = [
        { id: 1, value: '', label: 'Relevance' },
        { id: 2, value: '-added', label: 'Date Added' },
        { id: 3, value: 'name', label: 'Name' },
        { id: 4, value: '-released', label: 'Release Date' },
        { id: 5, value: '-metacritic', label: 'Popularity' },
        { id: 6, value: '-rating', label: 'Average Rating' },

    ];

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order by: {currentSortOrder?.label || 'Relevance'}</MenuButton>
            <MenuList>
                {sortOrders.map(item => <MenuItem onClick={() => onSelectSortOrder(item.value)} value={item.value} key={item.id}>{item.label}</MenuItem>)}

            </MenuList>
        </Menu>
    )
}

export default SortSelector;