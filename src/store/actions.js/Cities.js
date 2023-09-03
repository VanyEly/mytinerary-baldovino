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

