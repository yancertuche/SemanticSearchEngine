
import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import SearchBar from '../Components/SearchBar';
import Doughnut from '../Components/Doughnut';
import Bar from '../Components/Bar';
import Line from '../Components/Line';
import '../Styles/ResultStyles.css';

import {I18nProvider, LOCALES} from '../i18n';
import translate from '../i18n/translate'


export class Result extends Component{
    state ={
        param : ""
    }
    componentWillMount(){
        this.setState({param: this.props.match.params})
    }

    render(){
        const {query} = this.state.param
        return(
            <I18nProvider locale={LOCALES.ESPAÑOL}>
                <div className="Result-container">
                    <div className="Container">
                        <div className="row">
                            <div className="col">
                                <SearchBar textButton={translate('buscar')}></SearchBar>
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
                                    resultados parametros {query}
                                </div>
                            </div>
                            <div className="col">
                                <div className="Graphic-container">
                                <Line></Line>
                                </div>
                                <div className="Graphic-container">
                                <Bar></Bar>
                                </div>
                                <div className="Graphic-container">
                                <Doughnut></Doughnut>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </I18nProvider>
        )
    }

}
export default withRouter(Result) ; 