import React, {Component} from 'react';
import {CChart} from '@coreui/react-chartjs';

export class Doughnut extends Component{
    render(){
        return(
            <div>
                    <h5>{this.props.donaTitle} </h5>
                            <CChart type="pie" datasets={[
                                                                {
                                                                data: this.props.DataDo,
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
                                                                labels={this.props.LabelsDo}
                                                                  options={{
                                                                    // tooltips: {
                                                                    //   enabled: false,
                                                                    //   custom: customTooltips
                                                                    // },
                                                                    maintainAspectRatio: false,
                                                                    aspectRatio: 1.7,

                                                                    plugins: {
                                                                    datalabels: {
                                                                        formatter: (value, ctx) => {
                                                                        
                                                                        let sum = 0;
                                                                        let dataArr = ctx.chart.data.datasets[0].data;
                                                                        dataArr.forEach(data => {
                                                                            sum += data;
                                                                        });
                                                                        let percentage = (value*100 / sum).toFixed(2)+"%";
                                                                        return percentage;

                                                                    
                                                                        },
                                                                        color: '#fff',
                                                                            }
                                                                }
                                                                
                                                                    
                                                                    }} />
                    <hr />
            </div>
        )
    }
}
export default Doughnut;