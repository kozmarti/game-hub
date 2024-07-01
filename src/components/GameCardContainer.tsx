import { Box} from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({children}: Props) => {
  return (
    <Box boxShadow="1px 1px 5px gray" maxW="sm" borderRadius={10} overflow="hidden">{children}</Box>
  );
};

export default GameCardContainer;
