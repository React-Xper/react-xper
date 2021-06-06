import React from "react";
import TextInputComponent from "@bit/m3yevn.react-xper-ui.text-input";

export function TextInput() {
  return (
    <TextInputComponent
      label="Enter your phone"
      prefix="+65"
      numberOnly
      value=""
      maxLength={10}
      required
    />
  );
}
