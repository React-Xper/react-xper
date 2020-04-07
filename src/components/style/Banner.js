import styled from 'styled-components';

export const Banner = styled.div`
min-width: 100vw;
min-height: ${props => props.thin ? '40vh': '90vh'};
display: flex;
justify-content: center;
align-items: center;
text-align: center;
color: ${props => props.theme.text};

>*>p {
  color: gray;
  a {
    color: violet;
  }
}
`;