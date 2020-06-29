import React from 'react'
import styled from 'styled-components'

import character01 from '../../../images/design/misc/character-01.svg'
import character02 from '../../../images/design/misc/character-02.svg'
import character03 from '../../../images/design/misc/character-03.svg'

const HeroElm = styled.div`
  align-self: flex-start;
  display: flex;
  margin-bottom: calc(${props => props.theme.baseSize} * 4px);
  width: 100%;
`
const Characters = styled.div`
  column-gap: calc(${props => props.theme.baseSize} * 4px);
  display: flex;
  justify-content: center;
  width: 100%;
`
const Character = styled.img`
  &:not(:last-child) {
    margin-right: calc(${props => props.theme.baseSize} * 4px);
  }
`

const HeroComponent = () => (
  <HeroElm>
    <Characters>
      <Character src={character01} alt="Illustration Developer" />
      <Character src={character02} alt="Illustration Developer" />
      <Character src={character03} alt="Illustration Developer" />
    </Characters>
  </HeroElm>
)
 
export default HeroComponent;