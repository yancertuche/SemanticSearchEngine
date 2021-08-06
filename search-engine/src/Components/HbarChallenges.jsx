import React, {Component} from 'react';
import { I18nProvider } from '../i18n';
import translate from '../i18n/translate';
import Hbar from './Hbar';
import ConfigData from '../Config/server.json';
import axios from 'axios';
import {Card} from 'react-bootstrap';


export class HbarChallenges extends Component{

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

    createStructure = (array) =>{
        var arrayLabels = []
        var arrayValues = []
        var arr = []
        
        /* cuenta */
        array.forEach(element => {
            if(!arr[element.Challenge.value]){
                arr[element.Challenge.value] = 1
            }else{
                arr[element.Challenge.value] += 1
            }
        });
        
        /* ordena de menor a mayor */
        arr.sort(function(a, b){
            console.log("estos son a y b ", a , b)
            if(a < b) return -1;
            if (a > b) return 1;
        })
    
        /* organiza */
        for (var j in arr){
            arrayLabels.push(j.split(/(?=[A-Z])/).join(" "))
            arrayValues.push(arr[j])
          }
        
        return [arrayLabels , arrayValues]
    }

    componentDidMount(){
        axios.get(ConfigData.BASE_URL+ConfigData.CHALLENGE_SOURCE)
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
                    variable={"challenge"}
                    title ={translate('HbarTitleChallenge')}></Hbar>
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

export default HbarChallenges;