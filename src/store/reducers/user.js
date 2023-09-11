import { createReducer } from "@reduxjs/toolkit"
import userActions from "../actions.js/userActions"

const initialState = {
    user: 
    {
        email:"",
        _id:"",
    }
}

const userReducer = createReducer(initialState, (builder) => {
    return builder
.addCase(userActions.sign_in.fulfilled,(state,action)=>{
    return {user: action.payload.user}
})
.addCase(userActions.authenticate.fulfilled,(state,action)=>{
return {user: action.payload.user}
})
.addCase(userActions.sign_out.fulfilled,(state,action)=>{
    return initialState
});
});

export default userReducer