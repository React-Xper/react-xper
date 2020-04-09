import React from 'react';
import { Footer, Button, Box, Main, Text, Anchor } from 'grommet';
import { Link, withRouter } from 'react-router-dom';
import { Heading } from './styles/Heading';

function HomeComponent({ history }) {
  const handleButtonClick = () => {
    history.push('/lab');
  };

  return (
    <Box height="80vh" overflow="hidden">
      <Main
        direction="column"
        width="100vw"
        justify="center"
        align="center"
        pad="medium"
        alignSelf="center"
        overflow="hidden">
        <Heading textAlign="center" responsive={true} level="1">
          <span>Reac<b>t</b></span>hesiS <span role="img" aria-labelledby="science">👨‍🔬</span></Heading>
        <Heading textAlign="center" responsive={true} level="4">A developer's guide to experiment React</Heading>
        <Text color="gray" textAlign="center" size="small">Made with <span role="img" aria-labelledby="heart">❤️</span> by
          <Anchor color="status-ok" href="https://github.com/m3yevn" target="_blank" rel="noopener noreferrer"> m3yevn</Anchor></Text>
        <Footer justify="center" pad="xlarge">
          <Button color="brand" label="Get Started" onClick={handleButtonClick} />
        </Footer>
      </Main>
    </Box>
  )
}

export const Home = withRouter(HomeComponent);