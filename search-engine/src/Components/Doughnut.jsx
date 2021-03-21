import React, {Component} from 'react';
import {CChart} from '@coreui/react-chartjs';

export class Doughnut extends Component{
    render(){
        return(
            <div>
                    <h4>Doughnut</h4>
                            <CChart type="doughnut" datasets={[
                                                                {
                                                                data: [300, 50, 100],
                                                                backgroundColor: [
                                                                    '#FF6384',
                                                                    '#36A2EB',
                                                                    '#FFCE56',
                                                                ],
                                                                hoverBackgroundColor: [
                                                                    '#FF6384',
                                                                    '#36A2EB',
                                                                    '#FFCE56',
                                                                ],
                                                                }]} 
                                                                labels={ [
                                                                    'Red',
                                                                    'Green',
                                                                    'Yellow',
                                                                  ]}/>
                    <hr />
            </div>
        )
    }
}
export default Doughnut;