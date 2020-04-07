import styled from "styled-components";

export const Dialog = styled.dialog`
z-index: 1;
position: relative;
width: 100vw;
height:95vh;
margin:0px;
padding: 0px;
border: none;
background: ${props => props.theme.body};
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
a {
  padding:10px 0px;
  font-size: 50px;
  +.selected {
    color: violet;
  }
}
`;
