import { useQuery } from '@tanstack/react-query';
import staticGenres from '../data/staticGenres';
import APIClient, { FetchResponse } from '../services/api-client';

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const genreService = new APIClient<Genre>('/genres'); 

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: genreService.getAll,
    staleTime: 24*60*60*1000, //24hrs 
    initialData: {count: staticGenres.length, results: staticGenres, next: null}
});

export default useGenres;