import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import React from 'react';
import {
  Container,
  Navigation,
  StyledLink,
  Header,
} from './SharedLayout.styled';
import PropTypes from 'prop-types';

export default function SharedLayout({ children }) {
  return (
    <Container>
      <Header>
        <Navigation>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Navigation>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      {children}
    </Container>
  );
}
SharedLayout.propTypes = {
  children: PropTypes.element,
};
