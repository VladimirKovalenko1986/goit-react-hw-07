import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload.toLowerCase();
    },
  },
});

export const selectFilterName = (state) => state.filters.name;
export default slice.reducer;
export const { changeFilter } = slice.actions;
