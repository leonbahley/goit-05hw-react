const APIKey = '0729fc5ff166ac1f365f9bc4f7e8ce78';

export const fetchCast = id => {
  return fetch(
    `  https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKey}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Something went wrong');
  });
};

export const fetchReviews = id => {
  return fetch(
    `  https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${APIKey}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Something went wrong');
  });
};

export const fetchMovieDetails = id => {
  return fetch(
    `  https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Something went wrong');
  });
};

export const fetchMovieList = () => {
  return fetch(
    `   https://api.themoviedb.org/3/trending/all/day?api_key=${APIKey}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Something went wrong');
  });
};
