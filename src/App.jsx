import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { NotFound } from './components/NotFound';
import { Home } from './components/Home';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/style/Theme';
import { useSelector } from 'react-redux'
import { Global } from './components/style/Global';
import { Lab } from './components/Lab';

export function App() {
  const theme = useSelector(state => state.theme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Global />
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
              <Route path="**">
                <NotFound />
              </Route>
            </Switch>
          </Router>
    </ThemeProvider>
  )
}