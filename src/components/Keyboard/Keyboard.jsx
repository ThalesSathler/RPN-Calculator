import React, { useState } from 'react';
import { Wrapper, Button } from './Keyboard.styles';

function Keyboard({value}) {

    const [result, setResult] = useState("");

    function handleClick(e) {
        setResult(result.concat(e.target.name));
    }

    function backspace(){
        setResult(result.slice(0, result.length-1));
    }

    return <Wrapper value={value+{result}}>
        <Button name="(" onClick={handleClick}>(</Button>
        <Button name=")" onClick={handleClick}>)</Button>
        <Button name="¬" onClick={handleClick}>¬</Button>
        <Button name="ʌ" onClick={handleClick}>ʌ</Button>
        <Button name="v" onClick={handleClick}>v</Button>
        <Button name="→" onClick={handleClick}>→</Button>
        <Button name="↔" onClick={handleClick}>↔</Button>
        <Button name="backspace" onClick={backspace}>C</Button>
        <Button name="clear" onClick={handleClick}>Clear</Button>

        
        
    </Wrapper>
}

export default Keyboard;