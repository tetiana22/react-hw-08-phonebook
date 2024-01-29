import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
export const setToken = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
export const clearToken = () =>
  (axios.defaults.headers.common.Authorization = '');

export const register = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', user);
      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', user);
      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/logout', user);
      clearToken();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const profile = createAsyncThunk(
  'auth/current',
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    token && setToken(token);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
