import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  padding: 10px;
  max-width: 1300px;
  margin: 0 auto;
`;
export const Navigation = styled.nav`
  display: flex;
  gap: 10px;
  font-size: 25px;
`;
export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: grey;
  }
`;

export const Header = styled.header`
  margin-bottom: 10px;
  border-bottom: 1px solid #000;
`;
