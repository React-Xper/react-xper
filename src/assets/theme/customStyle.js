export const cardStyle = (dark) => {
  return {
    background: dark ? "#333" : "whitesmoke",
    padding: 10,
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };
};

export const columnStyle = (size) => {
  return {
    margin: 10,
    boxSizing: "border-box",
    gridColumn:
      size === "small" ? "span 12" : size === "medium" ? "span 6" : "span 4",
  };
};

export const gridStyle = (dark) => {
  return {
    background: dark ? "black" : "white",
    paddingRight: 20,
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: 20,
  };
};
