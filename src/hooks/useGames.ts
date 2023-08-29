import { GameQuery } from '../App';
import useData from './useData';
import { Genre } from './useGenres';
import { Platform } from './usePlatforms';

export interface Platforms {
    id: number;
    name: string;
    slug: string;
}


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platforms}[];
    metacritic: number;
    rating_top: number;
}

//params objects members' names should be as exactly the API provides the query parameter names

const useGames = (gameQuery: GameQuery) => 
useData<Game>('/games',
{params : {
    genres : gameQuery.genre?.id, 
    platforms: gameQuery.platform?.id,
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText,}},
 [gameQuery]);

export default useGames;