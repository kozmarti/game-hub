import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";
import ms from "ms";
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms // Initial data from local file


});
    
export default usePlatforms;