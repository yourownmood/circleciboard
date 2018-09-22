import { shallow } from 'enzyme';
import * as React from 'react';

import TimeFromNow from './TimeFromNow';

const props = {
  time: '2013-11-18T11:55:00+08:00',
}

it('renders without crashing', () => {
  const component = shallow(<TimeFromNow {...props} />);
  expect(component.find('.c-time-from-now')).toHaveLength(1);
});

it('render a "null" time correctly', () => {
  const component = shallow(<TimeFromNow time={null} />);
  expect(component.find('.c-time-from-now').text()).toBe('...');
});
