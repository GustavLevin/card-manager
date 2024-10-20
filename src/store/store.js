import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../reducers/cardSlice';
import themeReducer from '../reducers/themeSlice';

const store = configureStore({
  reducer: {
    cardState: cardReducer,
    theme: themeReducer,
  },
});

export default store;
