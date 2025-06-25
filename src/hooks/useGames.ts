import { useInfiniteQuery} from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import APIClient from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";


const apiClient = new APIClient<Game>('/games');


const useGames = () => {
  const gameQuery = useGameQueryStore((s => s.gameQuery)); // Ensure gameQuery is initialized
  return useInfiniteQuery<FetchResponse<Game>, Error>(
    {
      queryKey: ["games", gameQuery],
       queryFn: ({pageParam}) => apiClient.getAll(
        {params: {
         genres: gameQuery.genreId,
         parent_platforms: gameQuery.platformId,
         ordering: gameQuery.sortOrder,
         search: gameQuery.searchText,
         page: pageParam
       }}),
       initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined;
      },
      staleTime: ms('24h'),
  } );

}
  
export default useGames;