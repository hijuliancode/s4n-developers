import React from 'react'
import gradiIsotipo from './images/design/misc/logo-s4n.svg'
import styled from 'styled-components'

const Alerts = styled.div`
  display: none;
`
const Wraper = styled.div`
  height: 100%;
  position: relative;
`
const Brand = styled.img`
  object-fit: content;
  position: absolute;
  right: 40px;
  top: 22px;
  width: 64px;
`
const App = () => (
  <Wraper>
    <Brand src={gradiIsotipo} />
    <Alerts/>
  </Wraper>
)

export default App