import React from "react";
import { Box, ResponsiveContext } from "grommet";
import { PRODUCTS } from "constants/brand";

export function Banner() {
  const size = React.useContext(ResponsiveContext);

  return (
    <Box width="100vw" justify="center" className="react-xper-banner">
      <div>
        <strong>{PRODUCTS.ui.name}</strong> is on npm — {size === "small" && <br />}
        <a href={PRODUCTS.ui.siteUrl}>View the component library →</a>
      </div>
    </Box>
  );
}
