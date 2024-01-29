import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h2`
  color: #2e2d2dbc;
  text-align: center;
  font-size: 28px;
  height: 40px;
`;
export const Link = styled(NavLink)`
font-size: 16px;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: #05438c;
  background: linear-gradient(90deg, rgba(129, 230, 217, 1) 0%, rgba(79, 209, 197, 1) 50%);
  border: none;
  border-radius: 500px;
  box-shadow: 12px 12px 24px rgba(79, 209, 197, .64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
  margin: 20px;
text-decoration: none;


  &:hover,
  &:focus {
    color: #313133;
    transform: translateY(-6px);
  }

  &:hover:before,
  &:focus:before {
    opacity: 1;
  }

  &:after {
    content: '';
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 6px solid #00FFCB;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ring 1.5s infinite;
  }

  &:hover:after,
  &:focus:after {
    animation: none;
    display: none;
  }
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}`;

export const HomeTitle = styled.h2`
  padding-top: 200px;
  color: #2e2d2dbc;
  text-align: center;
  font-size: 28px;
  height: 40px;
`;
