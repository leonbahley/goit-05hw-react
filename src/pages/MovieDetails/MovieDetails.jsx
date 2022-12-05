import { Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import React from 'react';
import { useEffect, useState } from 'react';
import { Wrapper, MovieImg, StyledLink, BackLink } from './MovieDetails.styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { fetchMovieDetails } from 'API/API';

export default function MovieDetails() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchMovieDetails(id)
      .then(
        ({ poster_path, original_title, overview, genres, vote_average }) => {
          setMovieDetails({
            img: `https://image.tmdb.org/t/p/w400${poster_path}`,
            movieName: original_title,
            overview: overview,

            score: vote_average,
          });
          if (genres.length !== 0) {
            setGenres(genres.map(genre => genre.name));
          } else {
            setGenres(['There are no genres for this movie']);
          }
        }
      )
      .catch(err => alert(err));
  }, [id]);
  const { img, movieName, overview, score } = movieDetails;

  return (
    <>
      <Wrapper
        style={{
          flexDirection: 'row',
          gap: 15,
          borderBottom: '1px solid black',
          paddingBottom: 5,
        }}
      >
        <Wrapper>
          <BackLink to={backLinkHref}>
            <AiOutlineArrowLeft /> Back to movies
          </BackLink>

          <MovieImg
            src={
              img !== 'https://image.tmdb.org/t/p/w400null'
                ? img
                : 'https://via.placeholder.com/400x600'
            }
            alt={movieName}
          />
        </Wrapper>

        <Wrapper>
          <h1>{movieName}</h1>
          <p>User score: {score}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.join(', ')}</p>
        </Wrapper>
      </Wrapper>
      <h3>Additional info</h3>
      <StyledLink
        style={{ marginRight: 5 }}
        to="cast"
        state={{ from: location.state?.from }}
      >
        Cast
      </StyledLink>
      <StyledLink to="reviews" state={{ from: location.state?.from }}>
        Reviews
      </StyledLink>
      <Suspense fallback={<div>Loading info...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
