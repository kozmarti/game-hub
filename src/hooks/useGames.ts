import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Game>('/games');


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    rating_top: number;
  }
  

const useGames = (gameQuery: GameQuery) => 
  useInfiniteQuery<FetchResponse<Game>, Error>(
    {
      queryKey: ["games", gameQuery],
       queryFn: ({pageParam}) => apiClient.getAll(
        {params: {
         genres: gameQuery.genre?.id,
         parent_platforms: gameQuery.platform?.id,
         ordering: gameQuery.sortOrder,
         search: gameQuery.searchText,
         page: pageParam
       }}),
       initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined;
      },
  } );
export default useGames;