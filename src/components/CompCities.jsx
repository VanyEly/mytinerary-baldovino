import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import citiesActions from '../store/actions.js/Cities';
import { useDispatch, useSelector } from 'react-redux';

  const CompCities = () => {
  
 let InputNameRef = useRef()

  //const params = useParams();
    //console.log(params);
    //const [cities, setCities] = useState([]);
    //const [search, setSearch] = useState("");

    //const [results, setResults] = useState([]);
  const dispatch =useDispatch()


const filterCity = () => {
    //useEffect(() => {
    //  axios.get('http://localhost:3000/api/cities')
      //  .then(response => {
     // console.log(response.data);
     //   }
       // )
dispatch(citiesActions.filter_city(InputNameRef.current.value))

      }
  
   // const searcher = (e) => {
     // setSearch(e.target.value);
     // console.log(e.target.value);
  
     // const filteredCities = cities.filter(dato =>
           
       // dato.name.toLowerCase().startsWith(search.toLowerCase())
      
      //);

     // setResults(search.trim() === "" ? cities : filteredCities);

  // };
  
    return (

    
       <div>
         <input ref={InputNameRef} type="text" placeholder='search' className='form-control' />
          <button onClick={()=>filterCity()} className="btn btn-secondary">🔍</button>
        </div>
      

   );
  };
  



  export default CompCities;



