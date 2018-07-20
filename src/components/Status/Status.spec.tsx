import { shallow } from 'enzyme';
import * as React from 'react';

import Status from './Status';

const props = {
  key: '123',
  url: 'http://www.buildurl.com'
}

it('should render success status correctly', () => {
  const component = shallow(<Status {...props} status='success' />);
  expect(component.find('.c-status--success')).toHaveLength(1);
  expect(component.find('.c-status').text()).toEqual('v');
});

it('should render error status correctly', () => {
  const component = shallow(<Status {...props} status='error' />);
  expect(component.find('.c-status--error')).toHaveLength(1);
  expect(component.find('.c-status').text()).toEqual('x');
});

it('should render error pending correctly', () => {
  const component = shallow(<Status {...props} status='pending' />);
  expect(component.find('.c-status--pending')).toHaveLength(1);
  expect(component.find('.c-status').text()).toEqual('-');
});
