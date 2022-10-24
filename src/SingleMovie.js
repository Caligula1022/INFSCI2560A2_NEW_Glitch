import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_ENDPOINT } from './context';

// single movie info component

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });

  const fetchMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.Response === 'True') {
      setMovie(data);
      setIsLoading(false);
    } else {
      setError({ show: true, msg: data.Error });
      setIsLoading(false);
    }
  };

  // use hook to invoke fetch function
  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`);
  }, [id]);

  if (isLoading) {
    return <div className='loading'></div>;
  }
  if (error.show) {
    return (
      <div className='single-error'>
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>
          back to home page
        </Link>
      </div>
    );
  }
  const {
    Poster: poster,
    Title: title,
    Plot: plot,
    Year: year,
    Actors: actors,
    Awards: awards,
    Country: country,
    Director: director,
    Language: language,
    Released: released,
    imdbRating: imdbrating,
  } = movie;
  console.log(movie);
  return (
    <section className='single-movie'>
      <img src={poster} alt={title} />
      <div className='single-info'>
        <h1>{title}</h1>
        <p>{plot}</p>
        <h3>Cast: {actors}</h3>
        <h4>Year: {year}</h4>
        <h4>Director: {director}</h4>
        <h4>Country: {country}</h4>
        <h4>Language: {language}</h4>
        <h4>Awards: {awards}</h4>
        <h4>IMDB Rating: {imdbrating}</h4>
        <Link to='/' className='btn'>
          back to home page
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
