import React from 'react';
import { shallow } from 'enzyme';

import DragDropModal from '../components/DragDropModal';

describe('DragDropModal', () => {
  it('should render correctly', () => {

    const component = shallow(<DragDropModal />);
    
    component.setState({'startDate': new Date("12/12/2018 10:00")});
    expect(component).toMatchSnapshot();
  });
  it('should be able to open', () => {

    const component = shallow(<DragDropModal show={true}/>);
    
    expect(component.state("show")).toEqual(true);
  });
  it('should change textarea input', () => {

    const component = shallow(<DragDropModal/>);
    
    component.find('.cw-modal-text-area').simulate('change', {'target': {'value': '123'}});
    expect(component.state("item")).toEqual('123');
  });
  it('should change date input', () => {

    const component = shallow(<DragDropModal/>);
    
    component.find('DatePicker').simulate('change', new Date("12/12/2018 12:00"));
    expect(component.state("startDate")).toEqual(new Date("12/12/2018 12:00"));
  });
  it('cancel form when clicked', () => {
    const mock = jest.fn();
    const component = shallow(<DragDropModal closeModal={mock}/>);
    const button = component.find('#cancel');
    button.simulate('click');
    expect(component.state("item")).toEqual('');
    expect(component.state("show")).toEqual(false);
  });
  it('submit form when clicked', () => {
    const mock = jest.fn();
    localStorage.setItem("29484001", "[{}]");
    const component = shallow(<DragDropModal closeModal={mock} part="29484" item="enduser" name="29484001"/>);
    const button = component.find('#submit');
    button.simulate('click');

    expect(component.state("show")).toEqual(false);
    expect(localStorage.length).toEqual(1);
  });
});