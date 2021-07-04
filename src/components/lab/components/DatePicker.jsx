import React from "react";
import DatePicker from "react-xper-ui/dist/DatePicker";

export default () => {
  const [dateValue, setDateValue] = React.useState();

  const handleDataChange = (e) => {
    setDateValue(e?.target?.value);
  };

  return <DatePicker native value={dateValue} onChange={handleDataChange} />;
};
