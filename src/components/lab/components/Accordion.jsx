import { Paragraph } from "grommet";
import React from "react";
import AccordionComponent from "react-xper-ui/dist/accordion";

export function Accordion() {
  return (
    <AccordionComponent title="Uilerial Studio">
      <Paragraph responsive={true}>
        Uilerial Studio showcases production-ready React patterns and the
        Uilerial component library.
      </Paragraph>
    </AccordionComponent>
  );
}
