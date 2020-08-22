import React from "react";
import { columnStyle, cardStyle } from "../../assets/theme/customStyle";
import { useContext } from "react";
import { ResponsiveContext, ThemeContext } from "grommet";
import { useTheme } from "styled-components";

export const ComponentWrapper = ({ children, name, link }) => {
  const baseUrl = "https://bit.dev/m3yevn/reacthesis-ui";
  const size = useContext(ResponsiveContext);
  const dark = useTheme(ThemeContext).dark;

  const handleClick = () => {
    window.open(baseUrl + link, "__blank");
  };

  return (
    <div style={{ ...columnStyle(size) }}>
      <div
        style={{
          ...cardStyle(dark),
          height: 200,
          width: "100%",
          borderRadius: 0,
        }}
      >
        {children}
      </div>
      <div
        onClick={handleClick}
        style={{
          ...cardStyle(dark),
          textDecoration: "underline",
          background: "grey",
          width: "100%",
          borderRadius: 0,
          color: "var(--brand)",
        }}
      >
        {name}
      </div>
    </div>
  );
};
