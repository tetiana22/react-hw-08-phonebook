import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 18px;
  font-weight: 600;
  padding: 11px 4px;
`;
export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  background: #b8f3f5;
  padding: 0px 40px;
  transform-style: preserve-3d;
  border-color: #000;
  border-radius: 32px;
  box-shadow: 3px 2px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),
    28px 28px 28px 0 rgba(34, 33, 81, 0.25);
  transition: 0.4s ease-in-out transform, 0.4s ease-in-out box-shadow;
`;
