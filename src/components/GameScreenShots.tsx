import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";

interface Props {
  gameId: number;
}
const GameScreenShots = ({gameId} : Props) => {
    const {data, isLoading, error} = useScreenShots(gameId);

    if (isLoading) return null;
    if (error) throw error;

  return (
<SimpleGrid columns={{base: 1, md: 2}} spacing={2} >
    {data?.results.map((file) => 
    <Image
        key={file.id}
        src={file.image}
        alt="Game Screenshot"
        width="100%"
        height={{base: 200, md: 300}}
        objectFit="cover"
      />
    )} 

</SimpleGrid>
  )
}

export default GameScreenShots