import { HomeTitle, Link, Title } from './Home.styled';
import { useSelector } from 'react-redux';

const Home = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      <HomeTitle>Wellcome to you PhoneBook </HomeTitle>
      {!isLoggedIn ? (
        <Title>
          <Link to="/login" title="Try it now!">
            Try it now!
          </Link>
        </Title>
      ) : (
        <Title>
          Go to the tab
          <Link to="/contacts">Contacts</Link>
          and manage your contacts
        </Title>
      )}
    </>
  );
};

export default Home;
