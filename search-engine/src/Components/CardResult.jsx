import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import { MDBIcon } from "mdbreact";
import '../Styles/CardResultStyles.css';
import { I18nProvider } from '../i18n';
import translate from '../i18n/translate';

export class CardResult extends Component{

    _renderConcurrencies() {
        const {crd} =this.props
        
        if(crd){
            console.log("dentro de la card" ,crd.length, typeof(crd),  JSON.stringify(crd[0]))
            crd.map(currency => (console.log(currency)))
            

            return  crd.map(currency => (
                <div className="cardResult" > 
                {currency.Instance.value === "No Results" 
                    ?<Card >
                        <Card.Body>
                        <Card.Text>{currency.Instance.value}</Card.Text>
                        </Card.Body>
                    </Card>
                    :<Card >
                        <Card.Body>
                        {Object.entries(currency).map( label => {
                            if (label[0] === 'Name' || label[0] === 'NameAutor' ){
                                return <div className="icon-text-partition">
                                            <div className="icon-partition">
                                                <MDBIcon size ="2x" icon="user" />
                                            </div>
                                            <div>
                                                <Card.Title>{label[1].value}</Card.Title>
                                                <Card.Text>{label[0].split(/(?=[A-Z])/).join(" ")}</Card.Text>
                                            </div>
                                        </div>
                            }
                            if (label[0] === 'TitleObjRelated' || label[0] === 'Title'){
                                return <div className="icon-text-partition">
                                            <div className="icon-partition">
                                                <MDBIcon size ="2x" icon="book" />
                                            </div>
                                            <div>
                                                <Card.Title>{label[1].value}</Card.Title>
                                                <Card.Text>{label[0].split(/(?=[A-Z])/).join(" ")}</Card.Text>
                                            </div>
                                        </div>
                            }
                            if(label[0] === "url" || label[0] === "UrlObjRelated"){
                                return <div className="icon-text-partition"> 
                                                <div className="icon-partition">
                                                    <MDBIcon size ="2x" icon="external-link-alt" />
                                                </div>
                                                <a href={label[1].value} target="_blank" rel="noopener noreferrer">
                                                
                                                    <div>
                                                        <Card.Title>{translate('Clic aqui para ir a la fuente')}</Card.Title>
                                                    </div>
                                                </a>
                                        </div>
                            }
                            if (label[0] === 'Year'|| label[0] === 'YearObjRelated' ){
                                return <div className="icon-text-partition">
                                            <div className="icon-partition">
                                                <MDBIcon size ="2x" icon="calendar" />
                                            </div>
                                            <div>
                                                <Card.Title>{label[1].value}</Card.Title>
                                                <Card.Text>{label[0].split(/(?=[A-Z])/).join(" ")}</Card.Text>
                                            </div>
                                        </div>
                            }
                            if (label[0] === 'Description'|| label[0] === 'DescriptionObjRelated' ){
                                return <div className="icon-text-partition">
                                            <div className="icon-partition">
                                                <MDBIcon size ="2x" icon="align-left" />
                                            </div>
                                            <div>
                                                <Card.Title>{label[1].value}</Card.Title>
                                                <Card.Text>{label[0].split(/(?=[A-Z])/).join(" ")}</Card.Text>
                                            </div>
                                        </div>
                            }
                            if (label[0] === 'Instance' ){
                                return <div>
                                            <div>
                                                <Card.Header>
                                                    <Card.Title>{label[1].value.split(/(?=[A-Z])/).join(" ")}</Card.Title>
                                                    {/*<Card.Text>{label[0].split(/(?=[A-Z])/).join(" ")}</Card.Text>*/}
                                                </Card.Header>
                                                
                                            </div>
                                        </div>
                            }
                            if (label[0] === 'NameCompany' ){
                                return <div className="icon-text-partition">
                                            <div className="icon-partition">
                                                <MDBIcon size ="2x" icon="industry" />
                                            </div>
                                            <div>
                                                <Card.Title>{label[1].value}</Card.Title>
                                                <Card.Text>{label[0].split(/(?=[A-Z])/).join(" ")}</Card.Text>
                                            </div>
                                        </div>
                            }
                
                        })}
                        </Card.Body>
                    </Card>
                }
                </div>
            ))
        
        }
        else{
            return(
                <div>Nada</div>
            )
        }
    }

    render(){
        return (
            <I18nProvider  locale={this.props.la}>
            <div>
                {this._renderConcurrencies()}
            </div>
            </I18nProvider>
        )
    }
}
export default CardResult;