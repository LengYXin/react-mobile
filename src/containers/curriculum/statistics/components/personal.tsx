import * as React from 'react';
import { observer, inject } from 'mobx-react';
import Flex from 'antd-mobile/lib/flex';
import WhiteSpace from 'antd-mobile/lib/white-space';
import { TagCloudComponents, CardComponents } from '../../../../components';

import SwitchButton from "./switchButton";
/**
 * 个人信息
 */
@inject("Curriculum")
@observer
export default class extends React.Component<any, any> {
    render() {
        const data = this.props.Curriculum.statistics.data;
        return <CardComponents>
            <Flex direction="column" className="curriculum-statistics">
                <Flex className="curriculum-statistics-title">
                    <Flex.Item><h5>亲爱的<span className="color-green">{data.name}</span>：</h5></Flex.Item>
                    <Flex align="end">
                        <SwitchButton />
                    </Flex>
                </Flex>
                <WhiteSpace size="xl" />
                <Flex className="curriculum-statistics-semester" align="start">
                    <span className="color-ash">{data.semester}</span>
                </Flex>
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <Flex className="curriculum-statistics-statistics" justify="center">
                    <Flex align="end" style={{ paddingRight: "21px" }}><span className="color-green curriculum-statistics-count">{data.courses_num}</span><span style={{ paddingLeft: "10px" }}> 门课程</span></Flex>
                    <Flex style={{ paddingLeft: "21px" }}><span className="color-orange curriculum-statistics-count">{data.class_num} </span><span style={{ paddingLeft: "10px" }}> 节课</span></Flex>
                </Flex>
                <TagCloud />
            </Flex>
        </CardComponents>
    }
}


@inject("Curriculum")
@observer
class TagCloud extends React.Component<any, any> {

    render() {
        const data = this.props.Curriculum.statistics.data.tag.slice();
        return <>
            <WhiteSpace size="xl" />
            <WhiteSpace size="lg" className="app-border-bottom" />
            <WhiteSpace size="md" />
            <Flex direction="column" style={{ height: "166px", width: "100%" }}>
                <TagCloudComponents data={data} time={4000} height={"100%"} />
            </Flex>
        </>
    }
}
