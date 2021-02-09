import React, {Component} from 'react';
import './App.css';
import SearchBar from './Components/SearchBar.jsx'


import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {I18nProvider, LOCALES} from './i18n';
import translate from './i18n/translate'
import CardResult from './Components/CardResult';

export class App extends Component {
  state = {
    results : []
  }

  
  _handleResults = (results) =>{
    this.setState({results})
    console.log("luego de cambiar estado", results)
  }
  render(){
    return (
      <I18nProvider locale={LOCALES.ENGLISH}>
      <div className="App">
        <br></br>
        <p>
          {translate('nombre')}
        </p>
        <div className="App">
          <SearchBar 
            textButton={translate('buscar')} 
            textPlaceholder={translate('consulta')} 
            onResults={this._handleResults}>  
          </SearchBar>
        </div>
        {this.state.results.length === 0 
        ?<p>
          by Yan Carlos Certuche Grueso
          </p>
        : <CardResult crd = {this.state.results}></CardResult> }
      </div>
      </I18nProvider>
    );
  }
}
export default App;
