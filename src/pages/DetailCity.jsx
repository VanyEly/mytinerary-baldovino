import { getCountry } from "../services/citiesQueries.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";

export  const DetailCity= () => {
  const [city, setCity] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getCountry(id).then((res) => {
      console.log("fetched details:", res);
      if(res){setCity(res);}
      else{ console.log("city not found")}

    })
     .catch((err) => console.log(err)); 
  }, []);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={`${city.photo}`} alt={`${city.name}`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{`${city.country}`}</h2>
        <p>{`${city.description}`}</p>
      </div>
      <div>
        <h2 className="text-black text-2xl text-center">
          Under Construction...
        </h2>
      </div>
    </div>
  );
}
 export default DetailCity






//import '../detailCity.css';


//const Details = () => {
 

  //return (
    //<article className="bg-secondary rounded col-3 h-auto">
    //<img src={ciudad.photo} className="w-100 h-75" />
   // <h2 className="text-center text-white py-3">{ciudad.name}</h2>

  //</article>
 // );
//};

//export default Details;

























//let params = new URLSearchParams(document.location.search)
//let id = params.get("id")

//let evento = data.events.filter(evento => evento._id == id);
//console.log(evento);
//const container = document.getElementById("details");
//let cards = "";

  //cards = `
  //<div className="card m-5 p-2 card-i d-flex justify-content-center">
   
//  <img src="${evento[0].image}" class="card-img-top" alt="...">
 // <div className="card-body">
   // <h5 className="card-title">${evento[0].name}</h5>
 //   <p className="card-text">${evento[0].description}</p>
//  </div>
  //<div className="card-footer">
    //  <small className="text-muted">Precio $${evento[0].price}</small>
      // <a href="./vermas.html?id=${evento[0]._id}">
    //    <button className="btn btn-secondary m-4" type="button">
      //       ver más
  //      </button></a>
 //    </div>
//</div>
  //`

//container.innerHTML = cards 