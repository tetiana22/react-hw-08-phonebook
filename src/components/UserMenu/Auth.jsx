import { Nav, Link, RegIcon, LogInIcon } from './Auth.styled';

const Authorization = () => {
  return (
    <Nav>
      <Link to="/registration">
        {' '}
        <RegIcon />
        Registered
      </Link>
      <Link to="/login">
        {' '}
        <LogInIcon />
        Log in
      </Link>
    </Nav>
  );
};

export default Authorization;
