import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import React from 'react';
import {
  Container,
  Navigation,
  StyledLink,
  Header,
} from './SharedLayout.styled';

export default function SharedLayout() {
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
    </Container>
  );
}
