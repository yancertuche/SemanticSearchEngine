
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
            results : []
        }
    }
    
    handleResult = (results) => {
        this.setState({results})
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
                                <Bar LabelsBar ={["Autor1", "Autor2", "Autor3"]} DataBar={[1, 2, 3]}></Bar>
                                </div>
                                <div className="Graphic-container">
                                <Doughnut LabelsDo ={['Advantages','Tools','Results',]} DataDo={[300, 50, 100]}></Doughnut>
                                </div>
                                <div className="Graphic-container">
                                <Line></Line>
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