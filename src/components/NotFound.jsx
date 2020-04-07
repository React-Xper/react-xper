import React from 'react';
import { Page } from './style/Page';
import { Banner } from './style/Banner';
import { H1 } from './style/H1';
import { H2 } from './style/H2';
import { Button } from './style/Button';
import { Footer } from './style/Footer';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export function NotFound() {
  return (
    <Page>
      <Banner>
        <div>
          <H1>4<span>0</span>4</H1>
          <H2>Page Not Found</H2>
        </div>
      </Banner>
      <Footer>
        <>
          <Button><Link to="/">Get Back</Link></Button>
        </>
      </Footer>
    </Page>
  )
}