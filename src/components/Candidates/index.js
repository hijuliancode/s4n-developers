import React from 'react'
import styled from 'styled-components'

// Components
import HeroComponent from './Hero';
import ListComponent from './List';

const CandidatesElm = styled.div``

const CandidatesComponent = ({candidates}) => (
  <CandidatesElm>
    <HeroComponent candidates={candidates} />
    <ListComponent candidates={candidates} />
  </CandidatesElm>
)
 
export default CandidatesComponent;