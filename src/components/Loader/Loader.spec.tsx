import { shallow } from 'enzyme';
import * as React from 'react';

import Loader from './Loader';

const props = {
  label: 'Label'
}

it('renders without crashing', () => {
  const component = shallow(<Loader {...props} />);
  expect(component.find('.c-loader')).toHaveLength(1);
});
