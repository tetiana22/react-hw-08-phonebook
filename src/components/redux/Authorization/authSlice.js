import { profile, logIn, logOut } from './authThunk';
import { createSlice } from '@reduxjs/toolkit';

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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logIn.fulfilled, handleFulfilled)
      .addCase(profile.fulfilled, handleProfileFulfilled)
      .addCase(profile.pending, handleProfilePending)
      .addCase(profile.rejected, handleProfileRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, handleLogoutRejected)
      .addCase(logOut.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
