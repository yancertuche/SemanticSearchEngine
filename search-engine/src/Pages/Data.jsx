import React, {Component} from 'react';
import { Card, Button} from 'react-bootstrap';
import { MDBIcon } from "mdbreact";
import Form from 'react-bootstrap/Form';
import CTable from '../Components/CTable';
import Hbar from '../Components/Hbar';
import Line from '../Components/Line';
import { I18nProvider } from '../i18n';
import translate from '../i18n/translate';
import '../Styles/DataStyles.css'
import CardByTitle from '../Components/CardByTitle';
import axios from 'axios';
import ConfigData from '../Config/server.json';

/* Page  Data Source-fuente de datos */
export class Data extends Component {
  
  state = {
    resultGeneral : [],
    /* graphics data */
    yearLine : [],
    autorHbar : []

  }

  /* create a new Json object with format array of object
  where each object is a paper*/
  createStructure = (array) => {
    var arr = {}
    array.forEach(function(item){
      if(!arr[item.Title.value]){
        arr[item.Title.value] = [item.NameAutor.value]

      }else{
        arr[item.Title.value].push(item.NameAutor.value)
      } 
    });

    var arrRequired = [];
    for (var category in arr){
      for(var item in array){
        console.log(item)
        if(array[item].Title.value === category){
          arrRequired.push({ 'Title' : category, 'Autors' : arr[category], 'year': Number(array[item].Year.value), 'url' : array[item].url.value });
          break;
        }
      }
      
    } 

    return  arrRequired
  }

  /* paper x year of publication */
  yearPublication = (array) =>{
    var arrayLabels = []
    var arrayValues = []
    array.sort(function(a, b){
      if(a.year < b.year) return -1;
      if (a.year > b.year) return 1;
    })

    var hash = {}; //Keep track of counts
    //Count the values
    for (var i in array) {
      var obj = array[i];
      if (hash[obj.year]) {
        hash[obj.year] += 1;
      } else {
        hash[obj.year] = 1;
      }
    }
    // Reorganice result to send a graphic
    for (var i in hash){
      arrayLabels.push(i)
      arrayValues.push(hash[i])
    }
    return [arrayLabels,arrayValues]
  }

  componentDidMount(){
    const Url_Base = ConfigData.BASE_URL
    const resource = ConfigData.PAPERS_SOURCE
    axios.get(Url_Base+resource)
    .then( response => {
      var a = this.createStructure(response.data.results.bindings)
      var b  = this.yearPublication(a)
      this.setState({resultGeneral :  a })
      this.setState({yearLine : b })
    })
  }



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
              <Line DataLineLabels ={this.state.yearLine[0]}
                                DataLine ={this.state.yearLine[1]}
                                Variable ={"Total Documents"}
                                lineTitle={translate('lineTitle')}></Line>
            </div>
            <div className="gr-container">
              <Hbar></Hbar>
            </div>
          </div>
          <div className="table-container">
            <CTable data = {this.state.resultGeneral} la={this.props.la}></CTable>
          </div>
          <div className="searchData-container">
            <Card>
              <div className="form-container">
                <Card>
                  <div className="form-crd-container">
                    
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <h4>Consulta por título, autor o año</h4>
                        <Form.Control placeholder="Search" />
                        <Button variant="dark" type="submit">
                          Submit
                        </Button>
                      </Form.Group>
                    
                  </div>
                  <div className="card-rta-continer">
                    <CardByTitle la={this.props.la}></CardByTitle>  
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