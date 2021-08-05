import React, {Component} from 'react';
import ReactWordcloud from 'react-wordcloud';
 

export class wordCloud extends Component{
    render(){
        return(
            <div>
             <ReactWordcloud words={this.props.data} />
            </div>
             )
    }
  
};

export default wordCloud;