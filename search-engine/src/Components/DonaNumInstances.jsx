import React, {Component} from 'react';
import { I18nProvider } from '../i18n';
import translate from '../i18n/translate';
import Doughnut from '../Components/Doughnut';
import ConfigData from '../Config/server.json';
import axios from 'axios';
import {Card} from 'react-bootstrap';

export class DonaNumInstances extends Component{

    state ={
        dataDona : [],
        seeMoreG1 : false
    }

    seeMoreG1 = () =>{
        if(this.state.seeMoreG1 === false){
            this.setState({seeMoreG1 : true})
        }
        if(this.state.seeMoreG1 === true){
            this.setState({seeMoreG1 : false})
        }
    }

    
    componentDidMount(){
        /******************************************************************/  
        /* GRAPHICS*/
        /******************************************************************/
        /* DONA  */
        
        axios.get(ConfigData.BASE_URL+ConfigData.DONA_RESOURCE)
        .then( response => {
            console.log(response)
            var refe = response.data.results.bindings
            var data = []
            var names = []
            var count = []
            for(var i=0; i < refe.length; i++){
                names.push(refe[i].NameClass.value)
                count.push(refe[i].counter.value)
            }
            data.push(names)
            data.push(count)
            this.setState({dataDona : data})

        })
        .catch(error => console.log(error))
    }

    render(){
        return(
            <I18nProvider locale={this.props.la}>
                <div>
                    <Doughnut LabelsDo ={this.state.dataDona[0]}
                        DataDo={this.state.dataDona[1]}
                        donaTitle={translate('donaTitle')}>
                    </Doughnut>
                    <button onClick ={this.seeMoreG1} className="btn-primary-outline"> <h6>Ver detalle</h6> </button >
                    {this.state.seeMoreG1
                            ? <Card><p>hola</p> </Card>
                            : <label></label>

                    }   
                </div>
            </I18nProvider>
        )
    }
};

export default DonaNumInstances;