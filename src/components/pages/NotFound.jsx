import React from "react";
import { Main, Box, Heading, Text, Image } from "grommet";

function NotFoundComponent() {
  return (
    <Box height="70vh">
      <Main justify="center" align="center">
        <Image
          src={require("../../assets/img/404.svg")}
          className="reacthesis-img"
        />
        <Text>Page Not Found</Text>
      </Main>
    </Box>
  );
}

export default NotFoundComponent;
