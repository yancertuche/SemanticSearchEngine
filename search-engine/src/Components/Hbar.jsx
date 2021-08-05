import React from 'react';
import { Bar } from 'react-chartjs-2';


export default class Hbar extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
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
                }} width={100}
                    height={26} options={{ indexAxis: 'y'  }} />
            </div>
        );
    }
}