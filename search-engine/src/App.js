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

import {I18nProvider} from './i18n';
import translate from './i18n/translate';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './Styles/PrincipalStyles.css';

/* Flags */
import es from './Images/colombia.png';
import ee from './Images/eeuu.png';

export class App extends Component {

  constructor(){
    super();
    this.state = {
      /* Language Handler */
      language : "ESPAÑOL",
      espanol : true,
      localLanguage : 'es-co',
    }

    this.changeChildLanguage = this.changeChildLanguage.bind(this);
  }

  /* Language */
  handleSwitchChange = (event) =>{
    if(event.target.checked === false){
        this.setState({language: "ENGLISH"})
        this.setState({espanol: event.target.checked})
        this.setState({localLanguage: 'en-us'})
    }else{
        this.setState({language: "ESPAÑOL"})
        this.setState({espanol: event.target.checked})
        this.setState({localLanguage: 'es-co'})
    }
  }

  changeChildLanguage() {
    this.setState(state => ({
      localLanguage: !state.localLanguage
    }));
 }
  
  render(){
    return (
      <Router>
        <I18nProvider locale={this.state.localLanguage}>
          <div className ="Principal-container">
            <div className="partition">
              <div className ="sidebar">
                <Sidebar la={this.state.localLanguage}></Sidebar>
              </div>
              <div className="cuerpo-right">
                <div className="encabezado">
                  <div className='row'>
                    <div className='col-md-auto justify-content-center align-self-center'>
                          <h4>{translate('nombre')}</h4> 
                      </div>   
                      <div className='col'>
                          <FormControlLabel
                                              value="top"
                                              control={<Switch color="default" 
                                              onChange={this.handleSwitchChange}
                                              checked={this.state.espanol}/>}
                                          />
                          { this.state.language === "ESPAÑOL"
                            ? <img src={es} alt="co" />
                            : <img src={ee} alt="co" /> }
                      </div>    
                    </div>
                  </div>
                  <div className="cuerpo">
                  <div className ="content">
                    <Route exact path='/' render = { (props) => (<Home la={this.state.localLanguage}/>)}/>
                    <Route path='/result' render = { (props) => (<Result la={this.state.localLanguage}/>)}/>
                    <Route path='/graphic' render = { (props) => (<Dashboard la={this.state.localLanguage}/>)}/>
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
