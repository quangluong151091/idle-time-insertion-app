import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from '@progress/kendo-react-buttons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DragDropModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);

        this.state = {
            show: this.props.show,
            startDate: new Date(),
            item: ""
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.show !== this.state.show) {
            this.setState({ show: nextProps.show });
        }
    }
    handleClose() {

        this.setState({ show: false });
        this.props.closeModal();
    }

    handleShow() {
        this.setState({ show: true });
    }
    handleChange(e) {
        this.setState({ item: e.target.value })
    }
    handleDateChange(date) {
        this.setState({
            startDate: date
        });
    }
    handleCancel() {

        this.setState({ item: "" });
        this.setState({ show: false });
        this.props.closeModal();
    }
    formatDateStr(d) {
        d = d.toString();
        d = d.split("G")[0]
    
        return d;
    }
    handleSubmit() {
        this.setState({ show: false });

        var itemsArray = JSON.parse(localStorage.getItem(this.props.name));
        var newItem = {
            "author": "Demo user",
            "comment": this.state.item,
            "editable": true,
            "noteId": "Note",
            "type": 'dot',
            "reason": this.props.part,
            "content": "<img src='/pics/stickers/" + this.props.item + ".png' height='42' width='42' />"
        };
        newItem.start = new Date(this.state.startDate);
        newItem.startStr = this.formatDateStr(new Date(this.state.startDate));
        newItem.dateStr = this.formatDateStr(new Date());
        itemsArray.push(newItem);
        localStorage.setItem(this.props.name, JSON.stringify(itemsArray));

        this.props.closeModal();
    }
    render() {
        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title><img src='../../../img\/note.png' alt="note" /> Create new note</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <span className="font-weight-bold"><b>Time of error: </b></span>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleDateChange}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={1}
                                    dateFormat="dd/MM/yyyy HH:mm"
                                    timeCaption="time"
                                />
                            </div>
                        </div>
                        <div id="detail">
                            <span className="font-weight-bold">Additional description: </span>
                            <textarea onChange={this.handleChange} className="cw-modal-text-area" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button id="cancel" onClick={this.handleCancel}>Cancel</Button>
                        <Button id="submit" primary={true} onClick={this.handleSubmit}>Submit</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default DragDropModal;
