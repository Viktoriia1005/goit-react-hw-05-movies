import * as API from 'services/API';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import image from '../../image/Cinema.png';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  let { movie_id } = useParams();

  useEffect(() => {
    async function FetchDetails() {
      const movie = await API.FetchDetails(movie_id);
      setMovie(movie);
    }

    FetchDetails();
  }, [movie_id]);

  let navigate = useNavigate();

  return (
    <div>
      {movie && (
        <div>
          <button
            onClick={() => {
              navigate(`/`);
            }}
          >
            Back
          </button>
          <div className={s.top__div}>
            {movie.poster_path === null ? (
              <img src={image} alt="" width="200"></img>
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width="300"
              />
            )}

            <div className={s.details}>
              <h1>{movie.title}</h1>
              <p>User Score : {movie.vote_average * 10}%</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h2>Genres</h2>
              <ul className={s.list}>
                {movie.genres.map(genre => (
                  <li key={genre.id} className={s.list__item}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p>Additional information</p>
          <div>
            <Link
              to={{
                pathname: `/movies/${movie.id}/cast`,
              }}
              className={s.cast}
              key={movie.id}
            >
              Cast
            </Link>

            <Link
              to={{
                pathname: `/movies/${movie.id}/reviews`,
              }}
              key={movie.id + 1}
            >
              Reviews
            </Link>
          </div>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
