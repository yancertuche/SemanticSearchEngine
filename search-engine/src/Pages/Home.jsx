import React, {Component} from 'react';
import puj from '../Images/logoPuj.png';
import reactImg from '../Images/logoReact.png';
import javaImg from '../Images/logoJava.png';
import '../App.css';

import {I18nProvider} from '../i18n';
import translate from '../i18n/translate'


export class Home extends Component {
  state = {
    query : ""
  }


  _handleClick =() =>{
    //console.log(this.state.query)
    this.props.history.push(`/result`);
    //this.props.history.push(`/q/${this.state.query}`);
  }

  _handleClick2 =() =>{
    this.props.history.push(`/graphics`);
  }

  /*_handleChange = (e) =>{
    this.setState({
      query: e.target.value
    }); 
  }*/
  
  render(){
    return (
      <I18nProvider locale={this.props.la}>
      <div className="App">
              <br></br>
              <div className="Search">
                <h2 className="Title">
                  {translate('nombre')}
                </h2>
                <br></br>
                  <div>
                      {/*<div>
                        <input className = "Input-home" type="text" onChange={this._handleChange}>
                        </input>
                      </div> 
                      <br></br>
                        <MDBBtn color="elegant" size="lg" type="submit" onClick={this._handleClick2}>
                            {translate('explora')} 
                            <br></br>
                            <MDBIcon icon="arrow-right" className="mr-1" />
                        </MDBBtn>
                        <MDBBtn color="elegant" size="lg" type="submit" onClick={this._handleClick}>
                            {translate('avanzada')} 
                            <br></br>
                            <MDBIcon icon="arrow-right" className="mr-1" />
                        </MDBBtn>
                        */}
                  </div>
                <br></br>
                <h4> {translate('por')} Yan Carlos Certuche Grueso </h4>
                <br></br>
              </div>
              <div className="logos"> 
                  <img src={puj} alt="Italian Trulli" width='60px' height='80px'/>
                  <img src={reactImg} alt="Italian Trulli" width='60px' height='60px'/>
                  <img src={javaImg} alt="Italian Trulli" width='60px' height='90px'/>
              </div>
      </div>
      </I18nProvider>
    );
  }
}
export default Home;