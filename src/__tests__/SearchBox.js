import React from 'react';
import { render, mount } from 'enzyme';

import SearchBox from '../components/SearchBox';

describe('SearchBox', () => {
  it('should render correctly', () => {

    const component = render(<SearchBox />);

    expect(component).toMatchSnapshot();
  });
  it('checks if handleChange method works correctly', () => {
    const wrapper = mount(<SearchBox />);

    const searchInput = wrapper.ref("search");
    searchInput.value = "123456";
    wrapper.find("#search").simulate('change');
    expect(wrapper.instance().state.searchString).toEqual('123456');
  });
});