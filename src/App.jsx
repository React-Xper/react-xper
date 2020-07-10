import React, { Suspense } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { theme } from "./assets/theme/theme";
import { Navbar } from "./components/Navbar";
import { Grommet } from "grommet";
import { useSelector } from "react-redux";
import { Banner } from "./components/Banner";

const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Concepts = React.lazy(() => import("./components/Concepts"));
const NotFound = React.lazy(() => import("./components/NotFound"));

export function App() {
  const mode = useSelector((state) => state.theme);

  return (
    <Grommet theme={theme} themeMode={mode}>
      <Router>
        <Banner />
        <Navbar />
        <Suspense fallback={<div>...loading</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/concepts-lab" component={Concepts} />
            <Route exact path="/**" component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </Grommet>
  );
}
