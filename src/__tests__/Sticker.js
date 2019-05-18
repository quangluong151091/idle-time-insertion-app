import React from 'react';
import { shallow } from 'enzyme';

import Sticker from '../components/Sticker';

describe('Sticker', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Sticker id="1" img="ic-icon" name="Tool" />)
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should be draggable', () => {
    wrapper.find(".item").simulate("dragstart", { dataTransfer: { setData: jest.fn() } });
  })
});