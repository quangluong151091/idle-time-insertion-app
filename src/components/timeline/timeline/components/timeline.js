import React, { Component } from 'react';

class Timeline extends Component {
    componentDidMount() {
        var props = this.props;

        function onSelect(data) {
            props.onSelect(data, "itemDisplay");
        }

        function onAddItem(time) {
            props.onAddItem(time, "addItem")
        }
        ////////////////////////////////////////////////////////////////////////////////////////////
        ///////// these date/times are for the start and end points of initial load of timeline ///
        var initEnd = new Date((new Date().valueOf()) + 1000 * 60 * 20);
        //var initEnd = new Date("2018-10-25");
        //initEnd.setHours(0,0,0,0);
        var initStart = new Date((new Date().valueOf()) - 1000 * 60 * 20);
        ///////////////////////////////////////////////////////////////////////////////////

        const reactTimeline = window.reactTimeline;
        this.timeline = new reactTimeline(this.refs.tl, props.data, props.machineStates, initStart, initEnd);
        this.timeline.addListener("onSelect", onSelect);
        this.timeline.addListener("onAddItem", onAddItem);
    }
    componentDidUpdate() {
        //console.log(this.props.data);
        if (this.timeline !== undefined) {
            this.timeline.update(this.props.data, this.props.machineStates);
        }
    }
    render() {
        return (
            <div className="col-lg-12">
                <div className="cw-card">
                    <div className="timelineContainer" ref="tl" />
                </div>
            </div>
        )
    }
}

export default Timeline;