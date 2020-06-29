import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import {
  ArrowLeftOutlined
} from '@ant-design/icons'

// Components
import DetailComponent from './Detail'
import RepositoriesComponent from './Repositories'


const CandidateElm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (${props => props.theme.mq.md}) {
    display: grid;
    grid-template-areas: 
      'area_topbar area_topbar'
      'area_detail area_repositories'
    ;
    grid-template-columns: 30% 70%;
    grid-template-rows: auto 1fr;
    width: 100%;
  }
`
const Area = styled.div`
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
const AreaDetail = styled(Area)`
  grid-area: area_detail;
`
const AreaRepositories = styled(Area)`
  background-color: blue;
  grid-area: area_repositories;
`
const TopBar = styled.div`
  align-items: center;
  display: flex;
  grid-area: area_topbar;
  margin-bottom: calc(${props => props.theme.baseSize} * 4px);
  padding: 0 calc(${props => props.theme.baseSize} * 4px);
  text-align: right;
  @media screen and (${props => props.theme.mq.md}) {
    height: 100%;
  }
`
const IconNewCandidate = styled(ArrowLeftOutlined)`
  margin-right: calc(${props => props.theme.baseSize} * 2px);
`

const CandidateComponent = ({candidate = {}}) => (
  <CandidateElm>
    <TopBar>
      <Link to="/candidates">
        <IconNewCandidate />
        Back
      </Link>
    </TopBar>
    <AreaDetail>
      <DetailComponent/>
    </AreaDetail>
    <AreaRepositories>
      <RepositoriesComponent />
    </AreaRepositories>
  </CandidateElm>
)
 
export default CandidateComponent;