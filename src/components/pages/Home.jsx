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
import { Heading } from "components/styles/Heading";
import { BRAND, ECOSYSTEM, PRODUCTS } from "constants/brand";

export default function HomeComponent() {
  const size = React.useContext(ResponsiveContext);
  const history = useHistory();

  return (
    <Box height="100%">
      <Main
        direction="column"
        width="100vw"
        justify="center"
        align="center"
        pad="medium"
        alignSelf="center"
        height="100vh !important">
        <Heading
          textAlign="center"
          responsive={true}
          level="1"
          className={size !== "small" ? "react-xper-logo-wrapper" : null}>
          <div
            style={{ marginTop: size === "small" ? -40 : 0 }}
            className={`react-xper-logo react-xper-logo__home ${
              size === "small" ? "react-xper-logo__home--small" : ""
            }`}></div>
          {size === "small" && <br />}
          <div style={{ marginTop: size !== "small" ? 50 : 0 }}>
            {ECOSYSTEM.name}{" "}
            <Text color="status-ok" size="large">
              {PRODUCTS.studio.shortName}
            </Text>
          </div>
        </Heading>
        <Heading textAlign="center" responsive={true} level="4">
          {BRAND.tagline}
        </Heading>
        <Text color="gray" textAlign="center" size="small" margin={{ top: "small" }}>
          {ECOSYSTEM.tagline}{" "}
          <Anchor color="status-ok" href={BRAND.orgUrl} target="_blank" rel="noopener noreferrer">
            @{ECOSYSTEM.org}
          </Anchor>
          {" · "}
          <Anchor
            color="status-ok"
            href={PRODUCTS.ui.siteUrl}
            target="_blank"
            rel="noopener noreferrer">
            {PRODUCTS.ui.name}
          </Anchor>
        </Text>
        <Footer justify="center" pad="small" gap="small">
          <Button
            color="brand"
            label="Explore patterns"
            onClick={() => history.push("/patterns")}
          />
          <Button
            color="neutral-1"
            label={PRODUCTS.ui.shortName}
            onClick={() => window.open(PRODUCTS.ui.siteUrl, "_blank", "noopener,noreferrer")}
          />
        </Footer>
      </Main>
    </Box>
  );
}
