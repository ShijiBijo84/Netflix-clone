const api_key = import.meta.env.VITE_TMDB_KEY;

export const BASE_URL = "https://api.themoviedb.org/3";
export const ORIGINAL_IMG_URL = "https://image.tmdb.org/t/p/original";
export const original = `/trending/movie/week?api_key=${api_key}`;
export const action = `/discover/movie?api_key=${api_key}&with_genres=28`;
