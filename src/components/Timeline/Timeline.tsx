import classNames from 'classnames';
import * as React from 'react';
import 'whatwg-fetch';

import Loader from '../Loader';
import Status from '../Status';
import TimeFromNow from '../TimeFromNow';

interface InterfaceProps {
  circleCiKey: string,
  limit: number,
  repository: string,
  reverse?: boolean,
  user: string,
  workflow: string
}

interface InterfaceState {
  builds: InterfaceResponseItem[] | null,
  fetching: boolean,
  refreshing: boolean,
}

interface InterfaceResponseItem {
  build_num: number,
  build_url: string,
  build_time_millis: number,
  outcome: string,
  why: string,
  start_time: string,
  status: string
}

class Timeline extends React.Component<InterfaceProps, InterfaceState> {
  public static defaultProps = {
    reverse: false
  }

  private intervalId: any;

  constructor(props: InterfaceProps) {
    super(props);

    this.state = {
      builds: null,
      fetching: false,
      refreshing: false,
    };
  }

  public componentDidMount() {
    this.intervalId = setInterval(() => this.callApi(true), 60000);
    this.callApi(false);
  }

  public componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  public getFilteredBuilds = (filter: string, array: InterfaceResponseItem[] ) => array.filter(build => build.why === filter);

  public callApi = (refreshing: boolean) => {
    this.setState({ fetching: true, refreshing });
    this.fetchApi()
      .then((data) => {
        const filteredBuilds = this.getFilteredBuilds(this.props.workflow, data);
        this.setState({ builds: filteredBuilds.slice(0, this.props.limit), fetching: false, refreshing: false });
      })
      .catch(reason => console.log(reason.message));
  }

  public async fetchApi() {
    const { user, repository, circleCiKey } = this.props;
    const url = `https://circleci.com/api/v1.1/project/github/${user}/${repository}?circle-token=${circleCiKey}&limit=100`;
    const apiResponse = await fetch(url);
    const data = await apiResponse.json();
    return data;
  }

  public renderTimeline = () => {
    let render;

    if (this.state.builds && this.state.builds.length) {
      render = this.state.builds.map((item: InterfaceResponseItem) => {
        if (item.why === this.props.workflow) {
          if (item.outcome === null && item.status === 'running') {
            return (<Status status='pending' url={item.build_url} key={`${item.build_time_millis}-${item.build_num}`} />)
          } else if (item.outcome === 'success') {
            return (<Status status='success' url={item.build_url} key={`${item.build_time_millis}-${item.build_num}`} />)
          } else {
            return (<Status status='error' url={item.build_url} key={`${item.build_time_millis}-${item.build_num}`} />)
          }
        } else {
          return
        }
      });
    }

    return render
  }

  public render() {
    const { reverse } = this.props;
    const { builds, fetching, refreshing } = this.state;

    return (
      <div className={classNames('c-timeline', { 'c-timeline--reverse': reverse })}>
        <div className='c-timeline__labels'>
          <span className='c-timeline__label'>
            Most recent ({builds && builds.length ? <TimeFromNow time={builds[0].start_time} /> : <span>...</span>})
          </span>
          <span className='c-timeline__label'>
            Oldest ({builds && builds.length ? <TimeFromNow time={builds[builds.length - 1].start_time} /> : <span>...</span>})
          </span>
        </div>
        <div className='c-timeline__bar'>
          {fetching && !builds && <Loader label='Loading...' />}
          {!fetching && builds && builds.length && this.renderTimeline()}
          {refreshing && <Loader label='Refreshing' />}
        </div>
      </div>
    );
  }
}

export default Timeline;
