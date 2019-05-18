import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timeline from '../components/timeline';
import TimelineModal from '../components/modal';
import * as actions from '../../actions';

class timelineLayout extends Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onAddItem = this.onAddItem.bind(this);

        this.state = {
            showModal: false,
            selectedData: [],
            modalType: null,
            timelineItems: [],
            time: new Date().valueOf(),
            load: true
        };
    };
    tick() {
        this.setState(prevState => ({
            time: prevState.time + 1000 * 5
        }));
        this.setState({ timelineItems: JSON.parse(localStorage.getItem(this.props.name)) });
    }
    formatDateStr(d) {
        d = d.toString();
        d = d.split("G")[0]
    
        return d;
    }
    componentDidMount() {
        this.props.fetchMachineStates(this.props.name);
        this.interval = setInterval(this.tick.bind(this), 1000 * 5);
        let timelineItems = JSON.parse(localStorage.getItem(this.props.name));
        if (timelineItems === undefined || timelineItems === null) {
            var itemsArray = [{
                "start": new Date("2018-10-24T14:41:17.000Z"),
                "content": "<img src='img/note1.png'>",
                "editable": true,
                "dateStr": "2018-10-24 15:55:00",
                "startStr": "2018-10-24 14:41:17",
                "author": "Demo user",
                "comment": "This is a test note , Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu sem a nisl blandit fermentum. Praesent at tortor in dui venenatis mollis. Duis in leo consectetur, rhoncus augue sit amet, viverra urna. Pellentesque feugiat, purus in sodales ultrices, augue quam mattis magna, sed lobortis enim urna sit amet elit. ",
                "noteId": "Note #1",
                "type": "dot",
                "manual": true
            }];
            localStorage.setItem(this.props.name, JSON.stringify(itemsArray));
            timelineItems = itemsArray;
        }
        this.setState({ timelineItems });
        this.setState({load: false})
    }
    onAddItem(time, modalType) {
        this.setState({ modalType });
        this.setState({ selectedData: time });
        this.setState({ showModal: true });
    }

    onSelect(selectedData, modalType) {
        this.setState({ selectedData });
        this.setState({ modalType })
        this.setState({ showModal: true });
    }
    closeModal() {
        let latestTimelineItems = JSON.parse(localStorage.getItem(this.props.name));
        this.setState({ timelineItems: latestTimelineItems })
        this.setState({ showModal: false });
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        if (this.state.timelineItems === undefined || this.props.fetchingMachineStates || this.state.load) {
            return <div>Loading data</div>
        }
        return (
            <div>
                <TimelineModal name={this.props.name} type={this.state.modalType} show={this.state.showModal} 
                    data={this.state.selectedData} closeModal={this.closeModal} item={this.props.item}
                    part={this.props.part}/>
                <Timeline key={this.state.time} onSelect={this.onSelect} onAddItem={this.onAddItem} 
                    data={this.state.timelineItems} machineStates={this.props.machineStates} showNotes={true}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        fetchingMachineStates: state.fetchingMachineStates,
        machineStates: state.machineStates
    };
}
export default connect(mapStateToProps, actions)(timelineLayout);

