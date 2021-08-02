import React, {Component} from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import {Home} from "./Pages/Home"
import {Result}from './Pages/Result';
import { Dashboard } from './Pages/Dashboard';
import Sidebar from './Components/Sidebar';

import {I18nProvider, LOCALES} from './i18n';
import translate from './i18n/translate';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './Styles/DashboardStyles.css';
import test from './Pages/test';

export class App extends Component {
  
  render(){
    return (
      <Router>
        <I18nProvider locale={LOCALES.ESPAÑOL}>
          <div className ="Principal-container">
            <div className="partition">
              <div className ="sidebar">
                <Sidebar></Sidebar>
              </div>
              <div className="cuerpo-right">
                <div className="encabezado">
                  <div className='row'>
                    <div className='col-md-auto justify-content-center'>
                          <h4>{translate('nombre')}</h4> 
                      </div>   
                      <div className='col'>
                          <FormControlLabel
                                              value="top"
                                              control={<Switch color="default" 
              
                                                  />}
                                              label={"hola"}
                                              labelPlacement="top"
                                          />
                      </div>    
                    </div>
                  </div>
                  <div className="cuerpo">
                  <div className ="content">
                    <Route exact path='/' component={test}/>
                    <Route path='/result' component={Result}/>
                    <Route path='/home' component={Home}/>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </I18nProvider>
      </Router>
    );
  }
}
export default App;
