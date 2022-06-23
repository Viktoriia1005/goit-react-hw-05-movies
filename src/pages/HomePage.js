import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as API from 'services/API';
import Loader from '../components/Loader';
import s from './Pages.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setLoading(true);
      try {
        const trendingMovies = await API.fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1 className={s.homePageTitle}>Trending today</h1>
      {loading && <Loader />}
      {!error && (
        <ul className={s.homePageList}>
          {movies.map(({ id, title }) => (
            <li className={s.homePageItem} key={id}>
              <Link className={s.homePageLink} to={`/movies/${id}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
