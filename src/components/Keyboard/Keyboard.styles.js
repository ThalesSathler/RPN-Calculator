import styled from "styled-components";

export const Wrapper = styled.div`
  color: #fff;
  border-radius: 5px;
  padding: 10px;
  background-color: #00acae;
`;

export const Teclas = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;

  font-size: 18px;
  background-color: #fff;
  border-radius: 5px;
  border: 0.5px solid #004d6f90;

  margin: 5;
  padding-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const Space = styled.div`
  width: 100%;
  height: 50px;

  background-color:"transparent";
  margin: 5;
  padding-top: 10px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 18px;
  background-color: #fff;

  border: 0.5px solid #00acae;
  border-radius: 5px;

  padding: 10px;
  margin-top: 10px;
  margin-bottom: 15px;
`;
