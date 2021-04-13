
import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import SearchBar from '../Components/SearchBar';
import Doughnut from '../Components/Doughnut';
import Bar from '../Components/Bar';
import Line from '../Components/Line';
import '../Styles/ResultStyles.css';



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
                <div className="Result-container">
                    <div className="Container">
                        <div className="row">
                            <div className="col">
                                <SearchBar></SearchBar>
                            </div>
                            <div className="col">
                                <h4>nombre del buscador</h4>
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
                                <Doughnut></Doughnut>
                                </div>
                                <div className="Graphic-container">
                                <Line></Line>
                                </div>
                                <div className="Graphic-container">
                                <Bar></Bar>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

}
export default withRouter(Result) ; 