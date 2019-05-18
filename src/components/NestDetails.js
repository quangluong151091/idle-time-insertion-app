import React from 'react';
import Stickers from '../components/Stickers';
import NestStatus from '../components/NestStatus';

class NestDetails extends React.Component {
    handleClick = () => {
        this.props.history.push('/')
    }
    
    render() {
        return (
            <div className="content">
                <button className="back-button" onClick={this.handleClick}><i className="fas fa-home"/></button>
                <table className="users">
                    <tbody>
                        <tr>
                        <Stickers />
                        <NestStatus name={this.props.location.pathname.substr(1)} />
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default NestDetails;