import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import apiClient from "../services/api-client";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then(res => res.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    // initialData: { count: genres.length, results: genres } // Initial data from local file


});
    
export default usePlatforms;