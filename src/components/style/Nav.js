import styled from 'styled-components';

export const Nav = styled.nav`
background: transparent;
position: absolute;
display: flex;
width: 100vw;
justify-content: flex-end;
a {
color: ${props => props.theme.primary};
padding: 5px 20px;
font-size: 30px;
text-decoration: none;
&:hover{
  color: violet;
}
+.selected {
  color: violet;
}
}
`;