import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import apiClient from '../services/api-client';
import APIClient, { FetchResponse } from '../services/api-client';
import { Platform } from './usePlatforms';




export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    rating_top: number;
}

const gameService = new APIClient<Game>('/games');

//params objects members' names should be as exactly the API provides the query parameter names

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({pageParam = 1})=> gameService.getAll({params : {
        genres : gameQuery.genre?.id, 
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
    }}),
    getNextPageParam: (lastPage, allPages) => {
return lastPage.next? allPages.length +1 : undefined;
    },
 
    staleTime: 24*60*60*1000, //24hrs 
});


export default useGames;