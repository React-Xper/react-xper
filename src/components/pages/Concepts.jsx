import React from "react";
import { NavLink, Route } from "react-router-dom";
import { Box } from "grommet";
import { concepts } from "../../constants/conceptsArticles";

const Effects = React.lazy(() => import("../lab/concepts/Effects"));
const Memoization = React.lazy(() => import("../lab/concepts/Memoization"));
const Localization = React.lazy(() => import("../lab/concepts/Localization"));
const Refs = React.lazy(() => import("../lab/concepts/Refs"));

function ConceptsMainComponent() {
  return (
    <Box height="100vh">
      <ul>
        {concepts.map((value, index) => {
          return (
            <li key={index}>
              <NavLink to={`/concepts-lab${value.link}`}>
                <h1>{value.title}</h1>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </Box>
  );
}

function ConceptsComponent({ match: { url } }) {
  return (
    <>
      <Route exact path={`${url}/effects`} component={Effects} />
      <Route exact path={`${url}/memoization`} component={Memoization} />
      <Route exact path={`${url}/localization`} component={Localization} />
      <Route exact path={`${url}/refs`} component={Refs} />
      <Route exact path={`${url}`} component={ConceptsMainComponent} />
    </>
  );
}

export default ConceptsComponent;
