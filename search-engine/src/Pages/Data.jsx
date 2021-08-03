import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import Bar from '../Components/Bar';
import Line from '../Components/Line';
import { I18nProvider } from '../i18n';
import translate from '../i18n/translate';
import '../Styles/DataStyles.css'

export class Data extends Component {

  render(){
    return (
      <I18nProvider  locale={this.props.la}>
        <div className="data-container">
          <div className="description-container">
            <Card>
              <Card.Body>
                <h4>{translate('descriptionDataPage')}</h4>
              </Card.Body>
            </Card>
          </div>
          <div className="graphicData-container">
            <div className="row">
              <div className="col">
                <div className="gr-container">
                <Line DataLineLabels ={[2002, 2008 , 2014 ]}
                                  DataLine ={[2, 1, 2]}
                                  Variable ={"Total Documents"}
                                  lineTitle={translate('lineTitle')}></Line>
              </div>
              </div>
              <div className="col">
                <div className="gr-container">
                  <Bar LabelsBar ={ ["Empresa Pequeña (<10)", "Empresa mediana (11-250)" , "Empresa grande (>250)"]} 
                              DataBar={[2, 4, 10]}
                              Var ={'Empleados'}
                              barTitle={translate('barTitle')}></Bar>
                  </div>
                </div>
            </div>
          </div>
          <div className="table-container"></div>
          <div className="searchData-container"></div>
        </div>
      </I18nProvider>
    );
  }
}
export default Data;