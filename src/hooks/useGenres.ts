import { useQuery } from '@tanstack/react-query';
import staticGenres from '../data/staticGenres';
import apiClient from '../services/api-client';
import { FetchResponse } from '../services/api-client';

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}


const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: ()=> apiClient.get<FetchResponse<Genre>>('/genres').then(res=>res.data),
    staleTime: 24*60*60*1000, //24hrs 
    initialData: {count: staticGenres.length, results: staticGenres}
});

export default useGenres;