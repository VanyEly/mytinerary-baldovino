import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions.js/Cities";


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
  return builder.addCase(citiesActions.add_cities, (state, action) => {
    const newState = { ...state, cities: action.payload.cities };
    return newState;
  })
    .addCase(citiesActions.filter_city.fulfilled,(state,action) => {
      const newState = {...state,cities : [action.payload.cities]}
    return newState;
    })
});

export default citiesReducer;