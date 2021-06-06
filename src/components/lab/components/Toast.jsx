import React from "react";
import { Box } from "grommet";
import { Button } from "components/styles/Button";
import toast, { ToastContainer } from "@bit/m3yevn.react-xper-ui.toast";

const buttons = [
  { label: "Show Info Toast!", color: "primary", onClick: "info" },
  { label: "Show Success Toast!", color: "success", onClick: "success" },
  { label: "Show Error Toast!", color: "danger", onClick: "error" },
  { label: "Show Warn Toast!", color: "warning", onClick: "warn" },
];

export default () => {
  return (
    <Box>
      <ToastContainer />
      {buttons.map((button) => (
        <Button
          color={button.color}
          onClick={() =>
            toast[button.onClick]("🎉 Yayy!! Toast is displayed..")
          }>
          {button.label}
        </Button>
      ))}
    </Box>
  );
};
