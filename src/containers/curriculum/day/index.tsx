import * as React from 'react'
import { observer, inject } from 'mobx-react';

import Tabs from 'antd-mobile/lib/Tabs';
import DataBody from './body';
import { LoadingComponents } from '../../../components';
import "./style.css"

@inject("Curriculum")
@observer
export class CurriculumDay extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.props.Curriculum.day.getData();
    }
    renderTab(props) {
        return <span> {props.title} </span>
    }
    renderTabBar(props) {
        return <div className="curriculum-day-tabs app-border-bottom">
            <Tabs.DefaultTabBar
                {...props}
                renderTab={this.renderTab.bind(this)}
                page={7}
            // prefixCls={" curriculum-day-tabs am-tabs-default-bar"}
            />
        </div>
    }
    render() {
        const Loading = this.props.Curriculum.day.Loading;
        if (Loading) {
            return <LoadingComponents />;
        }
        const data = this.props.Curriculum.day.data.slice();
        return <Tabs tabs={this.props.Curriculum.day.tabs}
            initialPage={0}
            renderTabBar={this.renderTabBar.bind(this)}
            useOnPan={false}
        // onChange={(tab, index) => { console.log('onChange', index, tab); }}
        // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        // swipeable={false} 
        // prerenderingSiblingsNumber={1}
        // distanceToChangeTab={-10}
        >
            {data.map((x, i) => <DataBody key={i} data={x} />)}
        </Tabs>
    }
}


