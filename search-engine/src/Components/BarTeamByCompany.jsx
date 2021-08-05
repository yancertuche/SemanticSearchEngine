import React, {Component} from 'react';
import { I18nProvider } from '../i18n';
import translate from '../i18n/translate';
import Bar from '../Components/Bar';
import ConfigData from '../Config/server.json';
import axios from 'axios';
import {Card} from 'react-bootstrap';

export class BarTeamByCompany extends Component{

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
    }

    render(){
        return(
            <I18nProvider locale={this.props.la}>
                <div>
                    <Bar LabelsBar ={ ["Empresa Pequeña (<10)", "Empresa mediana (11-250)" , "Empresa grande (>250)"]} 
                                    DataBar={[2, 4, 10]}
                                    Var ={'Empleados'}
                                    barTitle={translate('barTitleTeamByCompany')}></Bar> 
                    <div style={{ float: 'right'}}>
                        <button onClick ={this.seeMoreG1} className="btn-primary-outline"> <label style={{fontSize: '12px'}}>{'<< '}Ver detalle</label> </button >
                    </div>
                    {this.state.seeMoreG1
                            ? <Card><p>hola akkadksaksa as</p> </Card>
                            : <label></label>

                    }   
                </div>
            </I18nProvider>
        )
    }
};

export default BarTeamByCompany;