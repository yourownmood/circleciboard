import { shallow } from 'enzyme';
import * as React from 'react';

import Dashboard from './Dashboard';

const props = {
  circleCiKey: 'aaabbbccc999',
  repository: 'Repository',
  user: 'Username',
  workflow: 'Workflow'
}

it('renders without crashing', () => {
  const component = shallow(<Dashboard {...props} />);
  expect(component.find('.c-dashboard')).toHaveLength(1);
});
