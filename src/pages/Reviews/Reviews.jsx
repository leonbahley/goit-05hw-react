import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { List } from 'pages/Reviews/Reviews.styled';

export default function Reviews() {
  const [movieReviews, setMovieReviews] = useState([{}]);
  const { id } = useParams();
  const APIKey = '0729fc5ff166ac1f365f9bc4f7e8ce78';

  useEffect(() => {
    fetch(
      `  https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${APIKey}`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then(({ results }) => {
        setMovieReviews(
          results.map(item => ({
            name: item.author,
            content: item.content,
            id: item.id,
          }))
        );
      })
      .catch(err => alert(err));
  }, [id]);
  return (
    <>
      {movieReviews.length !== 0 ? (
        <List>
          {movieReviews.map(({ name, content, id }) => (
            <li key={'' + id}>
              <p>
                <span style={{ fontWeight: 500 }}>Author: </span> {name}
              </p>
              <p>{content}</p>
            </li>
          ))}
        </List>
      ) : (
        <p>We do not have reviews for this movie</p>
      )}
    </>
  );
}
