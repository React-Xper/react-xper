import React from "react";
import { Box, ThemeContext } from "grommet";
import { useTheme } from "styled-components";
import { gridStyle } from "../../assets/theme/customStyle";
import { ComponentWrapper } from "../shared/ComponentWrapper";
import { Card } from "../lab/components/Card";
import { TextInput } from "components/lab/components/TextInput";
import { Select } from "components/lab/components/Select";

function ComponentsMainComponent() {
  const dark = useTheme(ThemeContext).dark;

  return (
    <Box style={{ ...gridStyle(dark), minHeight: "100vh" }}>
      <ComponentWrapper name="Card" link="/card">
        <Card />
      </ComponentWrapper>
      <ComponentWrapper name="TextInput" link="/text-input">
        <TextInput />
      </ComponentWrapper>
      <ComponentWrapper name="Select" link="/select">
        <Select />
      </ComponentWrapper>
    </Box>
  );
}

export default ComponentsMainComponent;
