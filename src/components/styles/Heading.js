import styled from "styled-components";
import { Heading as gHeading } from "grommet";

export const Heading = styled(gHeading)`
  span {
    color: var(--brand);
    animation: brand-to-ok 6s infinite;
  }
`;
