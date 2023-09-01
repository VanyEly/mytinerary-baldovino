import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const add_cities = createAction("add_cities", (array) => {
  return {
    payload: array
  };
});

const filter_city = createAsyncThunk('filter_city', async (id)=> {

try {
  
    const city = await  axios.get("http://localhost:3000/api/city/"+id)
    .then ((response) => response.data)

return {
  city: city
}


} catch (error) {
  console.log(e.message);
}

})

const citiesActions = { add_cities ,filter_city };
export default citiesActions;