import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { Box } from 'grommet';

const articles = [
  {
    title: 'Effects',
    link: '/effects'
  },
  {
    title: 'Memoization',
    link: '/memoization'
  },
  {
    title: 'Localization',
    link: '/localization'
  }
];

function LabComponent() {

  return (<Box height="100vh">
    <ul>
      {
        articles.map((value, index) => {
          return (
            <li key={index}>
              <NavLink to={`/lab${value.link}`}><h1>{value.title}</h1></NavLink>
            </li>
          )
        })
      }
    </ul>
  </Box>)
}

export const Lab = withRouter(LabComponent);