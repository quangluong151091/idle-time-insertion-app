import React from 'react';
import { shallow } from 'enzyme';

import NestList from '../components/NestList';

describe('NestList', () => {
  it('should render correctly', () => {

    const component = shallow(<NestList />);
  
    expect(component).toMatchSnapshot();
  });
});