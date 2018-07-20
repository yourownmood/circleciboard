import { shallow } from 'enzyme';
import * as React from 'react';

import Loader from './Loader';

it('renders without crashing', () => {
  const component = shallow(<Loader />);
  expect(component.find('.c-loader')).toHaveLength(1);
});
