import React, {Component} from 'react';
import { CChart } from '@coreui/react-chartjs';

export class Board extends Component{
    const 
    render(){
        return(
            <div className="row">
            <div className="col-md-6">
                <div className="char-wrappe">
                    <CChart
                    type="line"
                    datasets={[
                        {
                            label: 'My First dataset',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [65, 59, 80, 81, 56, 55, 40],
                            },
                    ]}
                    options={{
                        //aspectRatio: 2,
                        //tooltips: {
                        //enabled: true
                        //}
                        maintainAspectRatio: false
                    }}
                    />
                )                
            </div>
            </div>
            </div>
        )
    }
}
export default Board;