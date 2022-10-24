import React from 'react';
import { useGlobalContext } from './context';
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className='search' onSubmit={handleSubmit}>
      <h1>Search Movies</h1>
      <input
        type='text'
        className='search-input'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <div className='error'>{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
