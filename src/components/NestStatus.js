import React from 'react';
import ReactSVG from 'react-svg';
import Timeline from './timeline/timeline/containers';
import DragDropModal from './DragDropModal.js';
import Root from './timeline/Root.js';

class NestStatus extends React.Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            item: null,
            part: null,
            showModal: false
        }
    }
    onDragOver = (ev) => {
        ev.preventDefault();
        var dropzoneElement = ev.target;

        // feedback the possibility of a drop
        if (dropzoneElement.classList.contains('dropzone'))
            dropzoneElement.classList.add('drop-target');
    }
    formatDateStr(d) {
        d = d.toString();
        d = d.split("G")[0]
    
        return d;
    }
    onDrop = (ev) => {
        ev.preventDefault();
        var data = JSON.parse(ev.dataTransfer.getData("text"));
        this.setState({ item: data.content, part: ev.target.id });
        this.setState({showModal: true});

        // remove the drop feedback style
        if (ev.target.classList.contains('dropzone')) {
            ev.target.classList.remove('drop-target');
        }
    }
    onDragLeave = (ev) => {
        ev.preventDefault();
        // remove the drop feedback style
        if (ev.target.classList.contains('dropzone')) {
            ev.target.classList.remove('drop-target');
        }
    }
    closeModal() {
        this.setState({ showModal: false });
    }
    render() {
        const path = this.props.name + '.svg';

        return (
            <td className="main">
                <h1>{this.props.name}</h1>
                <br />
                <div style={{ width: '95%', float: "left", paddingBottom: '10px' }}>
                    <ReactSVG
                        src={path}
                        evalScripts="always"
                        fallback={() => <span>Error!</span>}
                        loading={() => <span>Loading</span>}
                        onInjected={(error, svg) => {
                            if (error) {
                                console.error(error)
                                return
                            }
                        }}
                        onDragOver={(e) => this.onDragOver(e)}
                        onDrop={(e) => { this.onDrop(e) }}
                        onDragLeave={(e) => this.onDragLeave(e)}
                    />
                </div>

                <div id="timeline" style={{ clear: 'both', paddingTop: '20px' }}>
                    <Root>
                        <Timeline name={this.props.name}/>
                    </Root>
                </div>

                <DragDropModal name={this.props.name} show={this.state.showModal} 
                    closeModal={this.closeModal} item={this.state.item} part={this.state.part}/>
            </td>
        );
    }
}

export default NestStatus