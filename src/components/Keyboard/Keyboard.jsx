import React, { useEffect, useRef, useState } from 'react';
import { Wrapper, Button, Teclas, Input } from './Keyboard.styles';

function Keyboard() {

    

    const [result, setResult] = useState("");

    function backspace(){
        if(result.length > 0)
        setResult(result.slice(0, result.length-1));
    }

      function handleClick(value) {
        if(result.length <= 10)
        setResult(result + value.target.name);
      }

      function reset() {
        setResult("");
      }

      function useKey(key, cb) {
          const callbackRef = useRef(cb);

          useEffect(() => {
            callbackRef.current = cb;
          });

          useEffect(() => {
            function handle(event) {
                if(event.code === key) {
                    callbackRef.current(event);
                }
            }
            document.addEventListener("keypress", handle);
            return () => document.removeEventListener("keypress", handle)
          }, [key]);
      }


      function handleA(){
          window.alert("A");
      }

      useKey("A", handleA);

    return <Wrapper >
        <span >Entre com a expressão</span>
        <Input value={result}></Input>

        <span>Resultado RPN pré-fixa</span>
        <Input value={"Pré-fixa"}></Input>

        <span>Resultado RPN pós-fixa</span>
        <Input value={"Pós-fixa"}></Input>
        <Teclas >  
        <Button name="(" onClick={handleClick}>(</Button>
        <Button name=")" onClick={handleClick}>)</Button>
        <Button name="¬" onClick={handleClick}>¬</Button>
        <Button name="ʌ" onClick={handleClick}>ʌ</Button>
        <Button name="v" onClick={handleClick}>v</Button>
        <Button name="→" onClick={handleClick}>→</Button>
        <Button name="↔" onClick={handleClick}>↔</Button>
        <Button name="C" onClick={backspace}>C</Button>
        <Button name="clear" onClick={reset}>Clear</Button> 
        </Teclas>
    </Wrapper>
}

export default Keyboard;