// TMDb API configuration (using a demo key - replace with your own)
// fetch api from env file 
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL= import.meta.env.VITE_BASE_URL

export async function fetchMovies(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
}

export async function fetchSingleMovie(id) {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export async function fetchTrailer(id) {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results[0];
  } catch (error) {
    console.error('Error fetching trailer:', error);
    return [];
  }
}

export async function exploreMovies(endpoint, page = 1) {
  try {
    const response = await fetch(
      `${BASE_URL}${endpoint}?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching explore movies:", error);
    return [];
  }
}

export async function fetchMoviesByGenre(genreId, page = 1) {
  try {
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`
    );
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching genre movies:", error);
    return [];
  }
}
export async function fetchPopularMovies() {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  const data = await response.json();
  return data;
}

export async function fetchImdbId(movieId) {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/external_ids?api_key=${API_KEY}`);
    const data = await response.json();
    return data.imdb_id || null;
  } catch (error) {
    console.error('Error fetching IMDb ID:', error);
    return null;
  }
}