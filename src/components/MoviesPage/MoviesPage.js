import { Link } from 'react-router-dom';
import * as API from 'services/API';
import styled from 'styled-components';

import { useEffect, useState, useRef } from 'react';
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState(null);

  const mounted = useRef();

  useEffect(() => {
    async function FetchSearch() {
      const movie = await API.FetchSearch(query);
      setSearch(movie);
    }
    if (!mounted.current) {
      mounted.current = true;
    } else {
      FetchSearch();
    }
  }, [query]);

  const handleSubmit = (e, query) => {
    e.preventDefault();
    setQuery(e.target.elements.query.value);
    e.target.reset();
  };
  return (
    <>
      {/* <Outlet/> */}

      <form onSubmit={handleSubmit}>
        <input type="text" name="query"></input>
        <button type="submit">Search</button>
      </form>

      {search && (
        <Div>
          {search.results.map(movie => (
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
              }}
              key={movie.id}
            >
              {movie.title}
            </Link>
          ))}
        </Div>
      )}
    </>
  );
};
export default MoviesPage;
