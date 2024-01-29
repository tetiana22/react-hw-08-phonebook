import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';

export const HomeIcon = styled(HomeOutlined)`
  margin-right: 8px;
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
