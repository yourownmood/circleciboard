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
  fetching: boolean
}

interface InterfaceResponseItem {
  build_num: number,
  build_time_millis: number,
  outcome: string,
  why: string,
  status: string
}

class Timeline extends React.Component<InterfaceProps, InterfaceState> {
  constructor(props: InterfaceProps) {
    super(props);
    this.state = {
      builds: null,
      fetching: false
    };
  }

  public componentDidMount() {
    this.callApi();
  }

  public callApi = () => {
    this.setState({ fetching: true });
    this.fetchApi()
      .then(data => this.setState({ builds: data, fetching: false }))
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
            return (<Status status='pending' key={`${item.build_time_millis}-${item.build_num}`} />)
          } else if (item.outcome === 'success') {
            return (<Status status='succes' key={`${item.build_time_millis}-${item.build_num}`} />)
          } else {
            return (<Status status='error' key={`${item.build_time_millis}-${item.build_num}`} />)
          }
        } else {
          return
        }
      });
    }

    return render
  }

  public render() {
    const { builds, fetching } = this.state;

    return (
      <div className="c-timeline">
        {fetching && <Loader />}
        {!fetching && builds && builds.length && this.renderTimeline()}
      </div>
    );
  }
}

export default Timeline;
