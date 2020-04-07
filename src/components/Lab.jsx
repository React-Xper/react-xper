import React from 'react';
import { Page } from './style/Page';
import { Banner } from './style/Banner';
import { Title } from './style/Title';
import useBreakpoint from './hooks/useBreakpoint';
import { Card } from './style/Card';
import { Container } from './style/Container';
import { withRouter } from 'react-router-dom';

const articles = [
  {
    title: 'useEffect Hook',
    subtitle: 'How to use useEffect React hook',
    link: '/useEffect'
  },
  {
    title: 'useState Hook',
    subtitle: 'How to use useState React hook',
    link: '/useState'
  },
  {
    title: 'useCallback Hook',
    subtitle: 'How to use useCallback React hook',
    link: '/useCallback'
  },
  {
    title: 'useMemo Hook',
    subtitle: 'How to use useMemo React hook',
    link: '/useMemo'
  }
];

function LabComponent ({history}) {
  const size = useBreakpoint();

  const handleCardClick = (link) => {
    history.push(link);
  }

  return (<Page>
    <Banner thin={true}>
      <Title size={size}>All experiments on React</Title>
    </Banner>
    <Container size={size}>
      {
        articles.map((value,index) => 
          <Card size={size} onClick={() => handleCardClick(value.link)}>
          <h1>{value.title}</h1>
          <h2>{value.subtitle}</h2>
        </Card>)
      }
    </Container>
  </Page>)
}

export const Lab = withRouter(LabComponent);