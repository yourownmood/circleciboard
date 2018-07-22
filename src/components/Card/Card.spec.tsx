import { shallow } from 'enzyme';
import * as React from 'react';

import Card from './Card';

const props = {
  circleCiKey: 'aaabbbccc999',
  repository: 'Repository',
  user: 'Username',
}

it('renders without crashing', () => {
  const component = shallow(<Card {...props} />);
  expect(component.find('.c-card')).toHaveLength(1);
});
