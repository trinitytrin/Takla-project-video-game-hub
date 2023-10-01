import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import APIClient, { FetchResponse } from '../services/api-client';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const platformService = new APIClient<Platform>('/platforms/lists/parents'); 

const usePlatforms = () =>useQuery({
    queryKey: ['platforms'],
    queryFn: platformService.getAll,
    staleTime: 24*60*60*1000, //24hrs 
});


export default usePlatforms;