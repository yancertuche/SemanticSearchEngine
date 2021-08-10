import React, {Component} from 'react';
import { I18nProvider } from '../i18n';
import translate from '../i18n/translate';
import Hbar from './Hbar';
import ConfigData from '../Config/server.json';
import axios from 'axios';
import {Card, ListGroup} from 'react-bootstrap';


export class HbarChallenges extends Component{

    state ={
        dataDona : [],
        seeMoreG1 : false,
        details :[]
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
        /* see more */
        var seeMore = {}
        array.forEach(function(item){
            if(!seeMore[item.Challenge.value]){
                seeMore[item.Challenge.value] = [item]
        
            }else{
                seeMore[item.Challenge.value].push(item)
            } 
            });
        var seemore =[]
        for(var i in seeMore){
            seemore.push ({ challenge : i , data : seeMore[i]})
        }
        console.log("esto es el detalle", seemore)
        this.setState({details:seemore})
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
                    variable={"Papers"}
                    title ={translate('HbarTitleChallenge')}></Hbar>
                    <div style={{ float: 'right'}}>
                        <button onClick ={this.seeMoreG1} className="btn-primary-outline"> <label style={{fontSize: '12px'}}>{'<< '}{translate('verdetalle')}</label> </button >
                    </div>
                    {this.state.seeMoreG1
                            ? <Card>
                            <div style={{ padding : '2em', height : '200px', overflowY: 'scroll'}}>
                            <Card.Title>Empresas por reto reportado</Card.Title>
                            {this.state.details.length > 0 
                            ? this.state.details.map(item => (
                                <div>
                                <Card.Header>{item.challenge.split(/(?=[A-Z])/).join(" ")}</Card.Header>
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

export default HbarChallenges;