import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/Cities";
import itinerariesReducer from "./reducers/itineraries";


export const store = configureStore ({
    reducer: {
        citiesReducer: citiesReducer,
        itinerariesReducer: itinerariesReducer,
    },
})


//const store = createStore(
  //  reducer,
    //composeWithDevTools(
      //applyMiddleware(...middleware)
      // other store enhancers if any
  //  )
 // );


export default store