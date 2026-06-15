import { Paragraph } from "grommet";
import React from "react";
import AccordionComponent from "react-xper-ui/dist/accordion";

export function Accordion() {
  return (
    <AccordionComponent title="React Xper Studio">
      <Paragraph responsive={true}>
        React Xper Studio showcases production-ready React patterns and the
        react-xper-ui component library.
      </Paragraph>
    </AccordionComponent>
  );
}
