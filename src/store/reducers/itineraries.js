import { createReducer } from "@reduxjs/toolkit";
import itinerariesActions from "../actions.js/itineraries";



const initialState = {
    itineraries: [
        {
      name: "",
      nameImg:"",
      duration: 0,
      likes: [],
      price: 0,
      hashtags: [],
      _city:""
    },

    ]
}
const itinerariesReducer = createReducer(initialState, (builder)=>{

            return builder
                    .addCase(itinerariesActions.get_itineraries.fulfilled,(state,action)=>{
                        const newState = {...state, itineraries: action.payload._itineraries}
                        return newState
                    })
                     .addCase( itinerariesActions.reset_itineraries, (state, action) => {
                    return {
                        ...state, itineraries : action.payload
                    }
                    })
                    
                    
})

export default itinerariesReducer