import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

const props = {
  title: 'Title',
}

it('renders without crashing', () => {
  const component = shallow(<Header {...props} />);
  expect(component.find('.c-header')).toHaveLength(1);
});
