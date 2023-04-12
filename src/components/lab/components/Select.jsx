import React from "react";
import SelectComponent from "react-xper-ui/dist/select";

export function Select() {
  return (
    <div>
      <div>What do you think about this?</div>
      <SelectComponent title="Select Idea 🤔" style={{ width: "300px" }}>
        <option value="">{"None ❌"}</option>
        <option value="1">{"React Xper-UI is good🤗"}</option>
        <option value="2">{"React Xper-UI is great😎"}</option>
        <option value="3">{"React Xper-UI is love😘"}</option>
      </SelectComponent>
    </div>
  );
}
