import { useParams } from 'react-router-dom';
import React from 'react';
import { useEffect, useState } from 'react';
import { List, CharacterName } from './Cast.styled';
import { fetchCast } from '../../API/API';

export default function Cast() {
  const [movieCast, setMovieCast] = useState([{}]);
  const { id } = useParams();

  useEffect(() => {
    fetchCast(id)
      .then(({ cast }) => {
        setMovieCast(
          cast.map(item => ({
            name: item.name,
            character: item.character,
            img: `https://image.tmdb.org/t/p/w400${item.profile_path}`,
            id: item.id,
          }))
        );
      })
      .catch(err => alert(err));
  }, [id]);

  return (
    <>
      {movieCast.length !== 0 ? (
        <List>
          {movieCast.map(({ name, img, character, id }) => (
            <li key={'' + id}>
              <img
                style={{ width: 150 }}
                src={
                  img !== 'https://image.tmdb.org/t/p/w400null'
                    ? img
                    : 'https://via.placeholder.com/400x600'
                }
                alt={name}
              />
              <h4
                style={{
                  margin: 0,
                }}
              >
                {name}
              </h4>
              <p style={{ margin: 0 }}>
                <CharacterName>Character: </CharacterName>
                {character}
              </p>
            </li>
          ))}
        </List>
      ) : (
        <p>We do not have cast for this movie</p>
      )}
    </>
  );
}
