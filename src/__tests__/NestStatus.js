import React from 'react';
import { shallow } from 'enzyme';

import NestStatus from '../components/NestStatus';

describe('NestStatus', () => {
  it('should render correctly', () => {

    const component = shallow(<NestStatus />);

    expect(component).toMatchSnapshot();
  });
  it('should be able to highlight dropzone when dragged over', () => {

    const component = shallow(<NestStatus />);
    const containFc = jest.fn();
    const removeFc = jest.fn();
    const addFc = jest.fn();
    component.find("ReactSVG").simulate("dragover", { preventDefault: () => { }, 
      'target': {classList: { contains: containFc.mockReturnValue(true), remove: removeFc, add: addFc }}})
  });
  it('should be able to remove styles of dropzone when leaving', () => {

    const component = shallow(<NestStatus />);
    const containFc = jest.fn();
    const removeFc = jest.fn();
    const addFc = jest.fn();
    component.find("ReactSVG").simulate("dragleave", { preventDefault: () => { }, 
      'target': {classList: { contains: containFc.mockReturnValue(true), remove: removeFc, add: addFc }}})
    
  });
  it('should be able to drop', () => {

    const component = shallow(<NestStatus />);
    const containFc = jest.fn();
    const removeFc = jest.fn();
    const addFc = jest.fn();
    component.find("ReactSVG").simulate("drop", { preventDefault: () => { }, 
      'target': {classList: { contains: containFc, remove: removeFc, add: addFc }, id: "29484"},
      dataTransfer: {getData: jest.fn().mockReturnValue("[{}]")}});
    expect(component.state("showModal")).toBe(true);
  });
});