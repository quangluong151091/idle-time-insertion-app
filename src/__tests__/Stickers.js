import React from 'react';
import { shallow } from 'enzyme';

import Stickers from '../components/Stickers';

describe('Stickers', () => {
  it('should render correctly', () => {

    const component = shallow(<Stickers />);
  
    expect(component).toMatchSnapshot();
  });
});