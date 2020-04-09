import React from 'react';
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
  const handleCardClick = (link) => {
    history.push(link);
  }

  return (<div></div>)
}

export const Lab = withRouter(LabComponent);