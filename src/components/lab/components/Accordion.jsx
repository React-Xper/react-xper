import { Paragraph } from "grommet";
import React from "react";
import AccordionComponent from "react-xper-ui/dist/accordion";

export function Accordion() {
  return (
    <AccordionComponent title="React Xper Accordion">
      <Paragraph responsive={true}>
        React Xper is a react-based website designed to experiment on different
        React concepts and interesting React components.
      </Paragraph>
    </AccordionComponent>
  );
}
