import { useState, useEffect } from 'react';
import {
  useParams,
  Outlet,
  NavLink,
  Link,
  useLocation,
} from 'react-router-dom';
// import { IoIosArrowDropleftCircle } from 'react-icons/fa';
import toast from 'react-hot-toast';
import * as API from 'services/API';
import Loader from '../components/Loader';
import s from './Pages.module.css';

export default function FetchMovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const goBackURL = location?.state?.from ?? '/';

  useEffect(() => {
    async function fetchMovieInformation() {
      setLoading(true);
      try {
        const movie = await API.fetchMovieDetails(movieId);
        setMovie(movie);
      } catch (error) {
        toast.error('Movie no found');
      } finally {
        setLoading(false);
      }
    }
    fetchMovieInformation();
  }, [movieId]);

  const defaultPoster = `https://www.thebeijinger.com/sites/default/files/thebeijinger/event-images/362491/film.jpg`;
  return (
    <div>
      {loading && <Loader />}
      <div className={s.arrowLinkBox}>
        {/* <IoIosArrowDropleftCircle className={s.icon} /> */}
        <Link to={goBackURL}>RETURN</Link>
      </div>
      {movie && (
        <div>
          <div className={s.container}>
            <img
              className={s.poster}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : defaultPoster
              }
              alt={movie.title}
            />
            <ul className={s.list}>
              <li className={s.movieDetailItem}>
                <h2 className={s.movieDetailsTitle}>{movie.title}</h2>

                <p>
                  Rating:{' '}
                  {movie.vote_average
                    ? movie.vote_average
                    : 'There is no rating'}
                </p>
              </li>
              <li className={s.movieDetailItem}>
                <h3 className={s.movieDetailsTitle}>Overview</h3>
                {movie.overview ? (
                  <p>{movie.overview}</p>
                ) : (
                  <p>There is no overview for that movie</p>
                )}
              </li>
              <li className={s.movieDetailItem}>
                <h4 className={s.movieDetailsTitle}>Genres</h4>
                <div className={s.genreBox}>
                  {movie.genres.length > 0 ? (
                    <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
                  ) : (
                    <p>No genres found</p>
                  )}
                </div>
              </li>
            </ul>
          </div>
          <div className={s.movieInfoBox}>
            <p className={s.movieInfo}>Additional information</p>
            <ul>
              <li className={s.movieInfoLink}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? s.routeLinkActive : s.routeLink
                  }
                  to={`/movies/${movie.id}/cast`}
                  state={{ from: goBackURL }}
                >
                  Cast
                </NavLink>
              </li>
              <li className={s.movieInfoLink}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? s.routeLinkActive : s.routeLink
                  }
                  to={`/movies/${movie.id}/reviews`}
                  state={{ from: goBackURL }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}

      <Outlet />
    </div>
  );
}
