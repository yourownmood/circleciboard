import * as moment from 'moment';
import * as React from 'react'

interface InterfaceProps {
  time: string | null,
}

class TimeFromNow extends React.Component<InterfaceProps> {
  public convertTime = () => {
    const { time } = this.props;
    if (time) {
      const timeConvertTimezone = moment(time).utcOffset(time);
      const timeFromNow = moment(timeConvertTimezone, 'YYYY-MM-DDTHH:mm:ss.SSSSZ').fromNow();
      return timeFromNow;
    }

    return '...';
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
