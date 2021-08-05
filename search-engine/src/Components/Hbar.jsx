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
                            backgroundColor: 'rgba(255,99,132,0.2)',
                            borderColor: 'rgba(255,99,132,1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                            hoverBorderColor: 'rgba(255,99,132,1)',
                            data: this.props.data
                        }
                    ]
                }} width={100}
                    height={26} options={{ indexAxis: 'y'  }} />
            </div>
        );
    }
}