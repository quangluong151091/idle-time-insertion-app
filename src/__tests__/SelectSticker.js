import React from 'react';
import { shallow } from 'enzyme';

import SelectSticker from '../components/timeline/timeline/components/SelectSticker';

describe('SelectSticker', () => {
  it('should render correctly', () => {

    const component = shallow(<SelectSticker />);
  
    expect(component).toMatchSnapshot();
  });
});