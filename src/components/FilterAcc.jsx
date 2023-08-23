import React from 'react';
import CityFilter from './CityFilter';
import axios from 'axios';

// Creamos un componente funcional llamado App que recibe las props como argumento
function FilterAcc(props) {
  // Definimos el estado del componente, que contiene la array de cities
  const [cities, setCities] = React.useState([]);

  // Definimos la función handleSearch, que se ejecuta cuando el usuario hace clic en el botón de búsqueda
  function handleSearch(searchValue) {
    // Usamos axios para hacer una solicitud GET a la dirección de la base de datos local
    axios.get('http://localhost:3000/api/cities')
      .then(res => {
        // Obtenemos la array de cities desde la respuesta
        const allCities = res.data;
        // Filtramos la array de cities por name usando el valor del campo de búsqueda
        const filteredCities = allCities.filter(city => city.name.toLowerCase().includes(searchValue.toLowerCase()));
        // Actualizamos el estado del componente con la nueva array de cities filtrada
        setCities(filteredCities);
      })
      .catch(err => {
        // Manejamos los posibles errores con la solicitud
        console.error(err);
      });
  }

  // Retornamos un elemento div que contiene el componente CityFilter y una lista de ciudades
  return (
    <div className="container">
      <h1>Ejemplo de filtro de búsqueda por name</h1>
      {/* Pasamos la función handleSearch como prop al componente CityFilter */}
      <CityFilter onSearch={handleSearch} />
      <ul className="city-list">
        {/* Iteramos sobre la array de cities y mostramos cada city con su name y country */}
        {cities.map(city => (
          <li className="city-item" key={city.name}>
            <p className="city-name">{city.name}</p>
            <p className="city-country">{city.country}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Exportamos el componente App para poder usarlo en otros archivos
export default FilterAcc;