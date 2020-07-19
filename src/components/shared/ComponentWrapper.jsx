import React from "react";
import { columnStyle, cardStyle } from "../../assets/theme/customStyle";
import { useContext } from "react";
import { ResponsiveContext, ThemeContext } from "grommet";
import { useTheme } from "styled-components";

export const ComponentWrapper = ({ children, name }) => {
  const size = useContext(ResponsiveContext);
  const dark = useTheme(ThemeContext).dark;

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
        style={{
          ...cardStyle(dark),
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
