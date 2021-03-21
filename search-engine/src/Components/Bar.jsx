import React, {Component} from 'react';
import { CChart } from '@coreui/react-chartjs';

export class Bar extends Component{
    render(){
        return(
            <div>
                    <h4>Bar</h4>
                    <CChart type="bar" datasets={[
                                                {
                                                    label: 'My First dataset',
                                                    backgroundColor: 'rgba(255,99,132,0.2)',
                                                    borderColor: 'rgba(255,99,132,1)',
                                                    borderWidth: 1,
                                                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                                                    hoverBorderColor: 'rgba(255,99,132,1)',
                                                    data: [65, 59, 80, 81, 56, 55, 40],
                                                },
                                                ]} 
                                        options={{
                                            // tooltips: {
                                            //   enabled: false,
                                            //   custom: customTooltips
                                            // },
                                            maintainAspectRatio: false
                                            }} 
                                        labels="months"/>

            </div>
        )
    }
}
export default Bar;