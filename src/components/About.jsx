import React from 'react';
import { Box, Heading, Paragraph, Main } from 'grommet';

export function About() {
  return (
    <Box height="100vh" justify="center" width="100vw" pad="large" overflow="hidden">
      <Heading textAlign="center" responsive={true}>About <span>Reacthesis</span></Heading>
      <Main alignSelf="center">
      <Paragraph responsive={true} >Reacthesis is a react-based website designed to experiment on different React concepts. It is developed by <a>Kevin Moe Myint Myat(m3yevn)</a>.
      <br/><br/>React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.
      <br/><br/>To learn more about the react framework, please visit official <a>ReactJS</a> website to explore.
      </Paragraph>
      </Main>
    </Box>
  )
}