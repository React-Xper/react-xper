import styled from 'styled-components';

export const H1 = styled.div`
font-size: ${props => (props.size !== 'sm' && props.size !== 'xs') ? '120px' : '60px'};
span {
  color: ${props => props.theme.primary};
  b {
    color: ${props => props.theme.secondary};
  }
}
`;