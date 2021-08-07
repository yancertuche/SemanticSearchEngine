import React, {Component} from 'react';
import { I18nProvider } from '../i18n';
import translate from '../i18n/translate';
import Doughnut from '../Components/Doughnut';
import ConfigData from '../Config/server.json';
import axios from 'axios';
import {Card} from 'react-bootstrap';

export class DonaDomainCompany extends Component{

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
        var arr = {}
        array.forEach(function(item){
          if(!arr[item.Domain.value]){
            arr[item.Domain.value] = 1
    
          }else{
            arr[item.Domain.value] += 1
          } 
        });

          /* organiza */
        for (var j in arr){
        arrayLabels.push(j)
        arrayValues.push(arr[j])
        }

        return  [arrayLabels , arrayValues]
    }
    
    componentDidMount(){
        /******************************************************************/  
        /* GRAPHICS*/
        /******************************************************************/
        /* DONA  */
        
        axios.get(ConfigData.BASE_URL+ConfigData.DOMAIN_SOURCE)
        .then( response => {
            var a = this.createStructure(response.data.results.bindings)
            this.setState({dataDona : a})
        })
        .catch(error => console.log(error))
    }

    render(){
        return(
            <I18nProvider locale={this.props.la}>
                <div>
                    <Doughnut LabelsDo ={this.state.dataDona[0]}
                        DataDo={this.state.dataDona[1]}
                        donaTitle={translate('donaTitleDomainCompany')}>
                    </Doughnut>
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

export default DonaDomainCompany;