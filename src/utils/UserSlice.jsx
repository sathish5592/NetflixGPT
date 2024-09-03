import {createSlice} from "@reduxjs/toolkit"

const userSlice=createSlice({
    name:"user",
    initialState:null
    ,
    reducers:{
        addUser:(state,action)=>{
            return action.payload
         // return state.name=action.payload.displayName
           
        },
        removeUser:(state)=>{
            state="name"
            return null;
        }
    }
})
export const {addUser,removeUser} =userSlice.actions
export default userSlice.reducer;