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
  padding: 0 ${props => props.theme.baseSize * 2}px ${props => props.theme.baseSize * 2}px;
  width: 100%;
  @media screen and (${props => props.theme.mq.sm}) {
    padding: 0 ${props => props.theme.baseSize * 3}px ${props => props.theme.baseSize * 3}px;
  }
  @media screen and (${props => props.theme.mq.md}) {
    padding: 0 ${props => props.theme.baseSize * 4}px ${props => props.theme.baseSize * 4}px;
  }
  @media screen and (${props => props.theme.mq.lg}) {
    display: grid;
    grid-template-areas: 
      'area_topbar area_topbar'
      'area_detail area_repositories'
    ;
    grid-template-columns: 35% 65%;
    grid-template-rows: auto 1fr;
    width: 100%;
  }
`
const AreaDetail = styled.div`
  grid-area: area_detail;
  @media screen and (${props => props.theme.mq.lg}) {
    padding-right: 0;
  }
`
const AreaRepositories = styled.div`
  grid-area: area_repositories;
  @media screen and (${props => props.theme.mq.lg}) {
    padding-left: 0;
  }
`
const TopBar = styled.div`
  align-items: center;
  display: flex;
  grid-area: area_topbar;
  height: 40px;
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

const CandidateComponent = ({candidate}) => (
  <CandidateElm>
    <TopBar>
      <Link to="/candidates">
        <IconNewCandidate />
        Back
      </Link>
    </TopBar>
    <AreaDetail>
      <DetailComponent candidate={candidate} />
    </AreaDetail>
    <AreaRepositories>
      <RepositoriesComponent candidate={candidate} />
    </AreaRepositories>
  </CandidateElm>
)
 
export default CandidateComponent;