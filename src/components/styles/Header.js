import styled from "styled-components";
import { Header as gHeader } from "grommet";

export const Header = styled(gHeader)`
  a {
    text-decoration: none;
    font-size: 30px;
    color: var(--brand);
    padding-right: 20px;
    font-weight: normal;
    &:hover {
      text-decoration: none;
    }
    &.selected {
      text-decoration: underline;
    }
  }
`;
