import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { Box, ResponsiveContext, ThemeContext } from "grommet";
import { libraryLabs } from "constants/libraryArticles";
import Card from "react-xper-ui/dist/card";
import { useContext } from "react";
import { useTheme } from "styled-components";
import { cardStyle, gridStyle, columnStyle } from "assets/theme/customStyle";
import TwoCircle from "./TwoCircle";
import UndoRedo from "./UndoRedo";
import ColorReplace from "./ColorReplace";
import Behavior3 from "./Behavior3";

function LibraryLab() {
  const size = useContext(ResponsiveContext);
  const dark = useTheme(ThemeContext).dark;

  return (
    <Box style={gridStyle(dark)}>
      {libraryLabs.map((value, index) => {
        return (
          <NavLink
            key={index}
            style={columnStyle(size)}
            to={`/concepts-lab/libraries${value.link}`}>
            <Card style={cardStyle(dark)}>
              <img
                width={200}
                alt="library-experiments"
                src={require("assets/img/canvas.svg")}
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

function LibraryLabComponent({ match: { url } }) {
  return (
    <Switch>
      <Route exact path={`${url}/konva-two-circles`} component={TwoCircle} />
      <Route exact path={`${url}/konva-undo-redo`} component={UndoRedo} />
      <Route
        exact
        path={`${url}/konva-color-replace`}
        component={ColorReplace}
      />
      <Route exact path={`${url}/behavior-3`} component={Behavior3} />
      <Route exact path={`${url}`} component={LibraryLab} />
    </Switch>
  );
}

export default LibraryLabComponent;
