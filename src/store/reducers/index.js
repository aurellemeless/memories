import { createSlice } from "@reduxjs/toolkit"
const initialState = {position: null, 
  positionStack: [], 
  imagesStack: [], 
  imageIndex:null, countMatches: 0
};
export const cardSlice = createSlice({
    name: 'card',
    initialState: initialState,
    reducers: {
      cardSelected(state, action) {
        state.position = action.payload.position;
      },
      enqueueCard(state, {payload : {imageIndex, position}}) { 
        state.imagesStack =[imageIndex, ...state.imagesStack];
        state.positionStack =[position, ...state.positionStack];
        const [current, prev] = state.imagesStack ;
        // check images matches
        if(current === prev ){
          state.countMatches = state.countMatches +1;
          state.imagesStack = [];
        }
      }
    },
  });
  
  // Extract the action creators object and the reducer
  const { actions, reducer } = cardSlice
  // Extract and export each action creator by name
  export const { cardSelected, enqueueCard, incrementMatches } = actions
  // Export the reducer, either as a default or named export
  export const selectPosition= (state)=>state.card.position;
  export const selectLatestPositions= (state)=>state.card.positionStack.slice(0,2);
  export const selectMatches= (state)=>state.card.countMatches;
  export default reducer;