import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '76293c6bcb8bbcc89a96d2b767d5c3a3';

axios.defaults.baseURL = BASE_URL;

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  const trandingMoviesData = await response.data.results;
  return trandingMoviesData;
};

export const fetchMoviesSearchQuery = async (searchQuery, page) => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&page=${page}&language=en&query=${searchQuery}`
  );
  const searchMoviesData = await response.data;
  return searchMoviesData;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMoviesCast = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  const castDetails = await response.data;
  return castDetails;
};

export const fetchMoviesReview = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  const reviewDetails = await response.data;
  return reviewDetails;
};
