import styled from 'styled-components';

export const Button = styled.button`
background-color:transparent;
padding: 10px;
color: ${props => props.theme.primary};
border-radius: 8px;
border: 5px solid ${props => props.theme.primary};
font-size: 24px;
cursor: pointer;
transition: 0.3s;

&:hover {
  background-color: ${props => props.theme.primary};
  color: white;
}

a {
  text-decoration: none;
  color: inherit;
}
`;