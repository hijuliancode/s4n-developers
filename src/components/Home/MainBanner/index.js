import React from 'react'
import styled from 'styled-components'

import character01 from '../../../images/design/misc/character-01.svg'
import character02 from '../../../images/design/misc/character-02.svg'
import character03 from '../../../images/design/misc/character-03.svg'

const MainBannerElm = styled.div`
  align-items: center;
  background-image: url('https://images.unsplash.com/photo-1493037875696-1f2eb8d732ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'); /* Oliver Cole, Unsplash */
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 100%;
  justify-content: center;
`
const Characters = styled.div`
  column-gap: calc(${props => props.theme.baseSize} * 4px);
  display: flex;
  justify-content: center;
  width: 100%;
  
  /* Check Design */
  display: none;
`
const Character = styled.img`
  &:not(:last-child) {
    margin-right: calc(${props => props.theme.baseSize} * 4px);
  }
`

const MainBannerComponent = () => (
  <MainBannerElm>
    <Characters>
      <Character src={character01} alt="Illustration Developer" />
      <Character src={character02} alt="Illustration Developer" />
      <Character src={character03} alt="Illustration Developer" />
    </Characters>
  </MainBannerElm>
)
 
export default MainBannerComponent;