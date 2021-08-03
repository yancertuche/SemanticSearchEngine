import React, {Component} from 'react';
import { Card, Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import CTable from '../Components/CTable';
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
          <div className="table-container">
            <CTable la={this.props.la}></CTable>
          </div>
          <div className="searchData-container">
            <Card>
              <div className="form-container">
                <Card>
                  <div className="form-crd-container">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <h4>Consulta por título, autor o año</h4>
                        <Form.Control placeholder="Search" />
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="card-rta-continer">
                    <Card>
                      <p>holi</p>
                    </Card>   
                  </div>
                </Card>
              </div>
            </Card>
          </div>
        </div>
      </I18nProvider>
    );
  }
}
export default Data;