import React from "react";
import {
  Footer,
  Button,
  Box,
  Main,
  Text,
  Anchor,
  ResponsiveContext,
} from "grommet";
import { useHistory } from "react-router-dom";
import { Heading } from "../styles/Heading";

export default function HomeComponent() {
  const size = React.useContext(ResponsiveContext);
  const history = useHistory();

  const handleButtonClick = () => {
    history.push("/concepts-lab");
  };

  return (
    <Box height="100vh" overflow="hidden">
      <Main
        direction="column"
        width="100vw"
        justify="center"
        align="center"
        pad="medium"
        alignSelf="center"
        overflow="hidden"
      >
        <Heading
          textAlign="center"
          responsive={true}
          level="1"
          className={size !== "small" ? "reacthesis-logo-wrapper" : null}
        >
          <div
            className={`reacthesis-logo reacthesis-logo__home ${
              size === "small" ? "reacthesis-logo__home--small" : ""
            }`}
          ></div>
          {size === "small" && <br />}
          <div style={{ marginTop: size !== "small" ? 50 : 0 }}>
            Reac<b>t</b>
            hesiS
          </div>
          {size !== "small" && (
            <span
              style={{ marginTop: size !== "small" ? 50 : 0 }}
              role="img"
              aria-labelledby="science"
            >
              👨‍🔬
            </span>
          )}
        </Heading>
        <Heading textAlign="center" responsive={true} level="4">
          A developer's guide to experiment React
        </Heading>
        <Text color="gray" textAlign="center" size="small">
          Made with{" "}
          <span role="img" aria-labelledby="heart">
            ❤️
          </span>{" "}
          by
          <Anchor
            color="status-ok"
            href="https://github.com/m3yevn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            m3yevn
          </Anchor>
        </Text>
        <Footer justify="center" pad="xlarge">
          <Button
            color="brand"
            label="Get Started"
            onClick={handleButtonClick}
          />
        </Footer>
      </Main>
    </Box>
  );
}
