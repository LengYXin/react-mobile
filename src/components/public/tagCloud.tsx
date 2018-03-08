import * as React from 'react';
import TagCloud from 'react-tag-cloud';
import Animate from 'rc-animate';
import randomColor from 'randomcolor';
import "./style/tagCloud.css";
const styles = {
    large: {
        fontSize: 60,
    },
    small: {
        opacity: 0.7,
        fontSize: 16
    }
};
interface Props {
    /** 
     * 标签数据
    */
    data: { text: string, conut: number }[];
    /** 
     * 更新时间
    */
    time?: number;
    /**
     *高度 
     */
    height?: any;
}
/**
 * 云标签
 */
export class TagCloudComponents extends React.Component<Props, any> {
    setInterval
    componentDidMount() {
        if (this.props.time) {
            console.log("componentDidMount");
            this.setInterval = setInterval(() => {
                console.log("setInterval");
                this.forceUpdate();
            }, this.props.time);
        }
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.setInterval);
    }
    componentDidCatch(error, info) {
        console.log(error);
    }
    renderData() {
        let { data } = this.props;
        if (data && data.length) {
            // // 排序
            // // data = data.sort((x, y) => x.text.length < y.text.length ? -1 : 1);
            // let newData = [[], ...data].reduce((x: any[], y) => {
            //     console.log(y);
            //     x.push(y);
            //     return x;
            // });
            // console.log(newData);
            // console.log(data);
            return data.map((x, i) => <div key={i} className="fade-enter fade-enter-active ">{x.text}</div>);
        }
        return <div>没有配置Tag</div>
    }
    render() {
        const { height } = this.props;
        return <div style={{ height: height || "100%", display: "flex", width: "100%" }}>
            <TagCloud className="tag-cloud "
                style={{
                    fontFamily: 'sans-serif',
                    fontSize: 15,
                    fontWeight: 'bold',
                    // fontStyle: 'italic',
                    color: () => randomColor(),
                    padding: 5,
                    // width: '100%',
                    // height: '300px'
                }}>
                {this.renderData()}
            </TagCloud>
        </div>
    }
}


