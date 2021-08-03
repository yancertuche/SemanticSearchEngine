import React from 'react';
import { Bar} from  'react-chartjs-2';

const state = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81]
      }
    ]
}

export default class Hbar extends React.Component {
  render() {
    return (
        <div>
            <h4>Horizontal Bar Example</h4>
            <Bar data={state} options={{indexAxis :'y'}} />
        </div>
    );
  }
}