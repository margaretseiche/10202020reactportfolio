import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./reset.css";
import './index.css';

const Home = lazy(() => import ("./pages/Home/index"));
const About = lazy(() => import ("./pages/About/index"));
const Portfolio = lazy(() => import ("./pages/Portfolio/index"));
const Contact = lazy(() => import ("./pages/Contact/index"));
const NoMatchPage = lazy(() => import ("./pages/NoMatch"));
const Footer = lazy(() => import ("./components/Footer"));

const renderLoader = () => <p>Loading</p>;

class App extends React.Component {
  render() {
    return (
      <Suspense fallback={renderLoader()}>
      <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
              <Route path="/404" component={NoMatchPage} />
              <Redirect to="/404" />
            </Switch>
          <Footer />
      </Router>
      </Suspense>
    );
  }
}

export default App;