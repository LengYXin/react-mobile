
import * as React from 'react'
import WingBlank from 'antd-mobile/lib/wing-blank';
import Card from 'antd-mobile/lib/card';
import WhiteSpace from 'antd-mobile/lib/white-space';
import "./style/card.css"
/**
 * 上左右编辑 面板
 */
export class CardComponents extends React.Component<{ className?: string; }, any> {
    render() {
        return <WingBlank size="md" {...this.props}>
            <WhiteSpace size="md" />
            <Card className="app-card">
                <Card.Body className="app-card-body">
                    {this.props.children}
                </Card.Body>
            </Card>
        </WingBlank>
    }
}


