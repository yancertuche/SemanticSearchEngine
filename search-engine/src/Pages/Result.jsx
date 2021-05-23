
import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import SearchBar from '../Components/SearchBar';
import Doughnut from '../Components/Doughnut';
import Bar from '../Components/Bar';
import Line from '../Components/Line';
import '../Styles/ResultStyles.css';

import {I18nProvider, LOCALES} from '../i18n';
import translate from '../i18n/translate'
import CardResult from '../Components/CardResult';


export class Result extends Component{
    constructor(){
        super();
        this.handleResult=this.handleResult.bind(this)
        this.state = {
            param : "", 
            results : [],
            dataBar : []
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
        for (var i in sorteable){
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

    componentDidMount(){
        this.setState({param: this.props.match.params})
        console.log("aqui se monto con" + this.state.param)
    }

    render(){
        const {query} = this.state.param
        //this.setState({param:query})
        return(
            <I18nProvider locale={LOCALES.ESPAÑOL}>
                <div className="Result-container">
                    <div className="Container">
                        <div className="row">
                            <div className="col">
                                <SearchBar onResults={this.handleResult.bind(this)} textButton={translate('buscar')}></SearchBar>
                            </div>
                            <div className="col">
                                <h2 className="Title">
                                    {translate('nombre')}
                                </h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="Card-container">
                                    { this.state.results.length === 0 
                                    ? <p>Sin resultados :resultados parametros {query}</p>
                                    : <CardResult crd={this.state.results}></CardResult>}
                                </div>
                            </div>
                            <div className="col">
                                <div className="Graphic-container">
                                <Bar LabelsBar ={ this.state.dataBar[0] } 
                                    DataBar={this.state.dataBar[1]}
                                    Variable ={"Apariciones"}></Bar>
                                </div>
                                <div className="Graphic-container">
                                <Doughnut LabelsDo ={['Advantages','Tools','Results',]} DataDo={[300, 50, 100]}></Doughnut>
                                </div>
                                <div className="Graphic-container">
                                <Line DataLine ={[65, 59, 80, 81, 56, 55, 40]}
                                    Variable ={"Algo xd"}></Line>
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