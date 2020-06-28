import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from './components/Home';
import CandidatesComponent from './components/Candidates';
import CandidateComponent from './components/Candidate';

// Styled Elements
const Alerts = styled.div`
  display: none;
`
const Wrapper = styled.div`
  align-items: flex-start;
  background-image: linear-gradient(to right, #C67DF3 0%, #384BD4 100%);
  display: flex;
  height: 100vh;
  justify-content: center;
  padding-top: ${props => props.theme.baseSize * 6}px;
  position: relative;
  width: 100vw;
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
  return (
    <Wrapper>
      <Container>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <HomeComponent />}
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