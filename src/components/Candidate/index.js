import React from 'react'
import styled from 'styled-components'
import DetailComponent from './Detail'
import RepositoriesComponent from './Repositories'

const CandidateElm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (${props => props.theme.mq.md}) {
    display: grid;
    grid-template-areas: 
      'area_detail area_repositories'
    ;
    grid-template-columns: 30% 70%;
    width: 100%;
  }
`

const AreaDetail = styled.div`
  background-color: red;
  grid-area: area_detail;
`
const AreaRepositories = styled.div`
  background-color: blue;
  grid-area: area_repositories;
`

const CandidateComponent = ({candidate = {}}) => (
  <CandidateElm>
    <AreaDetail>
      <DetailComponent/>
    </AreaDetail>
    <AreaRepositories>
      <RepositoriesComponent />
    </AreaRepositories>
  </CandidateElm>
)
 
export default CandidateComponent;