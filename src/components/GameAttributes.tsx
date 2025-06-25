import { SimpleGrid, Text } from '@chakra-ui/react';
import { Game } from '../entities/Game';
import CriticScore from './CriticScore';
import DefinitionItem from './DefinitionItem';

interface Props {
    game: Game;

}

const GameAttributes = ({ game }: Props) => {
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} as="dl">
            <DefinitionItem term="Platforms">
                {game.parent_platforms?.map(({ platform }) => (
                    <Text key={platform.id} color="gray.100" >{platform.name}</Text>
                ))}
            </DefinitionItem>
            <DefinitionItem term="Metascore">
                <CriticScore score={game.metacritic} />
            </DefinitionItem>
            <DefinitionItem term="Genres">
                {game.genres?.map((genre) => (
                    <Text key={genre.id} marginRight={2} color="gray.100">{genre.name}</Text>
                ))}
            </DefinitionItem>
            <DefinitionItem term="Publishers">
                {game.publishers?.map((publisher) => (
                    <Text key={publisher.id} marginRight={2} color="gray.100">{publisher.name}</Text>
                ))}
            </DefinitionItem>
        </SimpleGrid>)
}

export default GameAttributes