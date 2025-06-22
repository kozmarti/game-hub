import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const genre = useGenre(selectedGenreId);
  const platform = usePlatform(selectedPlatformId);
  
  return (
    <Heading as="h1" marginY={5} marginLeft={3} fontSize="5xl">
      {platform?.name} {genre?.name} Game
    </Heading>
  );
  };

  export default GameHeading;
