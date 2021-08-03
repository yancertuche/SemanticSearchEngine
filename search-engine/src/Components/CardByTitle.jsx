import React, {Component} from 'react';
import { Card} from 'react-bootstrap';
import { MDBIcon } from "mdbreact";
import '../Styles/CardByTitleStyles.css'

export class CardByTitle extends Component{
    render(){
        return(
            <div className="in-card">
                <Card>
                      <Card.Body>
                        <div className="icon-label-text-container">
                          <div className="icon-text-partition">
                            <div className="icon-partition">
                              <MDBIcon size ="2x" icon="file-alt" />
                            </div>
                            <div className="text-partition">
                              <Card.Title>Título</Card.Title>
                              <h5> el título del doc</h5>
                            </div>
                          </div>
                          <div className="icon-text-partition">
                            <div className="icon-partition">
                              <MDBIcon size ="2x" icon="user" />
                            </div>
                            <div className="text-partition">
                              <Card.Title>Autores</Card.Title>
                              <h5> ator1, autor 2</h5>
                            </div>
                          </div>
                          <div className="ano-link-container">
                            <div className="ano-container">
                              <div className="icon-text-partition">
                                <div className="icon-partition">
                                  <MDBIcon size ="2x" icon="calendar" />
                                </div>
                                <div className="text-partition">
                                  <h5> año</h5>
                                  <Card.Title>Año</Card.Title>
                                </div>
                              </div>
                            </div>
                            <div className="icon-text-partition">
                              <div className="icon-partition">
                                <MDBIcon size ="2x" icon="external-link-alt" />
                              </div>
                              <div className="text-partition">
                                <Card.Title>Enlace</Card.Title>
                                <h5> enlace</h5>
                              </div>
                            </div>
                          </div>              
                        </div>
                      </Card.Body>
                </Card>   
            </div>

        )
    }
}
export default CardByTitle;