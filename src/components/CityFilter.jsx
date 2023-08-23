import React from 'react';

// Creamos un componente funcional llamado CityFilter que recibe las props como argumento
function CityFilter(props) {
  // Definimos el estado del componente, que contiene el valor del campo de búsqueda
  const [searchValue, setSearchValue] = React.useState('');

  // Definimos la función handleChange, que se ejecuta cuando el usuario cambia el valor del campo de búsqueda
  function handleChange(event) {
    // Actualizamos el estado del componente con el nuevo valor del campo de búsqueda
    setSearchValue(event.target.value);
  }

  // Definimos la función handleSubmit, que se ejecuta cuando el usuario hace clic en el botón de búsqueda
  function handleSubmit(event) {
    // Evitamos que se recargue la página al enviar el formulario
    event.preventDefault();
    // Llamamos al método onSearch que recibimos como prop desde el componente padre, pasándole el valor del campo de búsqueda
    props.onSearch(searchValue);
  }

  // Retornamos un elemento div que contiene un formulario con un campo de texto y un botón
  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <input type="text" id="search-input" placeholder="Buscar por name..." value={searchValue} onChange={handleChange} />
        <button id="search-button" type="submit">Buscar</button>
      </form>
    </div>
  );
}

// Exportamos el componente CityFilter para poder usarlo en otros archivos
export default CityFilter;