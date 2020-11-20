import React from 'react'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import Keyboard from '../Keyboard'
import { Container, Wrapper, Title } from './App.styles'

function App() {
    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer
                left={<div >
                    
                    <Keyboard />
                </div>}

                right={<div >
                    <Title>Instruções</Title>
                </div>
                }
            />
        </Container>
    </Wrapper>
}

export default App;