import { Box, Heading, Text } from '@chakra-ui/react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from '../components/NavBar';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
        <NavBar />
        <Box padding={5}>
            <Heading>
                Ooops
            </Heading>
            <Text>
                {isRouteErrorResponse(error) ? (
                    <Text>
                        This Page does not exist. {error.status} - {error.statusText}
                    </Text>
                ) : (
                    <Text>
                        {error instanceof Error ? error.message : 'An unexpected error occurred.'}
                    </Text>
                )}
            </Text>
            </Box>

        </>)
}

export default ErrorPage