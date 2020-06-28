import React from 'react'
import styled from 'styled-components'

const Alerts = styled.div`
  display: none;
`
const Wrapper = styled.div`
  align-items: flex-start;
  background-image: linear-gradient(to right, #C67DF3 0%, #384BD4 100%);
  display: flex;
  height: 100vh;
  justify-content: center;
  padding-top: ${props => props.theme.baseSize * 6}px;
  position: relative;
  width: 100vw;
`
const App = () => (
  <Wrapper>
    <Alerts/>
  </Wrapper>
)

export default App