import React from "react";
import { Box, Heading, Paragraph, Main, Image, Anchor } from "grommet";
import { BRAND, ECOSYSTEM, PRODUCTS } from "constants/brand";

function AboutComponent() {
  return (
    <Box height="100%" justify="center" width="100vw" overflow="hidden">
      <Heading level="2" textAlign="center" responsive={true}>
        About {BRAND.name}
      </Heading>
      <Main alignSelf="center" pad="medium" width="medium">
        <Image
          src={require("assets/img/alien_science.svg")}
          className="react-xper-img"
        />
        <Paragraph responsive={true}>
          <strong>{BRAND.name}</strong> is the interactive studio for{" "}
          <Anchor href={BRAND.orgUrl} target="_blank" rel="noopener noreferrer">
            {ECOSYSTEM.name}
          </Anchor>{" "}
          — patterns, canvas tools, and live demos for{" "}
          <Anchor href={PRODUCTS.ui.npmUrl} target="_blank" rel="noopener noreferrer">
            {PRODUCTS.ui.name}
          </Anchor>
          .
        </Paragraph>
        <Paragraph responsive={true}>
          <strong>Patterns</strong> — guided examples for hooks, context, composition,
          and performance.
          <br />
          <strong>Components</strong> — live demos powered by{" "}
          <Anchor href={PRODUCTS.ui.npmUrl} target="_blank" rel="noopener noreferrer">
            {PRODUCTS.ui.name}
          </Anchor>
          .
          <br />
          <strong>Canvas</strong> — Konva-based editors, behavior trees, and drawing
          utilities (the DNA behind Kanbaneon and Vizat).
        </Paragraph>
        <Paragraph responsive={true}>
          Built by{" "}
          <Anchor href="https://github.com/m3yevn" target="_blank" rel="noopener noreferrer">
            Kevin Moe Myint Myat
          </Anchor>
          .
        </Paragraph>
      </Main>
    </Box>
  );
}

export default AboutComponent;
