import React from "react";
import { Box } from "grommet";
import RingLoader from "@bit/davidhu2000.react-spinners.ring-loader";

export function Loading() {
  return (
    <Box
      height="100vh"
      justify="center"
      align="center"
      width="100vw"
      overflow="hidden"
    >
      <RingLoader size={100} color="#61dafb" />
    </Box>
  );
}
