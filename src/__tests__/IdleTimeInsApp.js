import React from 'react';
import { shallow } from 'enzyme';

import IdleTimeInsApp from '../components/IdleTimeInsApp';

describe('IdleTimeInsApp', () => {
  it('should render correctly', () => {

    const component = shallow(<IdleTimeInsApp />);
  
    expect(component).toMatchSnapshot();
  });
});