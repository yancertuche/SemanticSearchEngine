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

    createStructure = (array) => {
        var arrayLabels = []
        var arrayValues = []
        /* ordena de menor a mayor */
        array.sort(function(a, b){
        if(a.countp.value < b.countp.value) return -1;
        if (a.countp.value > b.countp.value) return 1;
        })

        /* organiza */
        for (var j in array){
            arrayLabels.push(array[j].Benefit.value.split(/(?=[A-Z])/).join(" "))
            arrayValues.push(array[j].countp.value)
          }
        
        return [arrayLabels , arrayValues]
    }

    componentDidMount(){
        axios.get(ConfigData.BASE_URL+ConfigData.BENEFIT_SOURCE)
        .then(response =>{
            var a = this.createStructure(response.data.results.bindings)
            this.setState({dataDona : a})
        })
    }

    render(){
        return(
            <I18nProvider locale={this.props.la}>
                <div>
                    
                    <Hbar data={this.state.dataDona[1]} 
                    labels={this.state.dataDona[0]}
                    variable={"Papers"}
                    title ={translate('HbarTitleBenefits')}></Hbar>
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