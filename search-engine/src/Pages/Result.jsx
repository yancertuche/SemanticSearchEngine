
import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import Doughnut from '../Components/Doughnut';
import Bar from '../Components/Bar';
import Line from '../Components/Line';
import '../Styles/ResultStyles.css';
import Select from 'react-select/async';
import {MDBBtn} from "mdbreact";

import {I18nProvider, LOCALES} from '../i18n';
import translate from '../i18n/translate'
import CardResult from '../Components/CardResult';
import ConfigData from '../Config/server.json';
import axios from 'axios';



export class Result extends Component{
    constructor(){
        super();
        this.handleResult=this.handleResult.bind(this)
        this.state = { 
            results : [],
            dataBar : [],
            classFirst: "",
            classSecond: "",
            relation:"",
            listClassFirst:[],
            listRelation:[],
            listClassSecond:[]
             
        }
    }


    componentDidMount (){
        const Url_Base = ConfigData.BASE_URL
        const resource = ConfigData.CLASSES_RESOURCE
        let result = []
        axios.get(Url_Base+resource)
        .then(response => {
            var ref = response.data.results.bindings
            for(let i = 0; i < ref.length;i++ ){
                var newWord = ref[i].labelSubClass.value.toString().split(/(?=[A-Z])/).join(" ")
                var element = { value : i, label : newWord}
                result.push(element)
            }
            this.setState({listClassFirst : result});
            console.log(result)
        })
        .catch(error => console.log(error))
    }

    handleQuery = (event) =>{
        event.preventDefault()
        const Url_Base = ConfigData.BASE_URL
        const resource = ConfigData.INSTANCES_RESOURCE
        const obj = { classIn : this.state.classFirst}
        axios.post(Url_Base+resource, obj)
        .then(response => {
            console.log(this.state.classFirst)
            console.log(response.data.results.bindings)
            this.setState({results : response.data.results.bindings })
        })  
    }

    principalAutors = ( arrAutor ) =>{
        var holi, sorteable, aut, num
        holi = arrAutor.reduce((accumulator, currentValue) => {
            !accumulator[currentValue] ? accumulator[currentValue] = 1 : accumulator[currentValue]++
            return accumulator
            }, {})
        sorteable =[]
        for (var i in holi){
            sorteable.push([i, holi[i]])
        }
        sorteable.sort(function(a, b) {
            return a[1] - b[1];
        });

        sorteable = sorteable.reverse().slice(0,5)
        aut =[]
        num =[]
        for ( i in sorteable){
            console.log("esto es i", i)
            aut.push(sorteable[i][0])
            num.push(sorteable[i][1])
        }
        return [aut, num]
    }
    
    handleResult = (results) => {
        var arrAutor = []
        for(var i = 0 ; i < results.length ; i++ ){
         arrAutor.push(results[i].NameAutor.value)
        }
        arrAutor = this.principalAutors(arrAutor)
        console.log("asi llega para BAR", arrAutor)
        this.setState({results : results, dataBar : arrAutor})
    } 

/*****************************************************************************************/  
// Input of Relations
/*****************************************************************************************/
    handleInputChangeRelation = (newValue) => {
        const inputValue = newValue.toString().replace(/\W/g, '');
        this.setState({relation : newValue.label})
        console.log(`aqui Handle change ${JSON.stringify(newValue.label)}`)
    }

    filterRelations = (inputValue) => {
        {/*const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }]*/}
        return this.state.listRelation.filter(i =>
          i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
      };

    loadOptionsRelation = (inputValue, callback) => {
    setTimeout(() => {
        callback(this.filterRelations(inputValue));
    }, 1000);
    };
/*****************************************************************************************/  
// Input of Class first
/*****************************************************************************************/

handleInputChange = (newValue) => {
    console.log(`aqui Handle change ${JSON.stringify(newValue.label)}`)
    var classLabel = newValue.label.split(/\s/).join("")
    this.setState({classFirst : classLabel}, () => {
        const Url_Base = ConfigData.BASE_URL
        const resource = ConfigData.RELATIONS_RESOURCE
        const obj = { classIn : this.state.classFirst}
        console.log("el body", obj)
        var result =[]
        axios.post(Url_Base+resource, obj)
        .then( response =>{
            if(response.data.results.bindings.instance !== undefined ){
                var ref = response.data.results.bindings
                for(let i = 0; i < ref.length;i++ ){
                    console.log("la response al traer las relaciones de la clase", response)
                    var newWord = ref[i].property.value.split(/(?=[A-Z])/).join(" ")
                    var element = { value : i, label : newWord}
                    result.push(element)
                }
                this.setState({listRelation : result});
                console.log(this.state.listRelation)
            }else{
                this.setState({listRelation : []});

            }
        })
    }) 
    
}
    filterColors = (inputValue) => {
        {/*const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }]*/}
        return this.state.listClassFirst.filter(i =>
          i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
      };

    loadOptions = (inputValue, callback) => {
        setTimeout(() => {
          callback(this.filterColors(inputValue));
        }, 1000);
      };

    render(){
        return(
            <I18nProvider locale={LOCALES.ENGLISH}>
                <div className="Result-container">
                    <div className="Container">
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <label>{translate('clase')}</label>
                                        <Select defaultOptions={this.state.listClassFirst}
                                            onChange={this.handleInputChange}
                                            isSearchable={true}
                                            loadOptions={this.loadOptions}
                                            />
                                    </div>
                                    <div className="col">
                                        <label>{translate('relacion')}</label>
                                        <Select defaultOptions={this.state.listRelation} 
                                            onChange={this.handleInputChangeRelation} 
                                            isSearchable={true} 
                                            loadOptions={this.loadOptionsRelation}/>
                                    </div>
                                    <div className="col">
                                        <label>{translate('clase')}</label>
                                        <Select defaultOptions={[{value: 1, label : "hola"}]}   
                                            onChange={this.handleInputChange} 
                                            isSearchable={true}
                                            loadOptions={this.loadOptions}/>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="btn-search">
                                        <MDBBtn color="elegant"  type="submit" className="mr-auto" onClick={this.handleQuery.bind(this)}>
                                        {translate('buscar')}
                                        </MDBBtn>
                                        {/*<SearchBar onResults={this.handleResult.bind(this)} textButton={translate('buscar')}></SearchBar> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <h2 className="Title">
                                    {translate('nombre')}
                                </h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <br></br>
                                <div className="Card-container">
                                    { this.state.results.length === 0 
                                    ? <p><b>{translate('bienvenido')}</b> , {translate('resultadosMsg')}</p>
                                    : <CardResult crd={this.state.results}></CardResult>}
                                </div>
                            </div>
                            <div className="col">
                                <div className="Graphic-container">
                                <Bar LabelsBar ={ this.state.dataBar[0] } 
                                    DataBar={this.state.dataBar[1]}
                                    Var ={'Variable'}
                                    barTitle={translate('barTitle')}></Bar>
                                </div>
                                <div className="Graphic-container">
                                <Doughnut LabelsDo ={['AUTOR','METHODOLOGIES','PRODUCTS',]}
                                     DataDo={[14, 10, 8]}
                                     donaTitle={translate('donaTitle')}></Doughnut>
                                </div>
                                <div className="Graphic-container">
                                <Line DataLine ={[]}
                                    Variable ={"año"}
                                    lineTitle={translate('lineTitle')}></Line>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </I18nProvider>
        )
    }

}
export default withRouter(Result); 