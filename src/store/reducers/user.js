

import { createReducer } from "@reduxjs/toolkit";
import { cargarUsuario, signUp, signIn, signInWithToken, logout } from '../actions/userActions.js'
const initialState = {
    user: null,
    token : null
}
export const userReducer = createReducer( initialState, ( builder ) => 
    builder
        .addCase( cargarUsuario, ( stateActual, action ) => {
            return {
                ...stateActual,
                user : action.payload
             }
        } )
        .addCase( signUp.fulfilled, ( stateActual, action ) => {
            let userData = {
                user : action.payload.user || null,
                token : action.payload.token || null
            }
            return {
                ...stateActual,
                ...userData
            }
        } )
        .addCase( signIn.fulfilled, (stateActual, action) => {
            return {
                ...stateActual,
                user : action.payload.user,
                token : action.payload.token
            }
        }  )
        .addCase( signInWithToken.fulfilled, (stateActual, action) => {
            return {
                ...stateActual,
                user : action.payload.user,
                token : action.payload.token
            }
        } )
        .addCase( logout, (stateActual, action) => {
            return  {
                ...stateActual,
                user : null,
                token : null
            }
        } )
)


// import { createReducer } from "@reduxjs/toolkit"
// import userActions from "../actions.js/userActions"

// const initialState = {
//     user: 
//     {
//         email:"",
//         _id:"",
//     }
// }

// const userReducer = createReducer(initialState, (builder) => {
//     return builder
// .addCase(userActions.sign_in.fulfilled,(state,action)=>{
//     return {user: action.payload.user}
// })
// .addCase(userActions.authenticate.fulfilled,(state,action)=>{
// return {user: action.payload.user}
// })
// .addCase(userActions.sign_out.fulfilled,(state,action)=>{
//     return initialState
// });
// });

// export default userReducer