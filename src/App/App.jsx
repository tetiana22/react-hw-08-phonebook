import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import PrivateRoute from '../Routes/PrivateRoute';
import PublicRoute from '../Routes/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { profile } from '../components/redux/Authorization/authThunk';
import { Spinner } from '../components/Contact/ContactList/ContactList.styled';

const RegistrationPage = lazy(() =>
  import('../components/Pages/RegistrationPage')
);
const Home = lazy(() => import('../components/Pages/Home'));
const LogIn = lazy(() => import('../components/Pages/LogIn'));
const ContactPages = lazy(() => import('../components/Pages/ContactPages'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  const profileData = useSelector(state => state.profile);

  return profileData ? (
    <Spinner />
  ) : (
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
            element={<PublicRoute redirectTo="/contacts" component={LogIn} />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <ToastContainer />
    </>
  );
};
