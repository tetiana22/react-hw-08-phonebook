import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IssuesCloseOutlined, LoginOutlined } from '@ant-design/icons';

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  height: 50px;
  align-items: center;
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
export const RegIcon = styled(IssuesCloseOutlined)`
  margin-right: 8px;
`;

export const LogInIcon = styled(LoginOutlined)`
  margin-right: 8px;
`;
