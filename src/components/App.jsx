import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout.jsx';

const MovieList = lazy(() => import('../pages/MovieList/MovieList'));
const SearchBar = lazy(() => import('../pages/SearchBar/SearchBar'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MovieList />} />
          <Route path="movies" element={<SearchBar />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <SharedLayout>
              <MovieList />
            </SharedLayout>
          }
        />
      </Routes>
    </>
  );
};
