import React from "react";
import TextInputComponent from "react-xper-ui/dist/TextInput";

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
