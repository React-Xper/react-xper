import React, { useContext } from "react";
import RtsCard from "@bit/m3yevn.reacthesis-ui.card";
import styled from "styled-components";
import { ThemeContext } from "grommet";

export const Card = (props) => {
  const theme = useContext(ThemeContext);

  const StyledCard = styled(RtsCard)`
    max-height: 30px;
    width: 75%;
    background: ${theme?.dark ? "#333" : "whitesmoke"};
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return <StyledCard {...props} />;
};
