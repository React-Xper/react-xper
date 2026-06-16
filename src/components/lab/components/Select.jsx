import React from "react";
import SelectComponent from "@techlestial/uilerial/dist/select";

export function Select() {
  return (
    <div>
      <div>What do you think about this?</div>
      <SelectComponent title="Select Idea 🤔" style={{ width: "300px" }}>
        <option value="">{"None ❌"}</option>
        <option value="1">{"Uilerial is good🤗"}</option>
        <option value="2">{"Uilerial is great😎"}</option>
        <option value="3">{"Uilerial is love😘"}</option>
      </SelectComponent>
    </div>
  );
}
