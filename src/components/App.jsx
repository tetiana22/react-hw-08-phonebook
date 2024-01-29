import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegistrationPage from './Pages/RegistrationPage';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import ContactPages from './Pages/ContactPages';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { profile } from './redux/Authorization/authThunk';
import { Spinner } from './ContactList/ContactList.styled';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  const profileData = useSelector(state => state.profile);

  return !profileData ? (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={ContactPages} />
            }
          />

          <Route
            path="/registration"
            element={
              <PublicRoute redirectTo="/" component={RegistrationPage} />
            }
          />

          <Route
            path="/login"
            element={<PublicRoute redirectTo="/" component={LogIn} />}
          />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  ) : (
    <Spinner />
  );
};
