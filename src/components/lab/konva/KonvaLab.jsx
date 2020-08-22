import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { Box, ResponsiveContext, ThemeContext } from "grommet";
import { konvaLabs } from "constants/konvaArticles";
import Card from "@bit/m3yevn.reacthesis-ui.card";
import { useContext } from "react";
import { useTheme } from "styled-components";
import { cardStyle, gridStyle, columnStyle } from "assets/theme/customStyle";
import TwoCircle from "./TwoCircle";

function KonvaLab() {
  const size = useContext(ResponsiveContext);
  const dark = useTheme(ThemeContext).dark;

  return (
    <Box style={gridStyle(dark)}>
      {konvaLabs.map((value, index) => {
        return (
          <NavLink
            key={index}
            style={columnStyle(size)}
            to={`/concepts-lab/konva${value.link}`}
          >
            <Card style={cardStyle(dark)}>
              <img
                width={200}
                alt="konva-experiments"
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

function KonvaLabComponent({ match: { url } }) {
  return (
    <Switch>
      <Route exact path={`${url}/two-circles`} component={TwoCircle} />
      <Route exact path={`${url}`} component={KonvaLab} />
    </Switch>
  );
}

export default KonvaLabComponent;
