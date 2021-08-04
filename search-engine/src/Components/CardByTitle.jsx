import React, {Component} from 'react';
import { Card} from 'react-bootstrap';
import { MDBIcon } from "mdbreact";
import '../Styles/CardByTitleStyles.css';
import { I18nProvider } from '../i18n';
import translate from '../i18n/translate';

export class CardByTitle extends Component{
    render(){
        return(
            <I18nProvider  locale={this.props.la}>
            <div className="in-card">
              { this.props.data.map( item => (
                <Card>
                      <Card.Body>
                        <div className="icon-label-text-container">
                          <div className="icon-text-partition">
                            <div className="icon-partition">
                              <MDBIcon size ="2x" icon="file-alt" />
                            </div>
                            <div className="text-partition">
                              <Card.Title>{translate('articulo')}</Card.Title>
                              <h5> {item.Title}</h5>
                            </div>
                          </div>
                          <div className="icon-text-partition">
                            <div className="icon-partition">
                              <MDBIcon size ="2x" icon="user" />
                            </div>
                            <div className="text-partition">
                              <Card.Title>{translate('autor')}</Card.Title>
                              <h5>{item.Autors.join(" , ").split(/(?=[A-Z])/).join(" ")}</h5>
                            </div>
                          </div>
                          <div className="ano-link-container">
                            <div className="ano-container">
                              <div className="icon-text-partition">
                                <div className="icon-partition">
                                  <MDBIcon size ="2x" icon="calendar" />
                                </div>
                                <div className="text-partition">
                                  <Card.Title>{translate('año')}</Card.Title>
                                  <h5>{item.year}</h5>
                                </div>
                              </div>
                            </div>
                            <div className="icon-text-partition">
                              <div className="icon-partition">
                                <MDBIcon size ="2x" icon="external-link-alt" />
                              </div>
                              <div className="text-partition">
                                <Card.Title>{translate('link')}</Card.Title>
                                <h5> {<a href={item.url} target="_blank" rel="noopener noreferrer">
                                        <h6>{translate('source')}</h6>
                                    </a>}</h5>
                              </div>
                            </div>
                          </div>              
                        </div>
                      </Card.Body>
                </Card>
              ))}   
            </div>
            </I18nProvider>

        )
    }
}
export default CardByTitle;