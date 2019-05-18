import React  from 'react';

class SelectSticker extends React.Component {
    render(){
        return(
            <select id="stickerSelected" name="stickerSelected" hidden>
                <option value="" hidden>Select a sticker to add</option>
                <optgroup label="MAINTENANCE">
                  <option value="enduser" label="End User">End User</option>
                  <option value="primapower" label="Prima Power">Prima Power</option>
                </optgroup>
                <optgroup label="SETUP">
                  <option value="material" label="Material">Material</option>
                  <option value="tool" label="Tool">Tool</option>
                </optgroup>
                <optgroup label="FAILURE">
                  <option value="ic-icon" label="Operation">Operation</option>
                  <option value="ic-icon" label="Tool">Tool</option>
                  <option value="ic-icon" label="Material">Material</option>
                  <option value="ic-icon" label="Production Order">Production Order</option>
                  <option value="ic-icon" label="Program">Program</option>
                </optgroup>
                <optgroup label="Other">
                  <option value="ic-icon" label="Other">Other</option>
                </optgroup>
              </select>
        );
    }
}

export default SelectSticker;
