import styled from 'styled-components';

export const Wrapper = styled.div`
    display:grid;
    width: 100%;
    height: auto;

    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    border-radius: 5px;

    padding: 10px;

    background-color:#004D61;
`;

export const Button = styled.button`
    width:100%;
    height: 50px;
    background-color:#FFF;
    border-radius:5px;
    margin: 5;
    padding-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    border: 0.5px solid #004D6F;
    font-size:18px;
    
`;