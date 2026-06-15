import { Paragraph } from "grommet";
import React from "react";
import AccordionComponent from "react-xper-ui/dist/accordion";

export function Accordion() {
  return (
    <AccordionComponent title="Meridian Studio">
      <Paragraph responsive={true}>
        Meridian Studio showcases production-ready React patterns and the
        Meridian UI component library.
      </Paragraph>
    </AccordionComponent>
  );
}
