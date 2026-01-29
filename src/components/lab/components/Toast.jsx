import React from "react";
import { Box } from "grommet";
import { Button } from "components/styles/Button";
import toastEvent from "react-xper-ui/dist/toast/ToastEvent";
import { ToastContainer } from "react-xper-ui/dist/toast";

const toast = (message) => {
  toastEvent.emit("normal", message);
};

toast.error = (message) => {
  toastEvent.emit("error", message);
};

toast.success = (message) => {
  toastEvent.emit("success", message);
};

toast.warn = (message) => {
  toastEvent.emit("warn", message);
};

toast.info = (message) => {
  toastEvent.emit("info", message);
};

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
