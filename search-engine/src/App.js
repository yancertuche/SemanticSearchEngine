import React, {Component} from 'react';
import './App.css';


import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {I18nProvider, LOCALES} from './i18n';
import translate from './i18n/translate'
import CardResult from './Components/CardResult';
import { MDBBtn, MDBIcon } from "mdbreact";

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
      <I18nProvider locale={LOCALES.ESPAÑOL}>
      <div className="App">
        <br></br>
        <div className="Search">
          <h2 className="Title">
            {translate('nombre')}
          </h2>
          <br></br>
          <div>
            <div>
              <input className = "Input-home" type="text">
              </input>
            </div>
            <br></br>
            <MDBBtn color="elegant" size="lg" type="submit">
              <MDBIcon icon="search" className="mr-1" />
              {translate('buscar')} 
            </MDBBtn>
          </div>
          <br></br>
          {this.state.results.length === 0 
          ?<h3>
            {translate('por')} Yan Carlos Certuche Grueso
            </h3>
          : <CardResult crd = {this.state.results}></CardResult> }
        </div>
      </div>
      </I18nProvider>
    );
  }
}
export default App;
