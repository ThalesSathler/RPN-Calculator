import styled from "styled-components";

export const Wrapper = styled.div`
  color: #fff;

  border-radius: 5px;

  padding: 10px;

  background-color: #00acae;
`;

export const Teclas = styled.div`
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  display: grid;
  width: 100%;
  height: auto;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 5px;
  margin: 5;
  padding-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  border: 0.5px solid #004d6f90;
  font-size: 18px;
`;

export const Espaco = styled.div`
  width: 100%;
  height: 50px;
  margin: 5;
  padding-top: 10px;
  margin-bottom: 10px;
  background-color:"transparent";
`;

export const Input = styled.input`
  width: 100%;
  height: 25px;
  font-size: 18px;
  padding: 10px;
  border: 0.5px solid #00acae;

  height: 50px;
  background-color: #fff;
  border-radius: 5px;
  margin: 5;
  margin-top: 10px;
  margin-bottom: 15px;
`;
