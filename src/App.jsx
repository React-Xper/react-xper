import React, { Suspense } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { theme } from "./assets/theme/theme";
import { Navbar } from "./components/shared/Navbar";
import { Grommet } from "grommet";
import { useSelector } from "react-redux";
import { Loading } from "./components/shared/Loading";

const Home = React.lazy(() => import("./components/pages/Home"));
const About = React.lazy(() => import("./components/pages/About"));
const Concepts = React.lazy(() => import("./components/pages/Concepts"));
const Components = React.lazy(() => import("./components/pages/Components"));
const NotFound = React.lazy(() => import("./components/pages/NotFound"));

function Main() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        </Route>
        <Route exact path="/about">
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        </Route>
        <Route
          path="/concepts-lab"
          render={({ match }) => (
            <Suspense fallback={<Loading />}>
              <Concepts match={match} />
            </Suspense>
          )}
        />
        <Route
          path="/components-lab"
          render={({ match }) => (
            <Suspense fallback={<Loading />}>
              <Components match={match} />
            </Suspense>
          )}
        />
        <Route path="*">
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}

export function App() {
  const mode = useSelector((state) => state.theme);

  return (
    <Grommet theme={theme} themeMode={mode}>
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    </Grommet>
  );
}
