import React, {Component} from 'react';
import {CChart} from '@coreui/react-chartjs';

export class Doughnut extends Component{
    render(){
        return(
            <div>
                    <h4>Categorias que presentan más proporción en la base de conocimiento </h4>
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
                                                                    'Advantages',
                                                                    'Tools',
                                                                    'Results',
                                                                  ]}
                                                                  options={{
                                                                    // tooltips: {
                                                                    //   enabled: false,
                                                                    //   custom: customTooltips
                                                                    // },
                                                                    maintainAspectRatio: false
                                                                    }} />
                    <hr />
            </div>
        )
    }
}
export default Doughnut;