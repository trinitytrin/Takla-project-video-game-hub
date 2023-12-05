import { useQuery } from "@tanstack/react-query";
import staticPlatforms from "../data/staticPlatforms";
import APIClient from '../services/api-client';
import ms from 'ms';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const platformService = new APIClient<Platform>('/platforms/lists/parents'); 

const usePlatforms = () =>useQuery({
    queryKey: ['platforms'],
    queryFn: platformService.getAll,
    staleTime: ms('24h'),
    initialData: staticPlatforms,
});


export default usePlatforms;