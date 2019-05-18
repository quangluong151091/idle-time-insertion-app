import React from 'react';

class Sticker extends React.Component {
    onDragStart = (ev, id) => {
        console.log("dragstart:", id);
        var item = {
            content: id
        };
        ev.dataTransfer.setData("text", JSON.stringify(item));
    }
    render() {
        const imgPath = '/pics/stickers/' + this.props.img + '.png'
        return (
            <td style={{ width: '50%' }}>
                <img className="item" src={imgPath} alt={this.props.name} draggable
                    onDragStart={(e) => this.onDragStart(e, this.props.img)} /><br />
                <span>{this.props.name.toUpperCase()}</span>
            </td>
        )
    }
}

export default Sticker;