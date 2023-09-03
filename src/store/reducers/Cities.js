import { createReducer } from "@reduxjs/toolkit";
import  {add_cities, addCitiesAsync } from "../actions.js/Cities";


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
  city: [
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

  .addCase(citiesActions.add_city, (state, action) => {
    const newState = { ...state, city: action.payload.city };
    return newState;
  })

});




export default citiesReducer;

