import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { NotFound } from './components/NotFound';
import { Home } from './components/Home';
import { Grommet } from 'grommet';
import { useSelector } from 'react-redux'
import { Lab } from './components/Lab';
import { theme } from './assets/theme/theme';
import { Effects } from './components/labs/Effects';
import { Memoization } from './components/labs/Memoization';
import { About } from './components/About';

export function App() {
  const mode = useSelector(state => state.theme);

  return (
    <Grommet theme={theme} themeMode={mode}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/lab">
            <Lab />
          </Route>
          <Route exact path="/lab/effects">
            <Effects />
          </Route>
          <Route exact path="/lab/memoization">
            <Memoization />
          </Route>
          <Route exact path="**">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Grommet>
  )
}