import React, {Component} from 'react';
import { I18nProvider } from '../i18n';
import translate from '../i18n/translate';
import {Table} from 'react-bootstrap';

export class CTable extends Component{

    render(){
        return(
            <I18nProvider locale={this.props.la}>
                <div>
                    <h4>{translate('tableTitle')}</h4>
                    <Table striped bordered hover responsive variant="dark">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>{translate('articulo')}</th>
                            <th>{translate('autor')}</th>
                            <th>{translate('año')}</th>
                            <th>{translate('link')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Lnk</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>

                </div>
            </I18nProvider>

        )

    }
}

export default CTable;