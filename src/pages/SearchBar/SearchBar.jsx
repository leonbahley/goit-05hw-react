import React from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { Input, Form, Button, List, StyledLink } from './Searchbar.styled';

export default function SearchBar() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [queryMovieList, setQueryMovieList] = useState([]);
  const [isActiveBtn, setIsActiveBtn] = useState(false);
  const APIKey = '0729fc5ff166ac1f365f9bc4f7e8ce78';

  useEffect(() => {
    if (query === '') {
      return;
    }
    fetch(
      `   https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${query}`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then(({ results }) => {
        if (!results.length) {
          alert('No movie found');
          return;
        }
        setQueryMovieList(
          results.map(item => ({ name: item.original_title, id: item.id }))
        );
      })
      .catch(err => alert(err));
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  const handleChange = ({ target }) => {
    if (target.value.length) {
      setIsActiveBtn(true);
    } else {
      setIsActiveBtn(false);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="query" onChange={handleChange} />
        <Button type="submit" disabled={!isActiveBtn}>
          <AiOutlineSearch style={{ width: 15, height: 15 }} />
        </Button>
      </Form>
      {queryMovieList !== 0 ? (
        <List>
          {queryMovieList.map(({ name, id }) => (
            <li key={id}>
              <StyledLink to={`${id}`} state={{ from: location }}>
                {name}
              </StyledLink>
            </li>
          ))}
        </List>
      ) : null}
    </>
  );
}
