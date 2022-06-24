import * as API from 'services/API';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import image from '../../image/Cinema.png';

const Cast = () => {
  const [cast, setCast] = useState(null);
  let { movie_id } = useParams();
  useEffect(() => {
    async function FetchCast() {
      const movie = await API.FetchCast(movie_id);
      setCast(movie);
    }

    FetchCast();
  }, [movie_id]);
  return (
    <div>
      {cast && (
        <ul>
          {cast.cast.map(person => (
            <li key={person.id}>
              {person.profile_path === null ? (
                <img src={image} alt="" width="200"></img>
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                  alt=""
                  width="200"
                />
              )}
              <p>{person.name}</p>
              <p>Character : {person.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Cast;
