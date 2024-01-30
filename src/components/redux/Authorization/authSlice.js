import { toast } from 'react-toastify';
import { profile, logIn, logOut, register } from './authThunk';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  profile: null,
  isLoading: false,
  isLoggedIn: false,
  error: '',
};

const handlePending = (state, { payload }) => {
  state.isLoading = true;
  state.isLoggedIn = false;
};

const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.isLoading = false;
  state.error = '';
  state.token = payload.token;
  state.isLoggedIn = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  state.isLoggedIn = false;
  state.user = null;
  state.token = null;
  toast.error(
    `${payload}` === 'Network Error'
      ? `${payload}`
      : 'Ooops, something was not right'
  );
};

const handleProfileFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.profile = payload;
  state.user = payload;
  state.isLoggedIn = true;
};

const handleProfileRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  state.profile = false;
  state.isLoggedIn = false;
};

const handleProfilePending = (state, { payload }) => {
  state.profile = true;
  state.isLoggedIn = false;
};
const handleLogoutRejected = (state, { payload }) => {
  state.user = { email: null, password: null };
  state.token = null;
  state.isLoggedIn = false;
  state.profile = false;
  state.error = null;
  state.isLoading = false;
};
const handleRegisterFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.isLoading = false;
  state.error = '';
  state.token = payload.token;
  state.isLoggedIn = true;
  toast.success(`${payload}` === 'Network Error' ? `${payload}` : 'created');
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logIn.fulfilled, handleFulfilled)
      .addCase(profile.fulfilled, handleProfileFulfilled)
      .addCase(profile.pending, handleProfilePending)
      .addCase(profile.rejected, handleProfileRejected)
      .addCase(register.fulfilled, handleRegisterFulfilled)
      .addCase(logIn.rejected, handleRejected)

      .addCase(logOut.fulfilled, handleLogoutRejected)
      .addCase(logOut.rejected, handleRejected)
      .addMatcher(
        isAnyOf(logIn.pending, logOut.pending, register.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(logIn.rejected, logOut.rejected, register.rejected),
        handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;
