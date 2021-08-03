import { CChartHorizontalBar } from '@coreui/react-chartjs';
import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import Hbar from '../Components/Hbar';
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
            <div className="gr-container">
              <Line DataLineLabels ={[2002, 2008 , 2014 , 2016 ]}
                                DataLine ={[8 , 20, 2 , 15]}
                                Variable ={"Total Documents"}
                                lineTitle={translate('lineTitle')}></Line>
            </div>
            <div className="gr-container">
              <Hbar></Hbar>
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