import React from "react";
import { Main, Box, Heading, Text } from "grommet";

function NotFoundComponent() {
  return (
    <Box height="100vh">
      <Main justify="center" align="center">
        <Heading>404</Heading>
        <Text>Page Not Found</Text>
      </Main>
    </Box>
  );
}

export default NotFoundComponent;
