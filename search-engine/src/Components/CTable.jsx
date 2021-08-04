import React, {Component} from 'react';
import { I18nProvider } from '../i18n';
import translate from '../i18n/translate';
import {Table} from 'react-bootstrap';

export class CTable extends Component{

    render(){
        const hStyle = {padding: '2em'};
        const headStyle = {
            alignItems: 'center' ,
            justifyContent: 'center',
            fontWeight : 'bold',
            fontSize : '18px'}
        return(
            <I18nProvider locale={this.props.la}>
                <div style={hStyle}>
                    <h4>{translate('tableTitle')}</h4>
                    <Table striped bordered hover responsive >
                        <thead>
                            <tr>
                                <th style={headStyle}>{translate('articulo')}</th>
                                <th style={headStyle}>{translate('autor')}</th>
                                <th style={headStyle}>{translate('año')}</th>
                                <th style={headStyle}>{translate('link')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.data.map(item => (
                                <tr>
                                <td>{item.Title}</td>
                                <td>{item.Autors.join(" , ").split(/(?=[A-Z])/).join(" ")}</td>
                                <td>{item.year}</td>
                                <td>{<a href={item.url} target="_blank" rel="noopener noreferrer">
                                        <h6>{translate('source')}</h6>
                                    </a>}
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                </div>
            </I18nProvider>

        )

    }
}

export default CTable;