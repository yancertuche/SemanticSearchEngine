import React from "react";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import '../App.css';

const SearchBar = () => {
  return (
    <MDBCol md="30">
      <MDBFormInline className="md-form mr-auto mb-4">
        <input className="form-control form-control-sm ml-40 w-75" type="text" placeholder="Consulta" aria-label="Search" />
      </MDBFormInline>
      <MDBBtn gradient="aqua" rounded size="lg" type="submit" className="mr-auto">
          Buscar
        </MDBBtn>
    </MDBCol>
  );
}

export default SearchBar;