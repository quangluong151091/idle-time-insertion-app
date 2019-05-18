import React from 'react';
import Nest from './Nest';
import Root from './timeline/Root';

class NestList extends React.Component {
    render() {
        return (
            <div>
                <h1 className="List__title">Nest List</h1>
                <table id="table-Nest" style={{ width: '100%' }}>
                    <tbody>
                        <tr className="tblHead">
                            <th className="imgNest">Nest</th>
                            <th className="nameNest">Name</th>
                            <th className="noteNest">Note</th>
                            <th className="sttNest">Status</th>
                        </tr>
                        <Root><Nest img="/pics/nest/29484001PO.png" name="29484001" details="Nest 1"/></Root>
                        <Root><Nest img="/pics/nest/29484002PO.png" name="29484002" details="Nest 2" /></Root>
                    </tbody>
                </table>
            </div>
        );

    }
}

export default NestList