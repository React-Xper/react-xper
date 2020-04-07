import React from 'react';
import { Page } from './style/Page';
import { Banner } from './style/Banner';
import { H1 } from './style/H1';
import { H2 } from './style/H2';
import { Button } from './style/Button';
import { Footer } from './style/Footer';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useBreakpoint from './hooks/useBreakpoint';

export function Home() {
  const size = useBreakpoint();

  return (
    <Page>
      <Banner>
        <div>
          <H1 size={size}><span>Reac<b>t</b></span>hesiS <span role="img" aria-labelledby="science">👨‍🔬</span></H1>
          <H2 size={size}>A developer's guide to experiment React</H2>
          <p>Made with <span role="img" aria-labelledby="heart">❤️</span> by
          <a href="https://github.com/m3yevn" target="_blank" rel="noopener noreferrer">m3yevn</a></p>
        </div>
      </Banner>
      <Footer>
        <>
          <Button><Link to="/lab">Get Started</Link></Button>
        </>
      </Footer>
    </Page>
  )
}