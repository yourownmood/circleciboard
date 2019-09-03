import React from 'react';
import { shallow } from 'enzyme';

import Status from './Status';

const props = {
  key: '123',
  url: 'http://www.buildurl.com'
}

it('should render success status correctly', () => {
  const component = shallow(<Status {...props} status='success' />);
  expect(component.find('.c-status--success')).toHaveLength(1);
  expect(component.find('.c-status').text()).toEqual('Success');
});

it('should render error status correctly', () => {
  const component = shallow(<Status {...props} status='error' />);
  expect(component.find('.c-status--error')).toHaveLength(1);
  expect(component.find('.c-status').text()).toEqual('Failed');
});

it('should render pending status correctly', () => {
  const component = shallow(<Status {...props} status='pending' />);
  expect(component.find('.c-status--pending')).toHaveLength(1);
  expect(component.find('.c-status').text()).toEqual('Pending');
});

it('should render not_running status correctly', () => {
  const component = shallow(<Status {...props} status='not_running' />);
  expect(component.find('.c-status--not_running')).toHaveLength(1);
  expect(component.find('.c-status').text()).toEqual('Waiting');
});
