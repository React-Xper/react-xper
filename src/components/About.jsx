import React from 'react';
import { Box, Heading, Paragraph, Main } from 'grommet';

export function About() {
  return (
    <Box height="100vh" justify="center" width="100vw" pad="large" overflow="hidden">
      <Heading level="2" textAlign="center" responsive={true}>About <span>Reacthesis</span></Heading>
      <Main alignSelf="center">
        <Paragraph responsive={true} >
          Reacthesis is a react-based website designed to experiment on different React concepts. It is developed by
      &nbsp;<a href="https://github.com/m3yevn">Kevin Moe Myint Myat(m3yevn)</a>.
      <br /><br />React is a JavaScript library for building user interfaces.
      <br /><br />To learn more about the react framework, please visit official
      &nbsp;<a href="https://reactjs.org/">ReactJS</a> website to explore.
      </Paragraph>
      </Main>
    </Box>
  )
}