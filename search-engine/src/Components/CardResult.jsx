import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import '../Styles/CardResultStyles.css';

export class CardResult extends Component{

    _renderConcurrencies() {
        const {crd} =this.props
        
        if(crd){
            console.log("dentro de la card" ,crd.length, typeof(crd),  JSON.stringify(crd[0]))
            crd.map(currency => (console.log(currency)))
            

            return  crd.map(currency => (
                <div className="cardResult" > 
                {currency.Instance.value === "No Results" 
                    ?<Card className="cardInside">
                        <Card.Text>{currency.Instance.value}</Card.Text>
                    </Card>
                    :<Card className="cardInside">
                        {Object.entries(currency).map( label => (
                            label[0] === "url" || label[0] === "UrlObjRelated"
                            ? <a href={label[1].value} target="_blank" rel="noopener noreferrer">
                                <Card.Text>Clic aqui para ir a la fuente</Card.Text>
                            </a>
                            :<Card.Text><b>{label[0].split(/(?=[A-Z])/).join(" ")}</b> : {label[1].value}</Card.Text>
                        ))}
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
            <div>
                {this._renderConcurrencies()}
            </div>
        )
    }
}
export default CardResult;