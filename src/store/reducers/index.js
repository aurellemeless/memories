import { createSlice } from "@reduxjs/toolkit"

const cardSlice = createSlice({
    name: 'card',
    initialState: [],
    reducers: {
      showCard(state, action) {
        console.log(action);
      },
      hideCard(state, action) {},
    },
  })
  
  // Extract the action creators object and the reducer
  const { actions, reducer } = cardSlice
  // Extract and export each action creator by name
  export const { showCard, hideCard } = actions
  // Export the reducer, either as a default or named export
  export default reducer;