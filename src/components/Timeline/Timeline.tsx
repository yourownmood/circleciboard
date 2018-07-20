import * as React from 'react';
import 'whatwg-fetch';

import Loader from '../Loader';
import Status from '../Status';

interface InterfaceProps {
  user: string,
  repository: string,
  circleCiKey: string,
}

interface InterfaceState {
  builds: [{}] | null,
  fetching: boolean,
  refreshing: boolean
}

interface InterfaceResponseItem {
  build_num: number,
  build_url: string,
  build_time_millis: number,
  outcome: string,
  why: string,
  status: string
}

class Timeline extends React.Component<InterfaceProps, InterfaceState> {
  private intervalId: any;

  constructor(props: InterfaceProps) {
    super(props);

    this.state = {
      builds: null,
      fetching: false,
      refreshing: false
    };
  }

  public componentDidMount() {
    this.intervalId = setInterval(() => this.callApi(true), 60000);
    this.callApi(false);
  }

  public componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  public callApi = (refreshing: boolean) => {
    this.setState({ fetching: true, refreshing });
    this.fetchApi()
      .then(data => this.setState({ builds: data, fetching: false, refreshing: false }))
      .catch(reason => console.log(reason.message));
  }

  public async fetchApi() {
    const { user, repository, circleCiKey } = this.props;
    const url = `https://circleci.com/api/v1.1/project/github/${user}/${repository}?circle-token=${circleCiKey}`;
    const apiResponse = await fetch(url);
    const data = await apiResponse.json();
    return data;
  }

  public renderTimeline = () => {
    let render;

    if (this.state.builds && this.state.builds.length) {
      render = this.state.builds.map((item: InterfaceResponseItem) => {
        if (item.why === 'scheduled-workflow') {
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
    const { builds, fetching, refreshing } = this.state;

    return (
      <div className='c-timeline'>
        {fetching && !builds && <Loader />}
        {!fetching && builds && builds.length && this.renderTimeline()}
        {refreshing && <div className="c-timeline__refreshing">Refreshing</div>}
      </div>
    );
  }
}

export default Timeline;
