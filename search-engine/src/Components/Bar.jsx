import React, {Component} from 'react';
import { CChart } from '@coreui/react-chartjs';

export class Bar extends Component{
    render(){
        return(
            <div>
                    <h4>Principales Autores de acuerdo a tu busqueda</h4>
                    <CChart type="bar" datasets={[
                                                {
                                                    label: 'Autores',
                                                    backgroundColor: 'rgba(255,99,132,0.2)',
                                                    borderColor: 'rgba(255,99,132,1)',
                                                    borderWidth: 1,
                                                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                                                    hoverBorderColor: 'rgba(255,99,132,1)',
                                                    data: [1, 2, 3],
                                                }
                                                ]} 
                                        options={{
                                            // tooltips: {
                                            //   enabled: false,
                                            //   custom: customTooltips
                                            // },
                                            maintainAspectRatio: false
                                            }} 
                                        labels={["Autor1", "Autor2", "Autor3"]}/>

            </div>
        )
    }
}
export default Bar;