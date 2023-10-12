import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    ids: []
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.ids.includes(id)) {
        state.ids = state.ids.filter((mealId) => mealId !== id);
      } else {
        state.ids.push(id);
      }
    }
  }
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
