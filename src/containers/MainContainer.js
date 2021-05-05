import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Title from '../components/Title';
import About from '../components/About';
import MyNoms from '../components/MyNoms';
import MovieContainer from './MovieContainer';

const MainContainer = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Title />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/my-nominations">
            <MyNoms />
          </Route>
          <Route path="/">
            <MovieContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default MainContainer;
