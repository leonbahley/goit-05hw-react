import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { List, StyledLink } from './MovieList.styled.js';

export default function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const APIKey = '0729fc5ff166ac1f365f9bc4f7e8ce78';

  useEffect(() => {
    fetch(`   https://api.themoviedb.org/3/trending/all/day?api_key=${APIKey}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then(({ results }) => {
        setMovieList(
          results.map(item => ({
            name: item.original_title,
            id: item.id,
            altName: item.name,
          }))
        );
      })
      .catch(err => alert(err));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <List>
        {movieList.map(({ name, id, altName }) => (
          <li key={id}>
            <StyledLink to={`/movies/${id}`}>
              {name ? name : altName}
            </StyledLink>
          </li>
        ))}
      </List>
    </>
  );
}
