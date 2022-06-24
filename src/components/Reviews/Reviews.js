import * as API from 'services/API';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  let { movie_id } = useParams();
  useEffect(() => {
    async function FetchReviews() {
      const movie = await API.FetchReviews(movie_id);
      setReviews(movie);
    }
    FetchReviews();
  }, [movie_id]);

  return (
    <div>
      {reviews && (
        <ul>
          {reviews.results.length === 0 ? (
            <p>We don`t have any reviews for this movie</p>
          ) : (
            reviews.results.map(review => (
              <li>
                <p>Author : {review.author}</p>
                <p>{review.content}</p>
              </li>
            ))
          )}
          {}
        </ul>
      )}
    </div>
  );
};
export default Reviews;
