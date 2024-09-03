import { createSlice } from "@reduxjs/toolkit";

const GPTslice=createSlice({
    name:'gpt',
    initialState:{
        showGPTsearch:false
    },
    reducers:{
      toggleGPTsearch:(state)=>{
        state.showGPTsearch=!state.showGPTsearch
      }
    }
})
export const{toggleGPTsearch} =GPTslice.actions;
export default GPTslice.reducer;