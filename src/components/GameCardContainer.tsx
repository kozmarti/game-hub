import { Box} from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({children}: Props) => {
  return (
    <Box  _hover={{ transform: "scale(1.03)", transition: "transform .15s ease-in" }} boxShadow="1px 1px 10px #1A202C" maxW="sm" borderRadius={10} overflow="hidden">{children}</Box>
  );
};

export default GameCardContainer;
