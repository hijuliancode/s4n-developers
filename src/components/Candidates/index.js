import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import {
  UserAddOutlined
} from '@ant-design/icons'

// Components
import HeroComponent from './Hero'
import ListComponent from './List'


const CandidatesElm = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.baseSize * 4}px ${props => props.theme.baseSize * 4}px;
  width: 100%;
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
const TopBar = styled.div`
  margin-bottom: calc(${props => props.theme.baseSize} * 4px);
  text-align: right;
`
const IconNewCandidate = styled(UserAddOutlined)`
  margin-right: calc(${props => props.theme.baseSize} * 2px);
`

const CandidatesComponent = ({candidates}) => (
  <CandidatesElm>
    <TopBar>
      <Link to="/">
        <IconNewCandidate />
        New candidate
      </Link>
    </TopBar>
    <HeroComponent candidates={candidates} />
    <ListComponent candidates={candidates} />
  </CandidatesElm>
)
 
export default CandidatesComponent;