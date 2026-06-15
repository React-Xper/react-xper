import React from "react";
import { Box, ResponsiveContext } from "grommet";
import { BRAND } from "constants/brand";

export function Banner() {
  const size = React.useContext(ResponsiveContext);

  return (
    <Box width="100vw" justify="center" className="react-xper-banner">
      <div>
        <strong>react-xper-ui</strong> is on npm — {size === "small" && <br />}
        <a href={BRAND.uiLibraryUrl}>View the component library →</a>
      </div>
    </Box>
  );
}
