import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Title from '../components/Title';
import About from '../components/About';
import MyNoms from '../components/MyNoms';
import MovieContainer from './MovieContainer';

const MainContainer = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [nominees, setNominees] = useState([]);

  useEffect(() => {
    setLoading(true);

    fetch(
      `http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_OMDB_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === 'False') {
          setError(data.Error);
        } else {
          setMovies(data.Search);
        }
        setLoading(false);
      })
      .catch(({ message }) => {
        setError(message);
        setLoading(false);
      });
  }, [searchValue]);

  const handleNomination = (movie) => {
    const newNomineesList = [...nominees, movie];
    // if nominees.length <= 4
    setNominees(newNomineesList);
    console.log(nominees);
  };

  // I'll need a handleDeleteNomination function, and
  //that needs to get passed to MyNoms

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
            <MyNoms
              nominees={nominees}
              // handleNominationDelete
              loading={loading}
            />
          </Route>
          <Route path="/">
            <MovieContainer
              movies={movies}
              handleNomination={handleNomination}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              loading={loading}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default MainContainer;
