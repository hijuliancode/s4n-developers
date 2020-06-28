import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import API_GITHUB from './services/github.service';
import { API_LS } from './services/localstorage.service';

import HomeComponent from './components/Home';
import CandidatesComponent from './components/Candidates';
import CandidateComponent from './components/Candidate';

// Styled Elements
const Alerts = styled.div`
  display: none;
`
const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  height: 100vh;
  padding-top: ${props => props.theme.baseSize * 6}px;
  position: relative;
  width: 100vw;
  @media screen and (max-height: 600px) {
    min-height: 100vh;
    padding-top: 0;
  }
`
const Container = styled.main`
  background-color: ${props => props.theme.whiteColor};
  box-shadow: 0 12px 24px -4px #263391; /* TODO: add variable to this color box-shadow */
  display: flex;
  min-height: calc(100% - ${props => props.theme.baseSize * 6}px);
  /* padding: ${props => props.theme.baseSize * 4}px ${props => props.theme.baseSize * 4}px; */
  width: 95vw;
  @media screen and (${props => props.theme.mq.sm}) {
    /* padding: ${props => props.theme.baseSize * 6}px ${props => props.theme.baseSize * 6}px; */
    width: 90vw;
  }
  @media screen and (${props => props.theme.mq.md}) {
    /* padding: ${props => props.theme.baseSize * 8}px ${props => props.theme.baseSize * 8}px; */
    width: 80vw;
  }
  @media screen and (${props => props.theme.mq.lg}) {
    /* padding: ${props => props.theme.baseSize * 10}px ${props => props.theme.baseSize * 10}px; */
  }
`

const App = () => {
  const [candidates, setCandidates] = useState([])
  const [candidate, setCandidate] = useState({keep: 'candidate'})
  const [flagCandidates, setFlagCandidates] = useState(true)

  useEffect(() => {
    if (flagCandidates) {
      setCandidates(API_LS.getAllCandidates)
      setFlagCandidates(false)
    }
  }, [candidates])

  const getRepositories = (username) => {
    console.log('getRepositories => ', username)
    API_GITHUB.getUserData(username)
    .then(data => {
      console.log('Data =>', data)
    })
    .catch(error => {
      console.error('Error => ', error)
    })
  }
  const saveCandidate = (newCandidate) => {
    API_LS.setCandidate(newCandidate)
  }
  
  return (
    <Wrapper>
      <Container>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <HomeComponent
                  getRepositories={getRepositories}
                  saveCandidate={saveCandidate}
                />}
            />
            <Route
              exact
              path="/candidates"
              component={() => <CandidatesComponent candidates={candidates} />}
            />
            <Route
              exact
              path="/candidates/:id"
              render={(props) => {
                const candidate = candidates.filter(candidate => candidate._id === props.match.params.id)
                return (
                  <CandidateComponent
                    candidate={candidate[0]} // 0 filter returns a list
                  />
                )
              }}
            />
          </Switch>
        </Router>
      </Container>
      <Alerts/>
    </Wrapper>
  )
}

export default App