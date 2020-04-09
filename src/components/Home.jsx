import React from 'react';
import { Footer, Button, Box, Main, Heading, Text } from 'grommet';
import { Link, withRouter } from 'react-router-dom';

function HomeComponent({ history }) {
  const handleButtonClick = () => {
    history.push('/lab');
  };

  return (
    <Box height="80vh">
      <Main
        direction="column"
        justify="center"
        pad="medium"
        alignSelf="center">
        <Heading textAlign="center" responsive={true} level="1"><span>Reac<b>t</b></span>hesiS <span role="img" aria-labelledby="science">👨‍🔬</span></Heading>
        <Heading textAlign="center" responsive={true} level="4">A developer's guide to experiment React</Heading>
        <Text color="gray" textAlign="center" size="small">Made with <span role="img" aria-labelledby="heart">❤️</span> by
          <a href="https://github.com/m3yevn" target="_blank" rel="noopener noreferrer">m3yevn</a></Text>
      </Main>
      <Footer alignSelf="center" pad="medium">
        <Button label="Get Started" onClick={handleButtonClick} />
      </Footer>
    </Box>
  )
}

export const Home = withRouter(HomeComponent);