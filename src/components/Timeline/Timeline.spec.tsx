import { mount, shallow } from 'enzyme';
import * as React from 'react';

import Timeline from './Timeline';

const props = {
  circleCiKey: 'aaabbbccc999',
  repository: 'Repository',
  user: 'Username',
}

const builds = [
  {
    build_num: 1,
    build_time_millis: 100,
    outcome: 'success',
    status: 'finished',
    why: 'scheduled-workflow'
  },
  {
    build_num: 2,
    build_time_millis: 2000,
    outcome: 'error',
    status: 'finished',
    why: 'scheduled-workflow'
  },
  {
    build_num: 3,
    build_time_millis: 150,
    outcome: 'success',
    status: 'finished',
    why: 'scheduled-workflow'
  },
  {
    build_num: 4,
    build_time_millis: 1050,
    outcome: null,
    status: 'running',
    why: 'scheduled-workflow'
  },
  {
    build_num: 5,
    build_time_millis: 1250,
    outcome: null,
    status: 'finished',
    why: 'commit'
  },
]

it('renders without crashing', () => {
  const component = shallow(<Timeline {...props} />);
  expect(component.find('.c-timeline')).toHaveLength(1);
});

it('should show a loader when fetching', () => {
  const component = shallow(<Timeline {...props} />);
  component.setState({ fetching: false }, () => {
    expect(component.find('Loader')).toHaveLength(1);
  });
});

describe('renderTimeline', () => {
  it('should handle renderTimeline with builds correctly', () => {
    const component = mount(<Timeline {...props} />);
    component.setState({ builds, fetching: false }, () => {
      const Status = component.find('Status');
      expect(Status.find({ status: 'success' })).toHaveLength(2);
      expect(Status.find({ status: 'error' })).toHaveLength(1);
      expect(Status.find({ status: 'pending' })).toHaveLength(1);
    });
  });
});
