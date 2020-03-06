import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar.jsx'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <div className="App">
      <br></br>
      <p>
        Buscador Sobre Casos Industriales de Aplicación de Ingeniería de Líneas de Producto
      </p>
      <div className="App">
      <SearchBar></SearchBar>
      </div>
      <p>
        by Yan Carlos Certuche Grueso
      </p>
    </div>
  );
}
export default App;
