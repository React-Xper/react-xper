import React from "react";
import { Box, ThemeContext } from "grommet";
import { useTheme } from "styled-components";
import { gridStyle } from "../../assets/theme/customStyle";
import { ComponentWrapper } from "../shared/ComponentWrapper";
import { Card } from "../lab/components/Card";
import { TextInput } from "components/lab/components/TextInput";
import { Select } from "components/lab/components/Select";
import { Button } from "components/lab/components/Button";
import { Translator } from "components/lab/components/Translator";
import DatePicker from "components/lab/components/DatePicker";
import Toast from "components/lab/components/Toast";

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
      <ComponentWrapper name="Button" link="/button">
        <Button />
      </ComponentWrapper>
      <ComponentWrapper name="Translator" link="/translator">
        <Translator />
      </ComponentWrapper>
      <ComponentWrapper name="DatePicker" link="/date-picker">
        <DatePicker />
      </ComponentWrapper>
      <ComponentWrapper name="Toast" link="/toast">
        <Toast />
      </ComponentWrapper>
    </Box>
  );
}

export default ComponentsMainComponent;
