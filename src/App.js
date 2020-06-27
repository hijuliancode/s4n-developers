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
const Container = styled.main`
  ${props => props.theme.isRadious.x3}
  background-color: ${props => props.theme.whiteColor};
  box-shadow: 0 10px 10px hsl(206.3, 17%, 81.6%); /* TODO: add variable to this color box-shadow */
  display: flex;
  flex-flow: column;
  min-height: 95vh;
  padding: ${props => props.theme.baseSize * 4}px ${props => props.theme.baseSize * 4}px;
  width: 95vw;
  @media screen and (${props => props.theme.mq.sm}) {
    ${props => props.theme.isRadious.x4}
    min-height: calc(100% - ${props => props.theme.baseSize * 6}px);
    padding: ${props => props.theme.baseSize * 6}px ${props => props.theme.baseSize * 6}px;
    width: 90vw;
  }
  @media screen and (${props => props.theme.mq.md}) {
    ${props => props.theme.isRadious.x6}
    padding: ${props => props.theme.baseSize * 8}px ${props => props.theme.baseSize * 8}px;
    width: 80vw;
  }
  @media screen and (${props => props.theme.mq.lg}) {
    ${props => props.theme.isRadious.x7}
    padding: ${props => props.theme.baseSize * 10}px ${props => props.theme.baseSize * 10}px;
  }
`
const Heading = styled.h1`
  font-size: 1rem;
`
const App = () => (
  <Wrapper>
    <Brand src={gradiIsotipo} />
    <Alerts/>
    <Container>
      <Heading>S4N Developers</Heading>
    </Container>
  </Wrapper>
)

export default App