import React from 'react';
import { Wrapper } from './AppContainer.styles'

function AppContainer({ left, right }) {
    return <Wrapper>
        <div>{left}</div>
        <div>{right}</div>
    </Wrapper>
}

export default AppContainer;