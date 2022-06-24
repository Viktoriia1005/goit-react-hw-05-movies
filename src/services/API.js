import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '76293c6bcb8bbcc89a96d2b767d5c3a3';

axios.defaults.baseURL = BASE_URL;

export const FetchTrend = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const FetchDetails = async movie_id => {
  const response = await axios.get(`/movie/${movie_id}?api_key=${API_KEY}`);
  return response.data;
};

export const FetchCast = async movie_id => {
  const response = await axios.get(
    `/movie/${movie_id}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
};

export const FetchReviews = async movie_id => {
  const response = await axios.get(
    `/movie/${movie_id}/reviews?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const FetchSearch = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response.data;
};
