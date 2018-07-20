import { shallow } from 'enzyme';
import * as React from 'react';

import App from './App';

it('renders without crashing', () => {
  const component = shallow(<App />);
  expect(component.find('Dashboard')).toHaveLength(1);
});
