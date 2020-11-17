import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar.jsx'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {I18nProvider, LOCALES} from './i18n';
import translate from './i18n/translate'

function App() {
  return (
    <I18nProvider locale={LOCALES.ESPAÑOL}>
    <div className="App">
      <br></br>
      <p>
        {translate('nombre')}
      </p>
      <div className="App">
      <SearchBar></SearchBar>
      </div>
      <p>
        by Yan Carlos Certuche Grueso
      </p>
    </div>
    </I18nProvider>
  );
}
export default App;
