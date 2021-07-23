
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

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';



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
            listClassSecond:[],
            emptyInputClassFirst: false,
            emptyInputRelation: false,
            emptyInputClassSecond: false,
            language : "ENGLISH"
             
        }
    }


    componentDidMount (){
        const Url_Base = ConfigData.BASE_URL
        const resource = ConfigData.CLASSES_RESOURCE
        let result = []
        axios.get(Url_Base+resource)
        .then(response => {
            var ref = response.data.results.bindings
            result.push({value : -1, label : "Autor" })
            result.push({value : -2, label : "Challenges" })
            result.push({value : -3, label : "Motivations" })
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

/*************************************************/   
//Search botton handler
/*************************************************/ 

    handleQuery = (event) =>{
        event.preventDefault()

        if(this.state.relation === "" && this.state.classSecond === "" && this.state.classFirst === ""){
            this.setState({emptyInputClassFirst : true})
        }
        else if(this.state.classFirst !== "" && this.state.relation === "" && this.state.classSecond === ""){
            const Url_Base = ConfigData.BASE_URL
            const resource = ConfigData.INSTANCES_RESOURCE
            const obj = { classIn : this.state.classFirst}
            axios.post(Url_Base+resource, obj)
            .then(response => {
                console.log("La clase al hacer clic en buscar: ",this.state.classFirst)
                console.log("La Response al hacer clic", response.data.results.bindings)
                this.setState({results : response.data.results.bindings })
            })
        }

        else if(this.state.classFirst !== "" && this.state.relation !== "" && this.state.classSecond !== ""){
            console.log(`la consulta sencilla será: ${this.state.classFirst} ${this.state.relation} ${this.state.classSecond} `)
            const Url_Base = ConfigData.BASE_URL
            const resource = ConfigData.SEARCH_RESOURCE
            const obj = { classIn1 : this.state.classFirst, 
                relation : this.state.relation, 
                classIn2 : this.state.classSecond}
            console.log("el objeto armado consulta sencilla", obj)
            axios.post(Url_Base+resource, obj)
            .then(response => {
                console.log("La response al hacer clic en buscar sencilla: ",response)
                this.setState({results : response.data.results.bindings })
            })
        }

        else if(this.state.classFirst !== "" && this.state.classSecond !== "" && this.state.relation === ""){
            this.setState({emptyInputRelation : true})
        }
        else{
            this.setState({emptyInputClassSecond : true})
        }
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
// Input of class Second
/*****************************************************************************************/    
handleInputChangeClassSecond = (newValue) => {
    this.setState({emptyInputClassSecond : false})
    //const inputValue = newValue.toString().replace(/\W/g, '');
    this.setState({classSecond : newValue.label})
    console.log(`aqui Handle change ${JSON.stringify(newValue.label)}`)
}

/*****************************************************************************************/  
// Input of Relations
/*****************************************************************************************/
    handleInputChangeRelation = (newValue) => {
        //const inputValue = newValue.toString().replace(/\W/g, '');
        this.setState({emptyInputRelation : false})
        this.setState({relation : newValue.label.split(/\s/).join("")})
        console.log(`aqui Handle change ${JSON.stringify(newValue.label)}`)
    }

    filterRelations = (inputValue) => {
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
    this.setState({emptyInputClassFirst : false})
    console.log(`aqui Handle change ${JSON.stringify(newValue.label)}`)
    var classLabel = newValue.label.split(/\s/).join("")
    this.setState({classFirst : classLabel}, () => {
        const Url_Base = ConfigData.BASE_URL
        const resource = ConfigData.RELATIONS_RESOURCE
        const obj = { classIn : this.state.classFirst}
        var result =[]
        axios.post(Url_Base+resource, obj)
        .then( response =>{
            var temp = JSON.stringify(response.data.results.bindings)
            if(!(temp === JSON.stringify(ConfigData.NO_RESULT))){
                var ref = response.data.results.bindings
                for(let i = 0; i < ref.length;i++ ){
                    var newWord = ref[i].property.value.split(/(?=[A-Z])/).join(" ")
                    var element = { value : i, label : newWord}
                    result.push(element)
                }
                this.setState({listRelation : result});
            }else{
                this.setState({listRelation : []});

            }
        })
    }) 
    
}
    filterColors = (inputValue) => {
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
                                        {this.state.emptyInputClassFirst === true
                                        ?<label className="labelError">{translate('errorInputMsg')}</label>
                                        : <label></label>}
                                    </div>
                                    <div className="col">
                                        <label>{translate('relacion')}</label>
                                        <Select defaultOptions={this.state.listRelation} 
                                            onChange={this.handleInputChangeRelation} 
                                            isSearchable={true} 
                                            loadOptions={this.loadOptionsRelation}/>
                                        {this.state.emptyInputRelation === true
                                        ?<label className="labelError">{translate('errorInputMsgRelation')}</label>
                                        : <label></label>}
                                    </div>
                                    <div className="col">
                                        <label>{translate('clase')}</label>
                                        <Select defaultOptions={[{value: 1, label : "hola"}]}   
                                            onChange={this.handleInputChangeClassSecond} 
                                            isSearchable={true}
                                            loadOptions={this.loadOptions}/>
                                        {this.state.emptyInputClassSecond === true
                                        ?<label className="labelError">{translate('errorInputMsg')}</label>
                                        : <label></label>}
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
                                <FormControlLabel
                                    value="top"
                                    control={<Switch color="primary" 
                                        size="small"
                                        checked={this.state.language}/>}
                                    label="Top"
                                    labelPlacement="top"
                                />
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