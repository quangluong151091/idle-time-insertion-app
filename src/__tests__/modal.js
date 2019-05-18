import React from 'react';
import { shallow } from 'enzyme';

import TimelineModal from '../components/timeline/timeline/components/modal';

describe('TimelineModal', () => {
  it('should render correctly', () => {

    const component = shallow(<TimelineModal />);
  
    expect(component).toMatchSnapshot();
  });
});