import React, {Component} from 'react';
import { I18nProvider } from '../i18n';
import translate from '../i18n/translate';
import Doughnut from '../Components/Doughnut';
import ConfigData from '../Config/server.json';
import axios from 'axios';
import {Card} from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';

export class DonaDomainCompany extends Component{

    state ={
        dataDona : [],
        seeMoreG1 : false,
        details : []
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

        /* see more */
        var seeMore = {}
        array.forEach(function(item){
            if(!seeMore[item.Domain.value]){
                seeMore[item.Domain.value] = [item]
      
            }else{
                seeMore[item.Domain.value].push(item)
            } 
          });
        var seemore =[]
        for(var i in seeMore){
            seemore.push ({ domain : i , data : seeMore[i]})
        }
        console.log("esto es el detalle", seemore)
        this.setState({details:seemore})

          /* organiza */
        for (var j in arr){
        arrayLabels.push(j.split(/(?=[A-Z])/).join(" "))
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
                        <button onClick ={this.seeMoreG1} className="btn-primary-outline"> <label style={{fontSize: '12px'}}>{'<< '}{translate('verdetalle')}</label> </button >
                    </div>
                    {this.state.seeMoreG1
                            ? <Card>
                                <div style={{ padding : '2em', height : '200px', overflowY: 'scroll'}}>
                                <Card.Title>Empresas por dominio</Card.Title>
                                {this.state.details.length > 0 
                                ? this.state.details.map(item => (
                                    <div>
                                    <Card.Header>{item.domain.split(/(?=[A-Z])/).join(" ")}</Card.Header>
                                    <ListGroup> {item.data.map( detail => (
                                        <div>
                                        <ListGroup.Item>{<a href={detail.url.value} target="_blank" rel="noopener noreferrer">
                                        {detail.Company.value.split(/(?=[A-Z])/).join(" ")}
                                                                </a>}</ListGroup.Item>
                                        </div>
                                    ))}</ListGroup>
                                    </div>
                                ))
                                :<ListGroup> Sin Resultados </ListGroup>}
                                </div>
                            </Card>
                            : <label></label>

                    }   
                </div>
            </I18nProvider>
        )
    }
};

export default DonaDomainCompany;