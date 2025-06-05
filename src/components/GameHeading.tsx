import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);
  
  return (
    <Heading as="h1" marginY={5} marginLeft={3} fontSize="5xl">
      {platform?.name} {genre?.name} Game
    </Heading>
  );
};

export default GameHeading;
