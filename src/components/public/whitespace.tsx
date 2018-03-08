
import * as React from 'react'
import "./style/whitespace.css"
/**
 * 线条 
 * */
export class WhitespaceComponents extends React.Component<{ height: any }, any> {
    render() {
        return <div className="app-whitespace app-border-top" style={{ height: this.props.height }} >

        </ div>
    }
}


