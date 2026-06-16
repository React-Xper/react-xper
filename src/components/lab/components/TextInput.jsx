import React from "react";
import TextInputComponent from "@techlestial/uilerial/dist/text-input";

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
