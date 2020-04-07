import styled from "styled-components";

export const Title = styled.div`
font-size: ${props => (props.size !== 'sm' && props.size !== 'xs') ? '60px': '40px'};
`;