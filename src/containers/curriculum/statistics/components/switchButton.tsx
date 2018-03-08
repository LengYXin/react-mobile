import * as React from 'react';
import { observer, inject } from 'mobx-react';

/** 
 * 切换按钮
*/
@inject("Curriculum")
@observer
export default class extends React.Component<any, any> {
    switch() {
        this.props.Curriculum.statistics.switch();
    }
    render() {
        return <span className="color-green" onClick={this.switch.bind(this)}> <i className="icon-refresh iconfont"></i> </span>
    }
}

