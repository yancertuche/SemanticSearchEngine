import React, {Component} from 'react';
import Line from '../Components/Line';
import {I18nProvider, LOCALES} from '../i18n';
import translate from '../i18n/translate';
import '../Styles/DashboardStyles.css';


export class Dashboard extends Component {


    render(){
        return (
            <I18nProvider locale={LOCALES.ESPAÑOL}>
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