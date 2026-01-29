import React from "react";
import { Carousel as CarouselComponent } from "../../styles/Carousel";

const FlexDiv = ({ children }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      height: "inherit",
      alignItems: "center",
    }}
  >
    {children}
  </div>
);

export function Carousel() {
  return (
    <CarouselComponent
      slides={[
        <FlexDiv>Click Right Arrow</FlexDiv>,
        <FlexDiv>Click Left Arrow</FlexDiv>,
      ]}
    />
  );
}
