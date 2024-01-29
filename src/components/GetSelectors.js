import { useSelector } from 'react-redux';
import {
  getIsLoggedIn,
  getProfile,
  getUserName,
} from './redux/Authorization/authSelectors';

export const useAuth = () => {
  const getLoggin = useSelector(getIsLoggedIn);
  const getName = useSelector(getUserName);
  const getProfileCurrent = useSelector(getProfile);
  return {
    getLoggin,
    getName,
    getProfileCurrent,
  };
};
