import React from "react";
import { Main, Box, Text, Image } from "grommet";

function NotFoundComponent() {
  return (
    <Box height="100vh">
      <Main justify="start" align="center" pad="medium">
        <Image
          src={require("assets/img/404.svg")}
          className="react-xper-img"
        />
        <Text>Page Not Found</Text>
      </Main>
    </Box>
  );
}

export default NotFoundComponent;
