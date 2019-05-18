import React from 'react';
import Sticker from './Sticker.js'

class Stickers extends React.Component {
    render() {
        return (
            <td className="side">
                <h3>IDLE STICKERS</h3>
                <table id="sticker_list" className="table-sticker" style={{ width: '100%' }}>
                    <tbody>
                        <tr>
                            <td colSpan="2">
                                <h5>MAINTENANCE</h5>
                            </td>
                        </tr>
                        <tr className="centering">
                            <Sticker id='1' img="enduser" name="End User" />
                            <Sticker id='2' img="primapower" name="Prima Power" />
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <h5>SETUP</h5>
                            </td>
                        </tr>
                        <tr className="centering">
                            <Sticker id='3' img="material" name="Material" />
                            <Sticker id='4' img="tool" name="Tool" />
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <h5>FAILURE</h5>
                            </td>
                        </tr>
                        <tr className="centering">
                            <Sticker id='5' img="ic-icon" name="Operation" />
                            <Sticker id='6' img="ic-icon" name="Tool" />
                        </tr>
                        <tr className="centering">
                            <Sticker id='7' img="ic-icon" name="Material" />
                            <Sticker id='8' img="ic-icon" name="Production order" />
                        </tr>
                        <tr className="centering">
                            <Sticker id='9' img="ic-icon" name="Program" />
                            <td style={{ width: '50%' }}>&nbsp;</td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <h5>OTHER</h5>
                            </td>
                        </tr>
                        <tr className="centering">
                            <Sticker id='10' img="ic-icon" name="Other" />
                            <td style={{ width: '50%' }}>&nbsp;</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        );
    }
}

export default Stickers