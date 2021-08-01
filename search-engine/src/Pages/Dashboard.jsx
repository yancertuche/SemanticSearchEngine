import React, {Component} from 'react';
import Line from '../Components/Line';
import Bar from '../Components/Bar';
import Container from 'react-bootstrap/Container'
import {I18nProvider, LOCALES} from '../i18n';
import translate from '../i18n/translate';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import '../Styles/DashboardStyles.css';

export class Dashboard extends Component {


    render(){
        return (
            <I18nProvider locale={LOCALES.ESPAÑOL}>
                <div className="Principal-container">
                    <div className="encabezado"> 
                        <div className='row'>
                            <div className='col-md-auto justify-content-center'>
                                <h4>{translate('nombre')}</h4> 
                                <h5 className="etiqueta">Explora información</h5> 
                            </div>   
                            <div className='col'>
                                <FormControlLabel
                                                    value="top"
                                                    control={<Switch color="default" 
                    
                                                        />}
                                                    label={"hola"}
                                                    labelPlacement="top"
                                                />
                            </div>
                        
                        </div>
                    </div>
                    <div className="cuerpo">
                        <Container fluid={false}>
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
                        </Container>
                    </div>
                    
                </div>
            </I18nProvider>
        )
    }
}