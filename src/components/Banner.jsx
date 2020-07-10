import React from "react";
import { Box, ResponsiveContext } from "grommet";

export function Banner() {
  const size = React.useContext(ResponsiveContext);

  return (
    <Box width="100vw" justify="center" className="reacthesis-banner">
      <div>
        Black Lives Matter. {size === "small" && <br />}
        <a href="https://support.eji.org/give/153413/#!/donation/checkout">
          Support Equal Justice Initiative
        </a>
      </div>
    </Box>
  );
}
