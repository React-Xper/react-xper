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
import { UseEffect } from './components/labs/useEffect';
import { UseMemo } from './components/labs/useMemo';

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
          </Route>
          <Route exact path="/lab">
            <Lab />
          </Route>
          <Route exact path="/lab/useEffect">
            <UseEffect />
          </Route>
          <Route exact path="/lab/useMemo">
            <UseMemo />
          </Route>
          <Route path="**">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Grommet>
  )
}