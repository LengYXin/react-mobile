import * as React from 'react'
import ReactDOM from 'react-dom';
import { observer, inject } from 'mobx-react';
import Tabs from 'antd-mobile/lib/Tabs';
import Animate from 'rc-animate';
@inject("Curriculum")
@observer
export default class extends React.Component<any, any> {
    Tabs;
    componentDidMount() {
        try {
            const TabsDom = ReactDOM.findDOMNode(this.Tabs);
            // 删除 tabs 下面的 content容器
            TabsDom.querySelector(".am-tabs-content-wrap-animated").remove();
        } catch (error) {
            console.error(error);
        }
    }
    tabIndex = 0;
    onChange(tab, index) {
        // console.log(tab, index);
        this.tabIndex = index;
        this.props.Curriculum.week.getWeek(tab.id);
    }
    onTabClick(tab, index) {

        if (this.tabIndex == index) {
            this.props.Curriculum.week.setTabsShow();
        }
    }
    renderTabBar(props) {
        return <Tabs.DefaultTabBar
            {...props}
            renderTab={props => <span> {props.title} </span>}
        />
    }
    render() {
        console.log("tabs");
        return <Animate transitionName="fade" transitionAppear={true} component="">
            <div className={`curriculum-week-tabs ${this.props.Curriculum.week.tabsShow}`}>
                <Tabs
                    tabs={this.props.Curriculum.week.tabs}
                    initialPage={0}
                    renderTabBar={this.renderTabBar.bind(this)}
                    useOnPan={false}
                    ref={e => this.Tabs = e}
                    onChange={this.onChange.bind(this)}
                    onTabClick={this.onTabClick.bind(this)}
                >
                </Tabs >
            </div>
        </Animate>
    }
}

