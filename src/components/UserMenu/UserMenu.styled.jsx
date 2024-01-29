import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
  padding: 11px 4px;
  color: #0f5f60;
  &:hover {
    text-shadow: 3px 3px 2pxrgba (0, 0, 0, 0.5);
    color: #05438c;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  padding: 11px 4px;
  color: #0f5f60;
  &:hover {
    text-shadow: 3px 3px 2pxrgba (0, 0, 0, 0.5);
    color: #05438c;
  }
`;
export const Span = styled.span`
  color: #71498e;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;
