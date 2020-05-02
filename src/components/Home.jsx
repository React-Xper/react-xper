import React from 'react';
import { Footer, Button, Box, Main, Text, Anchor, ResponsiveContext } from 'grommet';
import { withRouter } from 'react-router-dom';
import { Heading } from './styles/Heading';

function HomeComponent({ history }) {
  const size = React.useContext(ResponsiveContext);

  const handleButtonClick = () => {
    history.push('/lab');
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
        overflow="hidden">
        <Heading textAlign="center" responsive={true} level="1">
          <span><img src={require('../assets/img/React.webp')} alt="react-logo" className="react-logo" />
            {size === 'small' && <br />}
        Reac<b>t</b></span>hesiS 
        {
          size !== 'small' &&
          <span role="img" aria-labelledby="science">👨‍🔬</span>
        }</Heading>
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