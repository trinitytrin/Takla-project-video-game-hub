import { useQuery } from '@tanstack/react-query';
import staticGenres from '../data/staticGenres';
import APIClient, { FetchResponse } from '../services/api-client';
import ms from 'ms';

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const genreService = new APIClient<Genre>('/genres'); 

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: genreService.getAll,
    staleTime: ms('24h'),
    initialData: staticGenres,
});

export default useGenres;