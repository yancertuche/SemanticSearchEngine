import React from 'react';
import { Bar } from 'react-chartjs-2';


export default class Hbar extends React.Component {
    render() {
        return (
            <div>
                <h5>{this.props.title}</h5>
                <Bar data={{
                    labels: this.props.labels,
                    datasets: [
                        {
                            label: this.props.variable,
                            backgroundColor: '#2a9df4',
                            borderColor: '#2a9df4',
                            borderWidth: 1,
                            hoverBackgroundColor: '#187bcd',
                            hoverBorderColor: '#187bcd',
                            data: this.props.data
                        }
                    ]
                }}  options={{ indexAxis: 'y', scaleStepWidth: 1, scaleOverride:true  }} />
            </div>
        );
    }
}