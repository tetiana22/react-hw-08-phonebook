import { useSelector } from 'react-redux';
import { Nav } from './AppHeader.styled';
import Navigation from 'components/UserMenu/Navigation';
import Authorization from 'components/UserMenu/Auth';
import UserMenu from 'components/UserMenu/UserMenu';

export const AppHeader = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      <Nav>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <Authorization />}
      </Nav>
    </>
  );
};
