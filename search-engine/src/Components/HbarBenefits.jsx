import React, {Component} from 'react';
import { I18nProvider } from '../i18n';
import translate from '../i18n/translate';
import Hbar from './Hbar';
import ConfigData from '../Config/server.json';
import axios from 'axios';
import {Card} from 'react-bootstrap';


export class HbarBenefits extends Component{

    state ={
        dataDona : [],
        seeMoreG1 : false
    }

    seeMoreG1 = () =>{
        if(this.state.seeMoreG1 === false){
            this.setState({seeMoreG1 : true})
        }
        if(this.state.seeMoreG1 === true){
            this.setState({seeMoreG1 : false})
        }
    }

    render(){
        return(
            <I18nProvider locale={this.props.la}>
                <div>
                    
                    <Hbar data={[2, 4]} 
                    labels={["benefivio", "beneficio "]}
                    variable={"benefit"}
                    title ={"Benenficios más reportados"}></Hbar>
                    <div style={{ float: 'right'}}>
                        <button onClick ={this.seeMoreG1} className="btn-primary-outline"> <label style={{fontSize: '12px'}}>{'<< '}Ver detalle</label> </button >
                    </div>
                    {this.state.seeMoreG1
                            ? <Card><p>hola akkadksaksa as</p> </Card>
                            : <label></label>
                    }
            
                </div> 
            </I18nProvider>
        )
    }
};

export default HbarBenefits;