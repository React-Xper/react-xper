import React from "react";
import SelectComponent from "@bit/m3yevn.reacthesis-ui.select";

export function Select() {
  return (
    <div>
      <div>What do you think about this?</div>
      <SelectComponent title="Select Idea 🤔" style={{ width: "300px" }}>
        <option value="">None ❌</option>
        <option value="1">Reacthesis-UI is good🤗</option>
        <option value="2">Reacthesis-UI is great😎</option>
        <option value="3">Reacthesis-UI is love😘</option>
      </SelectComponent>
    </div>
  );
}
