import styled from 'styled-components';

export const Wrapper = styled.main`
    height:auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    padding: 24px;
`;

export const Title = styled.h2`
    color: #004d61;
    font-size: 18px;
    font-weight: 400;
    text-transform: lowercase;
    height: 32px;
`