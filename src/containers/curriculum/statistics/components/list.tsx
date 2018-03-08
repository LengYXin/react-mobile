
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import List from 'antd-mobile/lib/list';
import Flex from 'antd-mobile/lib/flex';
import WingBlank from 'antd-mobile/lib/wing-blank';
import WhiteSpace from 'antd-mobile/lib/white-space';
import { WhitespaceComponents, CardComponents } from '../../../../components';
const Item = List.Item;
import SwitchButton from "./switchButton";

@inject("Curriculum")
@observer
export default class extends React.Component<any, any> {
    renderBody(x) {
        return <>
            <Flex direction="column">
                <Flex className="curriculum-row">
                    <Flex.Item> <span>{x.name}</span></Flex.Item>
                    <Flex align={"end"}>
                        <span>剩余</span>
                    </Flex>
                </Flex>
                <Flex className="curriculum-row curriculum-statistics-list-count">
                    <Flex.Item> <span className="color-green">{x.read_num}</span> <span className="color-ash">节课</span></Flex.Item>
                    <Flex.Item align="end">
                        <span className="color-orange">{x.surplus_num}</span>  <span  className="color-ash">节课</span>
                    </Flex.Item>
                </Flex>
            </Flex>
        </>
    }
    render() {
        const data = this.props.Curriculum.statistics.data.list.slice();
        return <div className="curriculum-statistics-list">
            <WingBlank size="md" className="curriculum-statistics-list-title" >
                <WhiteSpace size="lg" />
                <Flex >
                    <Flex className="curriculum-row">
                        <span>课程列表</span>
                    </Flex>
                    <Flex className="curriculum-row" align="end" justify="end">
                        <SwitchButton />
                    </Flex>
                </Flex>
            </WingBlank>
            {data && data.map((x, i) =>
                <CardComponents key={i} >
                    {this.renderBody(x)}
                </CardComponents>
            )
            }
        </div>
    }
}