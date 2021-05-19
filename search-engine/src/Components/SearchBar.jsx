import React, {Component} from 'react';
import { MDBFormInline, MDBBtn, MDBIcon} from "mdbreact";

import '../App.css';
import axios from 'axios';


export class SearchBar extends Component{ 

  state={
    query : ""
  }

  handleQuery = (e) =>{
    e.preventDefault()
    console.log("el estado final " ,this.state.query)
    //axios.get('http://localhost:4000/getDoc?id='+this.state.query)
    axios.get('http://localhost:8080/API-JENA/resources/response/search/q='+this.state.query)
    .then(res => {
      console.log('la promesa', res)
      console.log('esta es la promesa accedida', res.data.results.bindings)
      this.props.onResults(res.data.results.bindings)
      //console.log('resultado en la search bar ', this.state.result)
      })
    //.then( result =>{
    //  console.log("RESPUESTA SEARCH BAR",result)
    //})

    .catch(error => {console.log('algo ha ocurrido', error)})
  }
  
  handleChange = (e) =>{
    e.preventDefault()
    this.setState({
      query: e.target.value
    });
    console.log( this.state.query)
  }

  render(){
    console.log("params", this.props)
    const x = this.props.textPlaceholder
    console.log("place", x)
    return (
          <div className="Search-bar-result-container">
            <div className="Inline-bar-result">
              
              <MDBFormInline className="md-form">
              <MDBIcon icon="search" />
                <input className="Input-bar" 
                        type="text"
                        onChange={this.handleChange}>
                </input>
                
              </MDBFormInline> 
            </div>
              <MDBBtn color="elegant" size="lg" type="submit" className="mr-auto" onClick={this.handleQuery}>
                {this.props.textButton}
              </MDBBtn>
          </div>
        
      )
  }
}

export default SearchBar;