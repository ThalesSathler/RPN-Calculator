import React from 'react'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import Keyboard from '../Keyboard'
import { Container, Wrapper } from './App.styles'

function App() {
    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer
                left={<div >
                    
                    <Keyboard />
                </div>}

                right={<div >
                    <span>
                        Instruções
                    </span>
                </div>
                }
            />
        </Container>
    </Wrapper>
}

export default App;