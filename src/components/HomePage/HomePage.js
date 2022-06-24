import * as API from 'services/API';
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function FetchTrend() {
      const movie = await API.FetchTrend();
      setMovies(movie);
    }

    FetchTrend();
  }, []);

  return (
    <div>
      <h1> Trending today</h1>
      <Div>
        {movies &&
          movies.results.map(movie => (
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
              }}
              key={movie.id}
            >
              {movie.title}
            </Link>
          ))}

        <Outlet />
      </Div>
    </div>
  );
};
export default HomePage;
