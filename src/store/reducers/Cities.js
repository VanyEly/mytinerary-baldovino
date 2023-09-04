import { createReducer } from "@reduxjs/toolkit";
import  {add_cities, addCitiesAsync, cargarCityAsync } from "../actions.js/Cities";


const initialState = {
  cities: [
    {
      name: "",
      country: "",
      photo: "",
      description: "",
      itineraries: [],
    },
  ],
 
};

const citiesReducer = createReducer(initialState, (builder) => {
  return builder.addCase(add_cities, (state, action) => {
    const newState = { ...state, cities: action.payload.cities };
    return newState;
  })
  
  .addCase (addCitiesAsync.fulfilled, (stateActual, action) => {
    return {
      ...stateActual,
      cities: action.payload.cities
    }
  })

  .addCase( cargarCityAsync.fulfilled, ( stateActual, action ) =>{
    return {
        ...stateActual,
        event : action.payload
    }
} )
});




export default citiesReducer;

