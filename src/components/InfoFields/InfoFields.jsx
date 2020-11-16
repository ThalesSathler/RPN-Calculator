import React from 'react';
import { Wrapper, Input } from './InfoField.styles';

function InfoField () {
    return <Wrapper>
        <span>Entre com a expressão:</span>
        <Input maxLength={10} type="text" ></Input>

        <span>Resultado pré-fixa:</span>
        <Input maxLength={10} type="text" disabled ></Input>

        <span>Resultado pós-fixa:</span>
        <Input maxLength={10} type="text" disabled ></Input>
    </Wrapper>
}

export default InfoField;