import React from 'react'
import styled from 'styled-components'

// Components
import MainBannerComponent from './MainBanner'
import FormRegisterComponent from './FormRegister'

const HomeElm = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (${props => props.theme.mq.md}) {
    display: grid;
    grid-template-areas: 
      'area_banner area_form'
    ;
    grid-template-columns: 30% 70%;
    width: 100%;
  }
`
const AreaBanner = styled.div`
  grid-area: area_banner;
`
const AreaForm = styled.div`
  grid-area: area_form;
  padding: ${props => props.theme.baseSize * 4}px ${props => props.theme.baseSize * 4}px;
  @media screen and (${props => props.theme.mq.sm}) {
    padding: ${props => props.theme.baseSize * 6}px ${props => props.theme.baseSize * 6}px;
  }
  @media screen and (${props => props.theme.mq.md}) {
    padding: ${props => props.theme.baseSize * 8}px ${props => props.theme.baseSize * 8}px;
  }
  @media screen and (${props => props.theme.mq.lg}) {
    padding: ${props => props.theme.baseSize * 10}px ${props => props.theme.baseSize * 10}px;
  }
`

const HomeComponent = ({getRepositories}) => (
  <HomeElm>
    <AreaBanner>
      <MainBannerComponent />
    </AreaBanner>
    <AreaForm>
      <FormRegisterComponent getRepositories={getRepositories} />
    </AreaForm>
  </HomeElm>
)
 
export default HomeComponent;