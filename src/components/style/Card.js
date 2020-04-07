import styled from "styled-components";

export const Card = styled.section`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 5px 10px 5px  ${props => (props.size !== 'sm' && props.size !== 'xs') ? '40px': '5px'};
  margin: 10px 0px;
  border-radius: 5px;
  width: ${props => (props.size !== 'sm' && props.size !== 'xs') ? '50%': '90%'};
  cursor: pointer;
  background: ${props => props.theme.gray};
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  h1 {
    font-size: 35px;
  }
  h2 {
    font-size: 20px;
    color: ${props => props.theme.secondary};
  }
`;