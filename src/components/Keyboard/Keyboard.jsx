import React, { useState } from "react";
import { Wrapper, Button, Teclas, Input, Space } from "./Keyboard.styles";

function Keyboard() {
  const [result, setResult] = useState("");

  function backspace() {
    if (result.length > 0) setResult(result.slice(0, result.length - 1));
  }

  function handleClick(value) {
    if (result.length < 10) {
      setResult(result + value.target.name);
      console.log(result.length);
    } else {
      setResult(result);
    }
  }

  function reset() {
    setResult("");
  }

  return (
    <Wrapper>
      <span>Entre com a expressão</span>
      <Input
        value={result}
        onChange={() => setResult()}
        maxLength={10}
        disabled={true}
      ></Input>

      <span>Resultado RPN pré-fixa</span>
      <Input placeholder={"resultado pré-fixa"} disabled={true}></Input>

      <span>Resultado RPN pós-fixa</span>
      <Input placeholder={"resultado pós-fixa"} disabled={true}></Input>
      <Teclas>
        <Button name="P" onClick={handleClick}>
          P
        </Button>
        <Button name="Q" onClick={handleClick}>
          Q
        </Button>
        <Button name="R" onClick={handleClick}>
          R
        </Button>
        <Button name="S" onClick={handleClick}>
          S
        </Button>
        <Button name="(" onClick={handleClick}>
          (
        </Button>
        <Button name=")" onClick={handleClick}>
          )
        </Button>
        <Button name="¬" onClick={handleClick}>
          ¬
        </Button>
        <Button name="ʌ" onClick={handleClick}>
          ʌ
        </Button>
        <Button name="v" onClick={handleClick}>
          v
        </Button>
        <Button name="→" onClick={handleClick}>
          →
        </Button>
        <Button name="↔" onClick={handleClick}>
          ↔
        </Button>
        <Button name="=" onClick={handleClick}>
          =
        </Button>
        <Space></Space>
        <Space></Space>
        <Button
          name="C"
          onClick={backspace}
          style={{
            backgroundColor: "#119999",
            color: "#FFF",
            borderColor: "#11999990",
          }}
        >
          Apagar
        </Button>
        <Button
          name="clear"
          onClick={reset}
          style={{
            backgroundColor: "#FF2222",
            color: "#FFF",
            borderColor: "#11999990",
          }}
        >
          Limpar
        </Button>
      </Teclas>
    </Wrapper>
  );
}

export default Keyboard;
