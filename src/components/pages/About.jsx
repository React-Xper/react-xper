import React from "react";
import { Box, Heading, Paragraph, Main, Image } from "grommet";

function AboutComponent() {
  return (
    <Box height="100%" justify="center" width="100vw" overflow="hidden">
      <Heading level="2" textAlign="center" responsive={true}>
        About <span>React Xper</span>
      </Heading>
      <Main alignSelf="center" pad="medium">
        <Image
          src={require("assets/img/alien_science.svg")}
          className="react-xper-img"
        />
        <Paragraph responsive={true}>
          React Xper is a react-based website designed to experiment on
          different React concepts and interesting React components. It is
          developed by &nbsp;
          <a href="https://github.com/m3yevn">Kevin Moe Myint Myat(m3yevn)</a>.
          <br />
          <br />
          React is a JavaScript library for building user interfaces.
          <br />
          <br />
          To learn more about the React framework, please visit official &nbsp;
          <a href="https://reactjs.org/">ReactJS</a> website to explore.
        </Paragraph>
      </Main>
    </Box>
  );
}

export default AboutComponent;
