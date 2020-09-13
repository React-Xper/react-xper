import React from "react";
import CardComponent from "@bit/m3yevn.reacthesis-ui.card";

const cardStyle = Object.freeze({
  maxHeight: "30px",
  width: "75%",
  background: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export function Card() {
  return <CardComponent style={cardStyle}>Welcome to Reacthesis</CardComponent>;
}
