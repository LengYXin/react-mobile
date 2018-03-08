import * as React from 'react'
// import { observer, inject } from 'mobx-react';

import Calendar from "antd-mobile/lib/calendar"

// @observer
export default class extends React.Component<any, any> {
  onConfirm = (startTime, endTime) => {
    // document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
    // this.setState({
    //   show: false,
    //   startTime,
    //   endTime,
    // });
    console.log(startTime, endTime);
  }
  // onSelect = (date, state) => {
  //   console.log('onSelect', date, state);
  // }
  render() {
    return <Calendar

      // {...this.state.config}
      visible={true}
      pickTime={true}
      // renderHeader={() => (
      //   <div className="header"><span className="title">日期选择</span></div>
      // )}
      onConfirm={this.onConfirm}
    // onSelectHasDisableDate={this.onSelectHasDisableDate}
    // getDateExtra={this.getDateExtra}
    // defaultDate={now}
    minDate={new Date("2018-01-01")}
    maxDate={new Date("2018-03-01")}
    />
  }
}