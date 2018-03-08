import * as React from 'react';
import { observer, inject } from 'mobx-react';
import Flex from 'antd-mobile/lib/flex';
import WhiteSpace from 'antd-mobile/lib/white-space';
import { CardComponents } from '../../../../components';

/** 
 * 课程总数统计
*/
@inject("Curriculum")
@observer
export default class extends React.Component<any, any> {
    render() {
        const data = this.props.Curriculum.statistics.data;
        return <CardComponents>
            <Flex direction="column" className="curriculum-statistics-theSum">
                <Flex align="start">
                    <span className="color-ash">你已经坚持了<span className="color-green curriculum-s-t-count">{data.read_num}</span> 节课</span>
                </Flex>
                <WhiteSpace size="xl" />
                <Flex align="center" justify="center">
                    <span>还有 <span className="color-orange curriculum-s-t-count">{data.surplus_num}</span> 节课就迎来暑假了喔~</span>
                </Flex>
                <WhiteSpace size="lg" />
            </Flex>
        </CardComponents>
    }
}

