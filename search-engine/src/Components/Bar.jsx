import React, {Component} from 'react';
import { CChart } from '@coreui/react-chartjs';

export class Bar extends Component{
    render(){
        return(
            <div>
                    <h5>{this.props.barTitle} </h5>
                    <CChart type="bar" datasets={[
                                                {
                                                    label: this.props.Var ,
                                                    backgroundColor: 'rgba(255,99,132,0.2)',
                                                    borderColor: 'rgba(255,99,132,1)',
                                                    borderWidth: 1,
                                                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                                                    hoverBorderColor: 'rgba(255,99,132,1)',
                                                    data: this.props.DataBar,
                                                }
                                                ]} 
                                        options={{
                                            // tooltips: {
                                            //   enabled: false,
                                            //   custom: customTooltips
                                            // },
                                            maintainAspectRatio: false,
                                            aspectRatio: 1.5,
                                            scales: {
                                                yAxes: [
                                                  {
                                                    ticks: {
                                                      beginAtZero: true,
                                                      callback: function(value) {if (value % 1 === 0) {return value;}}
                                                    },
                                                  },
                                                ],
                                              }
                                            }} 
                                        labels={this.props.LabelsBar}/>

            </div>
        )
    }
}
export default Bar;