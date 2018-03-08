import * as React from 'react'
import ReactDOM from 'react-dom';
import Animate from 'rc-animate';
import Flex from 'antd-mobile/lib/flex';
import randomColor from 'randomcolor';
import { observer, inject } from 'mobx-react';
import { LoadingComponents } from '../../../../components';
import { Link } from 'react-router-dom';

@inject("Curriculum")
@observer
export default class extends React.Component<any, any> {
    componentDidMount() {

    }
    onClick() {
        this.props.Curriculum.week.setTabsShow();
    }
    renderThead() {
        const { times } = this.props.Curriculum.week.data;
        return <Flex className="curriculum-week-thead curriculum-week-box-shadow" onClick={this.onClick.bind(this)}>
            <Flex>
            </Flex>
            {times.map((x, i) => <Flex key={i} direction="column" >
                <Flex className="curriculum-week-th-z"><span >{x.title}</span></Flex>
                <Flex className="curriculum-week-th-t"><span >{x.time}</span></Flex>
            </Flex>)}
        </Flex>
    }
    renderTbody() {
        const { list } = this.props.Curriculum.week.data;
        return <div className="curriculum-week-tbody ">
            {list.map((x, i) => <Flex key={i} >
                <Flex direction="column" className="curriculum-week-td-back">
                    <Flex.Item>{x.start}</Flex.Item>
                    <Flex.Item>{x.end}</Flex.Item>
                </Flex>
                {x.list.map((x, i) => <Flex key={i} className="curriculum-week-td-border">
                    <Link to="/CurriculumDetails/:id" className="curriculum-week-td">   <span style={{ color: randomColor() }} >  {x.name}</span> </Link>
                </Flex>)}
            </Flex>
            )}
        </div>
    }
    render() {
        const Loading = this.props.Curriculum.week.LoadingData;
        if (Loading) {
            return <LoadingComponents />;
        }
        return <Animate transitionName="fade" transitionAppear={true} component="">
            <div >
                {this.renderThead()}
                {this.renderTbody()}
            </div>
        </Animate >
    }
}

