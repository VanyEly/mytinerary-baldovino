import { createAction, createAsyncThunk,  } from "@reduxjs/toolkit";
import axios from "axios";

const get_itineraries = createAsyncThunk('get_itineraries', async (cityId)=>{
    
    
    try {
        const itineraries=   await axios.get("http://localhost:3000/api/itineraries/"+ cityId)
        
        
        
        return {
            
            itineraries: itineraries.data.Itinerary
        }
        
    } catch (error) {
        console.log(error.message);
    }
    
})

/* NO FUNCIONA- Tira un error 404 en la peticion */
const reset_itineraries = createAction( 'reset_itineraries', () => {
    console.log(reset_itineraries);
    return {
        payload: {
            itineraries: null
        }
    }
} )



const itinerariesActions = {get_itineraries, reset_itineraries}

export default itinerariesActions