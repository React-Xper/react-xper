import styled from 'styled-components';

export const H2 = styled.div`
font-size: ${props => (props.size !== 'sm' && props.size !== 'xs') ? '30px' : '20px'};
font-weight: ${props => (props.size !== 'sm' && props.size !== 'xs') ? 'normal' : 'bold'};
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;