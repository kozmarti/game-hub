import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading as="h1" marginY={5} marginLeft={3} fontSize="5xl">
      {gameQuery.platform?.name} {gameQuery.genre?.name} Game
    </Heading>
  );
};

export default GameHeading;
