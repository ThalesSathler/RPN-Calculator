import styled from 'styled-components';

export const Wrapper = styled.div`
    
    color:#FFF;
    
    border-radius: 5px;

    padding: 10px;

    background-color:#00ACAE;
`;

export const Teclas = styled.div`
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    display:grid;
    width: 100%;
    height: auto;
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

export const Input = styled.input`
width:100%;
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