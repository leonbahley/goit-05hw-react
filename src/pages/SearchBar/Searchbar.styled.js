import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Input = styled.input`
  min-width: 200px;
  min-height: 30px;
`;

export const Form = styled.form`
  display: flex;
  gap: 5px;
`;
export const Button = styled.button`
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 15px;
  &:hover {
    color: grey;
  }
  &:visited {
    color: grey;
  }
`;
