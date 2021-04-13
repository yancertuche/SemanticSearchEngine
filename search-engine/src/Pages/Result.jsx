
import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import SearchBar from '../Components/SearchBar';


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
            <div>
                <SearchBar></SearchBar>
                <p>
                    Hola + {query}
                </p>
            </div>
        )
    }

}
export default withRouter(Result) ; 