
import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  `;