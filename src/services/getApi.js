const API_KEY = '11c29a611a7390a1c37fc5cf42ca7297';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function getTrending() {
  try {
    const response = await fetch(
      `${BASE_URL}trending/all/week?api_key=${API_KEY}`
    );
    if (response.status === 200) {
        const result = await response.json();        
        return result.results.map(movie => {
            return { id: movie.id, name: movie.name || movie.title };
      });
    } else return [];
  } catch (error) {
    console.error(error.message);
  }
}

export async function getMovieDetails(movieId) {
    try {
        const response = await fetch(
            `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
        );
        if (response.status === 200) {
            const result = await response.json();
            return result;
    } else return {};
  } catch (error) {
    console.error(error.message);
  }
}

export async function searchMovies(searchText) {
    try {
        const response = await fetch(
            `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`
        );
        if (response.status === 200) {
            const result = await response.json();
            return result.results.map(movie => {
                return { id: movie.id, name: movie.name || movie.title };
            });
        } else return {};
    } catch (error) {
    console.error(error.message);
  }
}

export function getImage(image) {
  return image ? 'https://image.tmdb.org/t/p/w500' + image : 'https://via.placeholder.com/300x400';
}

export async function getMovieCredits(movieId) {
    try {
        const response = await fetch(
        `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US&page=1`
        );
    if (response.status === 200) {
      const result = await response.json();
      const results = result.cast.map(cast => {
        return {
          id: cast.id,
          name: cast.name,
          original_name: cast.original_name,
          popularity: cast.popularity,
          profile_path: getImage(cast.profile_path),
          character: cast.character,
        };
      });
      return results;
    } else return [];
  } catch (error) {
    return new Promise.reject(
      `There is an error ${error.message} with finding cast for the movie ${movieId}  `
    );
  }
}

export async function getMovieReviews(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    if (response.status === 200) {
      const result = await response.json();

      return result?.results.map(({ author, content, id }) => ({
        author,
        content,
        id,
      }));
    } else return [];
  } catch (error) {
    return new Promise.reject(
      `There was an error ${error.message} with getting reviews for the movie ${movieId}  `
    );
  }
}
