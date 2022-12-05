import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { List } from 'components/Reviews/Reviews.styled';
import { fetchReviews } from 'API/API';

export default function Reviews() {
  const [movieReviews, setMovieReviews] = useState([{}]);
  const { id } = useParams();

  useEffect(() => {
    fetchReviews(id)
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
