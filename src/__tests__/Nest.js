import React from 'react';
import { shallow } from 'enzyme';

import Nest from '../components/Nest';

describe('Nest', () => {
  it('should render correctly', () => {

    const component = shallow(<Nest />);
  
    expect(component).toMatchSnapshot();
  });
});