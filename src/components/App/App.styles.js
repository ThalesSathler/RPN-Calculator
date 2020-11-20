import styled from 'styled-components';
import bg from '../../assets/bg.svg'

export const Wrapper = styled.div`
    height: 100%;
    background-color:#F8F5EC;
    background-image: url(${bg});
    background-size: cover;
    background-position: center center;

    display: flex;
    justify-content:center;
    align-items:center;
`;

export const Container = styled.div`
    width: 734px;
    height: 100%;
    margin-top: 10px;
    margin-bottom: 10px;

    background-color: #FFFFFF;
    
    box-shadow: 0 3px 10px rgba(0,0,0,.15);
    border-radius: 20px;
`;

export const Title = styled.h2`
    color: #004d61;
    font-size: 18px;
    font-weight: 400;
    height: 32px;
`