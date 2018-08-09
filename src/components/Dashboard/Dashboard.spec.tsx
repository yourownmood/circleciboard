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
      workflow: 'Workflow1'
    },
    {
      circleCiKey: 'aaabbbccc999',
      limit: 30,
      repository: 'Repository',
      title: 'Title',
      user: 'Username',
      workflow: 'Workflow2'
    }
  ],
  title: 'Title'
}

it('renders without crashing', () => {
  const component = shallow(<Dashboard {...props} />);
  expect(component.find('.c-dashboard')).toHaveLength(1);
});

it('should render the correct amount of cards', () => {
  const component = shallow(<Dashboard {...props} />);
  expect(component.find('Card')).toHaveLength(2);
});

it('should render the correct layout__item width', () => {
  const component = shallow(<Dashboard {...props} />);
  expect(component.find(`.o-layout__item`).first().prop('className')).toContain('u-1/1@tablet');
  const newConfig = props.config.concat(JSON.parse(JSON.stringify(props.config)));
  newConfig[2].workflow = 'Workflow3';
  newConfig[3].workflow = 'Workflow4';
  component.setProps({ config: newConfig })
  expect(component.find(`.o-layout__item`).first().prop('className')).toContain('u-1/2@tablet');
});
