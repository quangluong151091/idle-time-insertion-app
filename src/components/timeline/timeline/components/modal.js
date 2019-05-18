import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from '@progress/kendo-react-buttons';
import SelectSticker from './SelectSticker';

class modal extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
    this.state = {
      show: this.props.show,
      item: ""
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.state.show) {
      this.setState({ show: nextProps.show });
    }
  }
  formatDateStr(d) {
    d = d.toString();
    d = d.split("G")[0]

    return d;
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
  handleCancel() {

    this.setState({ item: "" });
    this.setState({ show: false });
    this.props.closeModal();
  }
  handleSubmit() {
    this.setState({ show: false });

    var itemsArray = JSON.parse(localStorage.getItem(this.props.name));

    if (document.getElementById('re1').checked) {
      alert('Please drag the sticker to the corresponding Nest or Part');
    }
    else if (document.getElementById('re2').checked) {
      var e = document.getElementById("stickerSelected");
      var stkr = e.options[e.selectedIndex].value;
      var err = e.options[e.selectedIndex].label;
      var newItem = {
        "author": "Demo user",
        "comment": this.state.item,
        "editable": true,
        "noteId": "Note",
        "type": 'dot',
        "reason": err,
        "content": "<img src='/pics/stickers/" + stkr + ".png' height='42' width='42' />"
      };
      newItem.start = new Date(this.props.data);
      newItem.startStr = this.formatDateStr(new Date(this.props.data));
      newItem.dateStr = this.formatDateStr(new Date());
      itemsArray.push(newItem);
      localStorage.setItem(this.props.name, JSON.stringify(itemsArray));
    }
    
    this.props.closeModal();
  }
  showSelection() {
    let droplist = document.getElementById('stickerSelected');
    let detail = document.getElementById('detail');
    if (document.getElementById('re2').checked) {
      droplist.style.display = 'block';
      detail.style.display = 'block';
    } else {
      droplist.style.display = 'none';
      detail.style.display = 'none';
    }
  }
  
  renderContent() {
    if (this.props.type === "itemDisplay") {
      var dataObj = this.props.data[0];
      return (
        <div>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title><img src='../../../img\/note.png' alt="note" />{dataObj.noteId}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="panel panel-default">
                <div className="panel-body"><span className="font-weight-bold">Author: </span> {dataObj.author}</div>
              </div>
              <div className="panel panel-default">
                <div className="panel-body"><span className="font-weight-bold">Date written: </span> {dataObj.dateStr}</div>
              </div>
              <div className="panel panel-default">
                <div className="panel-body"><span className="font-weight-bold">Timeline binding: </span> {dataObj.startStr}</div>
              </div>
              <div className="panel panel-default">
                <div className="panel-body"><span className="font-weight-bold">Reason: </span><br /> {dataObj.reason}</div>
              </div>
              <div className="panel panel-default">
                <div className="panel-body"><span className="font-weight-bold">Note: </span><br /> {dataObj.comment}</div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      )
    }
    else if (this.props.type === "addItem") {
      //var time = this.props.data.toString();
      return (
        <div>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title><img src='../../../img\/note.png' alt="note" /> Create new note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="panel panel-default">
                <div className="panel-body">
                  <span className="font-weight-bold">Error comes from: </span>
                  <input type="radio" id='re1' name="reason" value="Nest/Part" onClick={this.showSelection} />
                  <label htmlFor='re1'> &nbsp; Nest/Part</label>
                  <input type="radio" id='re2' name="reason" value="Other" onClick={this.showSelection} style={{ 'marginLeft': '4em' }} />
                  <label htmlFor='re2'> &nbsp; Other</label>
                </div>
                <SelectSticker />
              </div>
              
              <div id="detail" hidden>
                <span className="font-weight-bold">Additional description: </span>
                <textarea onChange={this.handleChange} className="cw-modal-text-area" />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleCancel}>Cancel</Button>
              <Button primary={true} onClick={this.handleSubmit}>Submit</Button>
            </Modal.Footer>
          </Modal>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default modal;