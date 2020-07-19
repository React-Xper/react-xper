import React from "react";
import { NavLink, Route } from "react-router-dom";
import { Box, ResponsiveContext, ThemeContext } from "grommet";
import { concepts } from "constants/conceptsArticles";
import Card from "@bit/m3yevn.reacthesis-ui.card";
import { useContext } from "react";
import { useTheme } from "styled-components";
import {
  cardStyle,
  gridStyle,
  columnStyle,
} from "../../assets/theme/customStyle";

const Effects = React.lazy(() => import("../lab/concepts/Effects"));
const Memoization = React.lazy(() => import("../lab/concepts/Memoization"));
const Localization = React.lazy(() => import("../lab/concepts/Localization"));
const Refs = React.lazy(() => import("../lab/concepts/Refs"));

function ConceptsMainComponent() {
  const size = useContext(ResponsiveContext);
  const dark = useTheme(ThemeContext).dark;

  return (
    <Box style={gridStyle(dark)}>
      {concepts.map((value, index) => {
        return (
          <NavLink
            key={index}
            style={columnStyle(size)}
            to={`/concepts-lab${value.link}`}
          >
            <Card style={cardStyle(dark)}>
              <img
                width={200}
                alt="concept"
                src={require("assets/img/concept.svg")}
              />
              <div>
                <h1>{value.title}</h1>
              </div>
            </Card>
          </NavLink>
        );
      })}
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
