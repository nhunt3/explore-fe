import { createSlice, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';

import { getBaseUrl } from '../config';

const initialAtlantaState = {};

const atlantaSlice = createSlice({
  name: 'atlanta',
  initialState: initialAtlantaState,
  reducers: {
    setInitialState(state, action) {
      state.atlanta = action.payload;
    }
  }
});

export const store = configureStore({
  reducer: atlantaSlice.reducer
});

export const atlantaActions = atlantaSlice.actions;

export const fetchAtlantaData = () => {
  return async (dispatch) => {
    const response = await axios.get(getBaseUrl());
    dispatch(atlantaActions.setInitialState(response.data));
  }
};
