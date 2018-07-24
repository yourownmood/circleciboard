import * as moment from 'moment';
import * as React from 'react'

interface InterfaceProps {
  time: string,
}

class TimeFromNow extends React.Component<InterfaceProps> {
  public convertTime = () => {
    const { time } = this.props;
    const timeConvertTimezone = moment(time).utcOffset(time);
    const timeFromNow = moment(timeConvertTimezone, 'YYYY-MM-DDTHH:mm:ss.SSSSZ').fromNow();
    return timeFromNow;
  }

  public render() {
    return (
      <span className='c-time-from-now'>
        {this.convertTime()}
      </span>
    );
  }
}

export default TimeFromNow;
