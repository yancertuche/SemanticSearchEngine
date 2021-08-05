import React, {Component} from 'react';
import Bar from '../Components/Bar';
import Line from '../Components/Line';
import {I18nProvider} from '../i18n';
import translate from '../i18n/translate';
import {Card} from 'react-bootstrap';
import '../Styles/DashboardStyles.css';
import ReactWordcloud from 'react-wordcloud';
import DonaNumInstances from '../Components/DonaNumInstances';
import HbarBenefits from '../Components/HbarBenefits';
import DonaDomainCompany from '../Components/DonaDomainCompany';


export class Dashboard extends Component {
    state ={
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

    render(){
        return (
            <I18nProvider locale={this.props.la}>
                <div className="Dash-container">
                    <div className="top-container">
                        <div className="each-container">
                            <div className="G-container">
                                <HbarBenefits  la={this.props.la} ></HbarBenefits>
                            </div>
                        </div>
                        <div className="each-container">
                            <div className="G-container">
                                <Bar LabelsBar ={ ["Empresa Pequeña (<10)", "Empresa mediana (11-250)" , "Empresa grande (>250)"]} 
                                            DataBar={[2, 4, 10]}
                                            Var ={'Empleados'}
                                            barTitle={translate('barTitle')}></Bar>         
                            </div>
                        </div>
                        <div className="each-container">
                            <div className="G-container">
                                <DonaDomainCompany la={this.props.la}></DonaDomainCompany>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-container">
                        <div className="each-container">
                            <div className="G-container">
                                <h4>Nube de Palabra</h4>
                                <ReactWordcloud words={[
                                                {
                                                    text: 'told',
                                                    value: 64,
                                                },
                                                {
                                                    text: 'mistake',
                                                    value: 20,
                                                }]} size={[400,260]}>
                                </ReactWordcloud >
                            </div>
                        </div>
                        <div className="each-container">
                            <div className="G-container">
                           
                                <DonaNumInstances la={this.props.la}></DonaNumInstances>
                           
                            </div>
                        </div>
                        <div className="each-container">
                            <div className="G-container">
                                <Line DataLineLabels ={[2002, 2008 , 2014 ]}
                                    DataLine ={[2, 1, 2]}
                                    Variable ={"Total Documents"}
                                    lineTitle={translate('lineTitle')}></Line>
                            </div>
                        </div>
                    </div>
                </div>
                
                    
                       

    

                    
                
            </I18nProvider>
        )
    }
}