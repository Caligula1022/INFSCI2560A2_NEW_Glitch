import React, { useState, useContext, useEffect } from 'react';
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('godfather');

  const fetchMovies = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      // console.log(response);
      // here is a trap, I'm stuck for a while here for losing this await !!!
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
        // console.log(data.Search);
        setError({ show: false, msg: '' });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  // use useEffect to control when this function will be invoked
  useEffect(() => {
    // console.log(API_ENDPOINT);
    // console.log(API_ENDPOINT + '&s=' + query);
    fetchMovies(API_ENDPOINT + '&s=' + query);
  }, [query]);

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
