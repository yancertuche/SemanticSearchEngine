import React, {Component} from 'react';
import {Card} from 'react-bootstrap'
//import { Card, CardContent } from '@material-ui/core';

export class CardResult extends Component{

    state={
        contador : 0
    }
    
    _next = (a) => {
        var sigue = a + 1
        this.setState({contador : sigue})
        return sigue
    }

    _renderConcurrencies() {
        const {crd} =this.props
        
        if(crd){
            console.log("dentro de la card" ,crd.length, typeof(crd),  JSON.stringify(crd[0]))
            crd.map(currency => (console.log(currency)))
            

            return  crd.map(currency => (
                <div key={1} style={{marginBottom: '20px'}} > 
                <Card>
                        <Card.Text>{JSON.stringify(currency.Uri.value)}</Card.Text>
                        <Card.Text>{JSON.stringify(currency.Report.value)}</Card.Text>
                        <a href={currency.Url.value} target="_blank">
                        <Card.Text>Clic aqui para ir a la fuente</Card.Text>
                        </a>

                </Card>
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