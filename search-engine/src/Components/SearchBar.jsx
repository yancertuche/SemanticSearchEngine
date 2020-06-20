import React, {Component} from 'react';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import '../App.css';
import { render } from '@testing-library/react';

export class SearchBar extends Component{ 
  state={
    query : ""
  }

  handleQuery = (e) =>{
    console.log("el estado final " ,this.state.query)
    fetch('http://localhost:4000/pais?code='+this.state.query)
    .then(res => {
      console.log('esta es la promesa', res)
      console.log('este es la promesa json',res.json())})
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
          <input style={{ width: "500px" }} type="text" placeholder="Consulta" aria-label="Search" onChange={this.handleChange}/>
        </MDBFormInline>
        <MDBBtn gradient="aqua" rounded size="lg" type="submit" className="mr-auto" onClick={this.handleQuery}>
            Buscar
          </MDBBtn>
      </MDBCol>
    )
  }
}

export default SearchBar;