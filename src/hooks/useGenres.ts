import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then(res => res.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: { count: genres.length, results: genres } // Initial data from local file


});


export default useGenres;