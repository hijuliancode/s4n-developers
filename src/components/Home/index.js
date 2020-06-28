import React from 'react'
import styled from 'styled-components';
import MainBannerComponent from './MainBanner';
import FormRegisterComponent from './FormRegister';

const HomeElm = styled.div``

const HomeComponent = () => (
  <HomeElm>
    <MainBannerComponent />
    <FormRegisterComponent />
  </HomeElm>
)
 
export default HomeComponent;