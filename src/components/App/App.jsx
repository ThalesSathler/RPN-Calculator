import React from 'react'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import { Container, Wrapper } from './App.styles'

function App() {
    return <Wrapper>
        <Container>
            <AppHeader/>
            <AppContainer 
                left={<div >
                    campo + output
                </div>}
                right={<div >
                    input teclado
                </div>                    
                }
            />
        </Container>
    </Wrapper>
}

export default App;