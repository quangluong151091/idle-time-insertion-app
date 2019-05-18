import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './timeline/actions';

class Nest extends React.Component  {
    componentDidMount() {
        this.props.fetchMachineStates(this.props.name);
    }
    handleClick = () => {
        this.props.history.push(`/${this.props.name}`)
    }
    render() {
        return (
            <tr onClick={this.handleClick.bind(this)}>
                <td className="imgNest"><img src={this.props.img} alt={this.props.name} /></td>
                <td className="nameNest"><h3>{this.props.name}</h3></td>
                <td className="noteNest"><span>{this.props.details}</span></td>
                <td className={this.props.status}></td>
            </tr>
        );
    }
}
function mapStateToProps(state) {
    return {
        status: state.fetchLatestStatus
    };
}
export default withRouter(connect(mapStateToProps, actions)(Nest))