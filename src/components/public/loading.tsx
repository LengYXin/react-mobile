
import * as React from 'react'
import "./style/loading.css"
/** 
 * 加载动画
 * */ 
export class LoadingComponents extends React.Component<any, any> {
    render() {
        return <div className="root-app-loading">
            <div>
                <div className="am-activity-indicator am-activity-indicator-lg">
                    <span className="am-activity-indicator-spinner am-activity-indicator-spinner-lg" aria-label="loading"></span>
                </div>
                <span style={{ marginTop: "8px" }}>Loading...</span>
            </div>
        </div>
    }
}


