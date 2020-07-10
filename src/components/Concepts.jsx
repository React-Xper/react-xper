import React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "grommet";
import { concepts } from "../constants/conceptsArticles";

function ConceptsComponent() {
  return (
    <Box height="100vh">
      <ul>
        {concepts.map((value, index) => {
          return (
            <li key={index}>
              <NavLink to={`/lab${value.link}`}>
                <h1>{value.title}</h1>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </Box>
  );
}

export default ConceptsComponent;
