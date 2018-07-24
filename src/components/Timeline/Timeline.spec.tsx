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
    build_url: 'http://buildurl.com',
    outcome: 'success',
    start_time: '2018-07-23T08:00:22.167Z',
    status: 'finished',
    why: 'scheduled-workflow'
  },
  {
    build_num: 2,
    build_time_millis: 2000,
    build_url: 'http://buildurl.com',
    outcome: 'error',
    start_time: '2018-07-23T08:00:22.167Z',
    status: 'finished',
    why: 'scheduled-workflow'
  },
  {
    build_num: 3,
    build_time_millis: 150,
    build_url: 'http://buildurl.com',
    outcome: 'success',
    start_time: '2018-07-23T08:00:22.167Z',
    status: 'finished',
    why: 'scheduled-workflow'
  },
  {
    build_num: 4,
    build_time_millis: 1050,
    build_url: 'http://buildurl.com',
    outcome: null,
    start_time: '2018-07-23T08:00:22.167Z',
    status: 'running',
    why: 'scheduled-workflow'
  },
  {
    build_num: 5,
    build_time_millis: 1250,
    build_url: 'http://buildurl.com',
    outcome: null,
    start_time: '2015-07-23T08:00:22.167Z',
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

it('should show refreshing when fetching on interval', () => {
  const component = mount(<Timeline {...props} />);
  component.setState({ refreshing: true }, () => {
    expect(component.find('.c-timeline__refreshing')).toHaveLength(1);
  });
});

it('should show the timeline in reverse order', () => {
  const component = mount(<Timeline {...props} reverse={true} />);
  expect(component.find('.c-timeline--reverse')).toHaveLength(1);
});

it('should handle call clearInterval on unmount', () => {
  jest.useFakeTimers();
  const component = mount(<Timeline {...props} />);
  component.unmount();
  expect(clearInterval).toHaveBeenCalledWith(1);
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

describe('Rendering of time labels', () => {
  it('should handle renderMostRecentTime correctly', () => {
    const component = mount(<Timeline {...props} />);
    component.setState({ builds }, () => {
      expect(component.find('.c-timeline__label').first().text()).toContain('Most recent');
    });
  });

  it('should handle renderOldestTime correctly', () => {
    const component = mount(<Timeline {...props} />);
    component.setState({ builds }, () => {
      expect(component.find('.c-timeline__label').last().text()).toContain('Oldest');
    });
  });
});
