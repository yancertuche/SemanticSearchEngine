import React, {Component} from 'react';
import Bar from '../Components/Bar';
import Line from '../Components/Line';
import {I18nProvider} from '../i18n';
import translate from '../i18n/translate';
import '../Styles/DashboardStyles.css';


export class Dashboard extends Component {


    render(){
        return (
            <I18nProvider locale={this.props.la}>
                <div className="row">
                    <div className="col">
                        <div className="G-container">
                            <Line DataLineLabels ={[2002, 2008 , 2014 ]}
                                DataLine ={[2, 1, 2]}
                                Variable ={"Total Documents"}
                                lineTitle={translate('lineTitle')}></Line>
                        </div>
                    </div>
                    <div className="col">
                        <div className="G-container">
                        <Bar LabelsBar ={ ["Empresa Pequeña (<10)", "Empresa mediana (11-250)" , "Empresa grande (>250)"]} 
                                    DataBar={[2, 4, 10]}
                                    Var ={'Empleados'}
                                    barTitle={translate('barTitle')}></Bar>
                        </div>
                    </div>
                    <div className="col">
                        <div className="G-container">
                            <Line DataLineLabels ={[2002, 2008 , 2014 ]}
                                DataLine ={[2, 1, 2]}
                                Variable ={"Total Documents"}
                                lineTitle={translate('lineTitle')}></Line>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="G-container">
                            <Line DataLineLabels ={[2002, 2008 , 2014 ]}
                                DataLine ={[2, 1, 2]}
                                Variable ={"Total Documents"}
                                lineTitle={translate('lineTitle')}></Line>
                        </div>
                    </div>
                    <div className="col">
                        <div className="G-container">
                            <Line DataLineLabels ={[2002, 2008 , 2014 ]}
                                DataLine ={[2, 1, 2]}
                                Variable ={"Total Documents"}
                                lineTitle={translate('lineTitle')}></Line>
                        </div>
                    </div>
                    <div className="col">
                        <div className="G-container">
                            <Line DataLineLabels ={[2002, 2008 , 2014 ]}
                                DataLine ={[2, 1, 2]}
                                Variable ={"Total Documents"}
                                lineTitle={translate('lineTitle')}></Line>
                        </div>
                    </div>
                </div>
            </I18nProvider>
        )
    }
}