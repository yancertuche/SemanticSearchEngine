import React, {Component} from 'react';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import '../App.css';
import axios from 'axios';
import {CardResult} from './CardResult'
//import { CardSubtitle } from 'react-bootstrap/Card';

export class SearchBar extends Component{ 
  constructor(props){
    super(props)
      this.state={
      query : "",
      result : [],
      textButton :"",
      textPlaceholder :""
    }
  }

  handleQuery = (e) =>{
    console.log("el estado final " ,this.state.query)
    //axios.get('http://localhost:4000/getDoc?id='+this.state.query)
    axios.get('http://localhost:8080/API-JENA/resources/javaee8/response')
    .then(res => {
      console.log('esta es la promesa', res.data.results.bindings)
      this.setState(
        {result: res.data.results.bindings}
      );
      console.log('resultado', this.state.result)
    })
    .catch(error => {console.log('algo ha ocurrido')})
  }
  
  handleChange = (e) =>{
    e.preventDefault()
    this.setState({
      query: e.target.value
    });
    console.log( this.state.query)
  }

  render(){
    return (
      <MDBCol md="30">
        <MDBFormInline className="md-form mr-auto mb-4">
          <input style={{ width: "500px" }} type="text" placeholder={this.props.textPlaceholder} aria-label="Search" onChange={this.handleChange}/>
        </MDBFormInline>
        <MDBBtn gradient="aqua" rounded size="lg" type="submit" className="mr-auto" onClick={this.handleQuery}>
            {this.props.textButton}
          </MDBBtn>
          <CardResult crd={this.props.result}></CardResult>
      </MDBCol>
      
    )
  }
}

export default SearchBar;