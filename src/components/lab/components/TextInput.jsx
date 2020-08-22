import React from "react";
import TextInputComponent from "@bit/m3yevn.reacthesis-ui.text-input";

export function TextInput() {
  return (
    <TextInputComponent
      label="Enter your phone"
      prefix="+65"
      numberOnly
      value="97330256"
      maxLength={10}
      required
    />
  );
}
