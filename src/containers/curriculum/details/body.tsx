import * as React from 'react';
import { observer, inject } from 'mobx-react';
import List from 'antd-mobile/lib/list';
import Flex from 'antd-mobile/lib/flex';
import WingBlank from 'antd-mobile/lib/wing-blank';
import WhiteSpace from 'antd-mobile/lib/white-space';

import Animate from 'rc-animate';
import { WhitespaceComponents, CardComponents } from '../../../components';

const Item = List.Item;
export default class extends React.Component<any, any> {
    render() {
        return <Animate transitionName="fade" transitionAppear={true} component="">
            <div className="curriculum-body background-color-gray">
                <Title />
                <DataItem />
            </div>
        </Animate >
    }
}
/** 
 * 头部教师信息
*/
@inject("Curriculum")
@observer
class Title extends React.Component<any, any> {
    renderBody() {
        const { isTeacher ,data} = this.props.Curriculum.details;
        if (isTeacher) {
            return <div className="curriculum-details-name-t" onClick={()=>this.props.Curriculum.details.isTeacher=!this.props.Curriculum.details.isTeacher}>{data.name}</div>
        }
        return   <CardComponents><div className="curriculum-details-title" onClick={()=>this.props.Curriculum.details.isTeacher=!this.props.Curriculum.details.isTeacher}>
            <div className="am-card-header">
                <div className="am-card-header-content">
                    <img src="/assets/img/teacher.png" />
                </div>
                <div className="am-card-header-extra">
                    <div className="curriculum-details-name">{data.name}</div>
                    <div className="curriculum-details-lecturer">讲师：{data.teacher}</div>
                </div>
            </div>
        </div>
        </CardComponents>
    }
    render() {
        return this.renderBody()
    }
}
/** 
 * 课程数据
*/
@inject("Curriculum")
@observer
class DataItem extends React.Component<any, any> {
    //教师显示 学生应到人数 学生显示 男女人数
    renderInto(x) {
        const { isTeacher } = this.props.Curriculum.details;
        if (isTeacher) {
            return <>
                <Flex className="curriculum-item-into" direction="column" >
                    <Flex >
                        <Flex.Item>
                            <Flex>
                                <i style={{ display: "block", width: "16px" }} ></i> <span>学生应到人数</span>
                            </Flex>
                        </Flex.Item>
                        <Flex.Item align="end">
                            <span className="color-green">{x.number}人</span>
                        </Flex.Item>
                    </Flex>
                </Flex>
            </>
        }
        return <>
            <WhiteSpace size="lg" />
            <WhitespaceComponents height="13px"/>
            <Flex direction="column" >
                <span className="color-ash" style={{ fontSize: "14px",lineHeight:"14px" }}>  {x.intr}</span>
            </Flex>
        </>
    }
    renderBody(x) {
        return <>
            <Flex direction="column">
                <Flex className="curriculum-item-head">
                    <Flex.Item><span className="curriculum-item-title" >{x.title}</span></Flex.Item>
                    <Flex.Item align="end">
                        <span className="curriculum-item-title-span" >{x.cycle}</span>
                    </Flex.Item>
                </Flex>
                <Flex className="curriculum-item-into" direction="column">
                    <Flex>
                        <Flex.Item>   <i className="icon-time iconfont color-ash"></i> <span>{x.classHour}</span></Flex.Item>
                        <Flex.Item align="end">
                            <span>{x.type}</span>
                        </Flex.Item>
                    </Flex>
                    <Flex><i className="icon-address iconfont color-ash"></i> <span>{x.address}</span></Flex>
                    <Flex><i className="icon-user iconfont color-ash"></i> <span>{x.classes}</span></Flex>
                </Flex>
            </Flex>
            {this.renderInto(x)}
        </>
    }
    render() {
        const data = this.props.Curriculum.details.data.list.slice();
        return <div className="curriculum-details-items">
            <List>
                {data && data.map((x, i) =>
                    <Item key={i}>
                        <CardComponents>
                            {this.renderBody(x)}
                        </CardComponents>
                    </Item>)
                }
            </List>
        </div>
    }
}

