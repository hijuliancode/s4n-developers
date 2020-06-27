import React from 'react'
import gradiIsotipo from './images/design/misc/logo-s4n.svg'
import styled from 'styled-components'

const Alerts = styled.div`
  display: none;
`
const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  height: 100vh;
  justify-content: center;
  padding-top: ${props => props.theme.baseSize * 6}px;
  position: relative;
  width: 100vw;
`
const Brand = styled.img`
  object-fit: content;
  position: absolute;
  right: 40px;
  top: 22px;
  width: 64px;
`
const Heading = styled.h1`
  font-size: 1rem;
`
const App = () => (
  <Wrapper>
    <Brand src={gradiIsotipo} />
    <Alerts/>
  </Wrapper>
)

export default App