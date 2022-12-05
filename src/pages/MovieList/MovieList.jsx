import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { List, StyledLink } from './MovieList.styled.js';
import { fetchMovieList } from 'API/API.js';

export default function MovieList() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchMovieList()
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
