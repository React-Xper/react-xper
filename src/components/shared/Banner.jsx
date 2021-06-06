import React from "react";
import { Box, ResponsiveContext } from "grommet";

export function Banner() {
  const size = React.useContext(ResponsiveContext);

  return (
    <Box width="100vw" justify="center" className="react-xper-banner">
      <div>
        Myanmar Votes Matter. {size === "small" && <br />}
        <a href="https://www.channelnewsasia.com/news/asia/myanmar-doctors-medics-civil-disobedience-calls-activists-14103732">
          Support Myanmar Civil Disobedience
        </a>
      </div>
    </Box>
  );
}
