import { shallow } from 'enzyme';
import * as React from 'react';

import Card from './Card';

const props = {
  circleCiKey: 'aaabbbccc999',
  limit: 30,
  repository: 'Repository',
  title: 'Title',
  user: 'Username',
  workflow: 'Workflow'
}

it('renders without crashing', () => {
  const component = shallow(<Card {...props} />);
  expect(component.find('.c-card')).toHaveLength(1);
});
