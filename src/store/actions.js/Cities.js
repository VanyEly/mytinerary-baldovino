import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

 export const add_cities = createAction("add_cities", (array) => {
  return {
    payload: array
  };
});
  

export const addCitiesAsync = createAsyncThunk("add_cities_async",async()=>{
    const peticion = await axios("http://localhost:3000/api/cities")
    return peticion.data
})

export const cargarCityAsync = createAsyncThunk("cargar_city_async", async( id ) => {
  try {
      const peticion = await axios ("http://localhost:3000/api/city/" + id  )
      return peticion.data.response
  } catch (error) {
      
  }
} );

export const add_city = createAction("add_city", (city) => {
  return {
    payload: {
      city: city,
    },
  };
});