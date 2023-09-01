import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/Cities";


export const store = configureStore ({
    reducer: {
        citiesReducer: citiesReducer,
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