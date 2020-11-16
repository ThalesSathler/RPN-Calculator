import React from 'react'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import Keyboard from '../Keyboard'
import { Container, Wrapper } from './App.styles'
import InfoField from '../InfoFields'
import { Input } from '../InfoFields/InfoField.styles'

function App() {
    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer
                left={<div >
                    <InfoField/>
                        
                </div>}
                right={<div >
                    <br/>
                    <Keyboard />
                </div>
                }
            />
        </Container>
    </Wrapper>
}

export default App;