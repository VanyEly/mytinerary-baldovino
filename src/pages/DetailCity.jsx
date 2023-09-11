import React from "react";
import DetailsCities from "../components/DetailsCities";

import { Link as Anchor } from "react-router-dom";

function DetailCity() {

  return (
      <>
          

          <DetailsCities /> 
       
          <Anchor className="primary" to="/cities">Back to Cities</Anchor>
      </>
  )
}

export default DetailCity

