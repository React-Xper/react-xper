import React from "react";
import DatePicker from "@bit/m3yevn.reacthesis-ui.date-picker";

export default () => {
  const [dateValue, setDateValue] = React.useState();

  const handleDataChange = (e) => {
    setDateValue(e?.target?.value);
  };

  return <DatePicker native value={dateValue} onChange={handleDataChange} />;
};
