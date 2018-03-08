import * as React from 'react';
import List from 'antd-mobile/lib/list';
import Flex from 'antd-mobile/lib/flex';
import Animate from 'rc-animate';
import { LaughComponents } from '../../../components';
import { Link } from 'react-router-dom';

const Item = List.Item;
export default class extends React.Component<any, any> {
    onClick(data) {
        console.log(data);
    }
    renderData() {
        const data = this.props.data;
        if (data && data.list) {
            return <List>
                {data.list.map((x, i) => <Item key={i} >
                  <DataItem data={x} />
                </Item>)}
            </List>
        } else {
            return <div className="curriculum-day-itemsNull">
                <div className="curriculum-day-itemsNull-Svg"><LaughComponents /></div>
                <p className="color-ash">今天没有课哦</p>
            </div>
        }
    }
    render() {
        const data = this.props.data;
        return <Animate transitionName="fade" transitionAppear={true} component="">
            <div className="curriculum-body">
                <div className="curriculum-day-time">{data && data.time} </div>
                <div className="curriculum-day-items">
                    {this.renderData()}
                </div>
            </div>
        </Animate>
    }
}
class DataItem extends React.Component<any, any> {
    render() {
        const data = this.props.data;
        return <Link to="/CurriculumDetails/:id"  className="curriculum-day-item">
            <div className="curriculum-day-item-left"></div>
            <Flex className="curriculum-day-item-right  " direction="column">
                <Flex className="curriculum-item-head">
                    <Flex><span className="curriculum-item-title" >{data.title}</span></Flex>
                    <Flex.Item align="end">
                        {data.teacher.map((x, i) => <span key={i} className="curriculum-item-title-span" >{x}</span>)}
                    </Flex.Item>
                </Flex>
                <Flex className="curriculum-item-into" direction="column">
                    <Flex><i className="icon-book iconfont color-ash"></i> <span>{data.name}</span></Flex>
                    <Flex className="color-ash"><i className="icon-address iconfont color-ash"></i> <span>{data.address}</span></Flex>
                </Flex>
            </Flex>
        </Link>
    }
}

