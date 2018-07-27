import { shallow } from 'enzyme';
import * as React from 'react';

import Dashboard from './Dashboard';

const props = {
  config: [
    {
      circleCiKey: 'aaabbbccc999',
      limit: 30,
      repository: 'Repository',
      title: 'Title',
      user: 'Username',
      workflow: 'Workflow'
    },
    {
      circleCiKey: 'aaabbbccc999',
      limit: 30,
      repository: 'Repository',
      title: 'Title',
      user: 'Username',
      workflow: 'Workflow'
    }
  ]
}

it('renders without crashing', () => {
  const component = shallow(<Dashboard {...props} />);
  expect(component.find('.c-dashboard')).toHaveLength(1);
});

it('should render the correct amount of cards', () => {
  const component = shallow(<Dashboard {...props} />);
  expect(component.find('Card')).toHaveLength(2);
});
