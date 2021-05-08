import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Title from '../components/Title';
import About from '../components/About';
import MyNoms from '../components/MyNoms';
import NomTracker from '../components/NomTracker';
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
      `https://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_OMDB_KEY}`,
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
    // check whether movie has already been added so it can't be added twice
    const alreadyInNominees = nominees.some(
      (nominee) => nominee.imdbID === movie.imdbID,
    );
    // make sure we haven't exceeded the maximum 5 nominations yet
    if (nominees.length <= 4 && !alreadyInNominees) {
      setNominees([movie, ...nominees]);
    }
  };

  const handleRemoveNomination = (nomineeToRemove) => {
    const newNomineesList = nominees.filter(
      (nominee) => nominee.imdbID !== nomineeToRemove.imdbID,
    );
    setNominees(newNomineesList);
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Title />
        <NomTracker nominees={nominees} />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/my-nominations">
            <MyNoms
              nominees={nominees}
              handleRemoveNomination={handleRemoveNomination}
              loading={loading}
            />
          </Route>
          <Route path="/">
            <MovieContainer
              movies={movies}
              nominees={nominees}
              handleNomination={handleNomination}
              handleRemoveNomination={handleRemoveNomination}
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
