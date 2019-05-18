import React from 'react';
import { shallow } from 'enzyme';

import Root from '../components/timeline/Root';
import Timeline from '../components/timeline/timeline/containers';

describe('TimelineContainer', () => {
  it('should render correctly', () => {

    const component = shallow(<Root><Timeline /></Root>);
  
    expect(component).toMatchSnapshot();
  });
});