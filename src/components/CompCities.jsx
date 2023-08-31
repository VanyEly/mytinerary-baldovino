import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CompCities = () => {
    const params = useParams();
    //console.log(params);
    const [cities, setCities] = useState([]);
    const [search, setSearch] = useState("");
    //const [results, setResults] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:3000/api/cities')
        .then(res => {
          setCities(res.data.response);
          setResults(res.data.response);
        })
        .catch(error => console.log(error));
    }, []);
  
    const searcher = (e) => {
      setSearch(e.target.value);
      console.log(e.target.value);
  
     // const filteredCities = cities.filter(dato =>
           
       // dato.name.toLowerCase().startsWith(search.toLowerCase())
      
      //);

      //setResults(search.trim() === "" ? cities : filteredCities);

    };
  
    return (

    
        <div>
          <input value={search} onChange={searcher} type="text" placeholder='search' className='form-control' />
          <button className="btn btn-secondary">🔍</button>
        </div>
      

    );
  };
  
  export default CompCities;