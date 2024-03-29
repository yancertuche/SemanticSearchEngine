import React, {Component} from 'react';
import { I18nProvider } from '../i18n';
import translate from '../i18n/translate';
import Bar from '../Components/Bar';
import ConfigData from '../Config/server.json';
import axios from 'axios';
import {Card, ListGroup} from 'react-bootstrap';

export class BarTeamByCompany extends Component{

    state ={
        dataDona : [],
        seeMoreG1 : false,
        bigCompany : [],
        smallCompany :[],
        mediumCompany :[],
    }

    seeMoreG1 = () =>{
        if(this.state.seeMoreG1 === false){
            this.setState({seeMoreG1 : true})
        }
        if(this.state.seeMoreG1 === true){
            this.setState({seeMoreG1 : false})
        }
    }
    average = (arr) =>{
        if (arr.length > 0){
            var acum = 0
            arr.forEach(element => {
                acum += Number(element.Size.value)
            })
            console.log("el acum ", acum)
            var average = acum / Object.values(arr).length
            return average ; 
        }else{
            return 0
        }
        
    }

    createStructure =(array) =>{
        var BCompany=[]
        var SCompany=[]
        var MCompany=[]
        array.forEach(element => {
            if(element.CompanySize.value === "big"){
                BCompany.push(element)
            }else if(element.CompanySize.value === "small"){
                SCompany.push(element)
            }else{
                MCompany.push(element)
            }
        });

        this.setState({bigCompany : BCompany})
        this.setState({samllCompany : SCompany})
        this.setState({mediumCompany : MCompany})
        var ABCompany = this.average(BCompany)
        var ASCompany = this.average(SCompany)
        var AMCompany = this.average(MCompany)

        return [ASCompany, AMCompany, ABCompany]

    }

    
    componentDidMount(){
        axios.get(ConfigData.BASE_URL+ConfigData.TEAM_SOURCE)
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
                    <Bar LabelsBar ={ [" Small company (<10)", "Medium company (11-250)" , "Big company (>250)"]} 
                                    DataBar={this.state.dataDona}
                                    Var ={'Employees'}
                                    barTitle={translate('barTitleTeamByCompany')}></Bar> 
                    <div style={{ float: 'right'}}>
                        <button onClick ={this.seeMoreG1} className="btn-primary-outline"> <label style={{fontSize: '12px'}}>{'<< '}{translate('verdetalle')}</label> </button >
                    </div>
                    {this.state.seeMoreG1
                            ? <Card>
                                <div style={{ padding : '2em', height : '200px', overflowY: 'scroll'}}>
                                <Card.Title>{translate('Empresasportamaño')}</Card.Title>
                                <Card.Header>{translate('Empresasgrandes')}</Card.Header> 
                                <ListGroup>
                                {   this.state.bigCompany.length > 0 
                                    ?this.state.bigCompany.map(item =>(
                                            <div>
                                                <ListGroup.Item>{<a href={item.url.value} target="_blank" rel="noopener noreferrer">
                                                                {item.Company.value.split(/(?=[A-Z])/).join(" ")}
                                                                </a>}
                                                </ListGroup.Item> 
                                            </div>
                                        ))
                                    :<ListGroup>{translate('sinResultados')}</ListGroup>
                                }
                                </ListGroup>
                                <Card.Header>{translate('Empresasmedianas')}</Card.Header> 
                                <ListGroup>
                                {   this.state.mediumCompany.length > 0 
                                    ?this.state.mediumCompany.map(item =>(
                                            <div>
                                                <ListGroup.Item>{<a href={item.url.value} target="_blank" rel="noopener noreferrer">
                                                                {item.Company.value.split(/(?=[A-Z])/).join(" ")}
                                                                </a>}
                                                </ListGroup.Item> 
                                            </div>
                                        ))
                                    :<ListGroup>{translate('sinResultados')}</ListGroup>
                                }
                                </ListGroup>
                                <Card.Header>{translate('Empresaspeque')}</Card.Header> 
                                <ListGroup>
                                {   this.state.smallCompany.length > 0 
                                    ?this.state.smallCompany.map(item =>(
                                            <div>
                                                <ListGroup.Item>{<a href={item.url.value} target="_blank" rel="noopener noreferrer">
                                                                {item.Company.value.split(/(?=[A-Z])/).join(" ")}
                                                                </a>}
                                                </ListGroup.Item> 
                                            </div>
                                        ))
                                    :<ListGroup>{translate('sinResultados')}</ListGroup>
                                }
                                </ListGroup>
                                </div>
                            </Card>
                            : <label></label>

                    }   
                </div>
            </I18nProvider>
        )
    }
};

export default BarTeamByCompany;