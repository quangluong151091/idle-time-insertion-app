import React from 'react';
import { shallow } from 'enzyme';

import NestDetails from '../components/NestDetails';

describe('NestDetails', () => {
  it('should render correctly', () => {

    const component = shallow(<NestDetails location={{'pathname': "/29484001"}}/>);
  
    expect(component).toMatchSnapshot();
  });
});