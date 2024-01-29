import { Link } from './Navigation.styled';
import { HomeIcon } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">
        <HomeIcon />
        Home
      </Link>
    </nav>
  );
};

export default Navigation;
