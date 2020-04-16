import React from 'react';
import { Main, Box, Heading, Text } from 'grommet';

export function NotFound() {
  return (
    <Box height="80vh">
      <Main
        justify="center"
        align="center">
        <Heading>404</Heading>
        <Text>Page Not Found</Text>
      </Main>
    </Box>
  )
}