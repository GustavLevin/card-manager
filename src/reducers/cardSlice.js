import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
  activeCardId: null,
};

const cardSlice = createSlice({
  name: 'cardState',
  initialState,
  reducers: {
    addCard: (state, action) => {
      if (state.cards.length < 4) {
        state.cards.push(action.payload);
      } else {
        alert('You can have a maximum of 4 cards.');
      }
    },
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
      if (state.activeCardId === action.payload) {
        state.activeCardId = null;
      }
    },
    activateCard: (state, action) => {
      state.activeCardId = action.payload;
    },
    updateCard: (state, action) => {
      const index = state.cards.findIndex((card) => card.id === action.payload.id);
      if (index !== -1) {
        state.cards[index] = action.payload;
      }
    },
    deleteInactiveCards: (state) => {
      state.cards = state.cards.filter((card) => card.id === state.activeCardId);
    },
  },
});

export const { addCard, deleteCard, activateCard, updateCard, deleteInactiveCards } = cardSlice.actions;
export default cardSlice.reducer;
