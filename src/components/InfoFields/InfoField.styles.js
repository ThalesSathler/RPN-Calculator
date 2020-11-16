import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display:grid;

    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 10px;

    border-radius: 5px;

    padding: 10px;

    background-color:#FFF;
`;

export const Input = styled.input`
width:80%;
height:25px;
font-size:18px;
padding: 10px;
border: 0.5px solid #00ACAE;

height: 50px;
background-color:#FFF;
border-radius:5px;
margin: 5;
margin-top: 10px;
margin-bottom: 15px;    
`;