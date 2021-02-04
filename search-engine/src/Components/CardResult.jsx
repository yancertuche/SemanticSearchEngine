import React, {Component} from 'react';
//import { Card, CardContent } from '@material-ui/core';

export class CardResult extends Component{

    _renderConcurrencies() {
        const {crd} =this.props
        if(crd){
            console.log("dentro de la card" + crd)

            return Object.keys(crd).map(currency => (
                <div key={currency}> 
                        <h1> {crd[currency][0] || "nada"}</h1>
                        <h1>{crd[currency][1] || "nada"}</h1>
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