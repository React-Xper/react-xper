import React from "react";
import { Box, ThemeContext } from "grommet";
import { useTheme } from "styled-components";
import { gridStyle } from "../../assets/theme/customStyle";
import { ComponentWrapper } from "../shared/ComponentWrapper";
import { Card } from "../lab/components/Card";
import { TextInput } from "components/lab/components/TextInput";
import { Select } from "components/lab/components/Select";
import { Accordion } from "components/lab/components/Accordion";
import { Button } from "components/lab/components/Button";
import { Translator } from "components/lab/components/Translator";
import DatePicker from "components/lab/components/DatePicker";
import Toast from "components/lab/components/Toast";
import { Carousel } from "components/lab/components/Carousel";

function ComponentsMainComponent() {
  const dark = useTheme(ThemeContext).dark;

  return (
    <Box style={{ ...gridStyle(dark), minHeight: "100vh" }}>
      <ComponentWrapper name="Accordion" link="/accordion">
        <Accordion />
      </ComponentWrapper>
      <ComponentWrapper name="Button" link="/button">
        <Button />
      </ComponentWrapper>
      <ComponentWrapper name="Card" link="/card">
        <Card />
      </ComponentWrapper>
      <ComponentWrapper name="Carousel" link="/carousel">
        <Carousel />
      </ComponentWrapper>
      <ComponentWrapper name="DatePicker" link="/date-picker">
        <DatePicker />
      </ComponentWrapper>
      <ComponentWrapper name="Select" link="/select">
        <Select />
      </ComponentWrapper>
      <ComponentWrapper name="TextInput" link="/text-input">
        <TextInput />
      </ComponentWrapper>
      <ComponentWrapper name="Toast" link="/toast">
        <Toast />
      </ComponentWrapper>
      <ComponentWrapper name="Translator" link="/translator">
        <Translator />
      </ComponentWrapper>
    </Box>
  );
}

export default ComponentsMainComponent;
