import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { renderRoutes, RouteConfig, RouteConfigComponentProps } from 'react-router-config'
import { observer, inject } from 'mobx-react';
import Animate from 'rc-animate';
import Loadable from 'react-loadable';
import ActivityIndicator from "antd-mobile/lib/activity-indicator";
import List from 'antd-mobile/lib/list';
const Item = List.Item;
const Brief = Item.Brief;
class RootRoutes extends React.Component<any, any> {
    NoMatch = ({ location }) => (
        <div>
            <h3>无法匹配 <code>{location.pathname}</code></h3>
        </div>
    )
    // 创建过渡动画
    createCSSTransition = (Component: any, content = true, classNames = "fade") => {
        return class extends React.Component<any, any>{
            render() {
                return (
                    <Animate transitionName={classNames}
                        transitionAppear={true} component="">
                        <div className="animate-content">
                            <Component  {...this.props} />
                        </div>
                    </Animate  >
                );
            }
        }
    };
    // 组件加载动画
    Loading = () => (
        // <ActivityIndicator  size="large" />
        null
    );
    /**
     * 
     * @param Component 组件
     * @param Animate 路由动画
     * @param Loading 组件加载动画
     * @param cssTranParams 路由动画参数
     */
    Loadable(Component, Animate = true, Loading = this.Loading, cssTranParams = { content: true, classNames: "fade" }) {
        if (!Loading) {
            Loading = () => null;
        }
        // console.log("Loading",Loading);
        const loadable = Loadable({ loader: Component, loading: Loading });
        if (Animate) {
            return this.createCSSTransition(loadable, cssTranParams.content, cssTranParams.classNames);
        }
        return loadable;
    };
    routes: RouteConfig[] = [

    ]

    render() {
        return (
            <BrowserRouter>
                {renderRoutes(this.routes)}
            </BrowserRouter>
        );
    }
}
export default class extends RootRoutes {
    // routes: RouteConfig[] = [
    routes: any[] = [
        {
            path: "/",
            exact: true,
            component: () => {
                // 输出路由列表
                return <div>
                    <List renderHeader={() => '路由列表'}>
                        {this.routes.map((x, i) => {
                            if (x.path && x.path != "/") {
                                return <Item key={i} extra={
                                    <Link to={x.path} >{x.name} </Link>
                                }> </Item>
                            }
                        })}
                    </List>
                </div>
            },
        },
        {
            name: "日历",
            path: "/calendar",
            component: this.Loadable(() => import('./containers/calendar')),
        },
        {
            name: "今日课程",
            path: "/curriculumDay",
            component: this.Loadable(() => import('./containers/curriculum').then(x => x.CurriculumDay)),
        },
        {
            name: "课程详情",
            path: "/CurriculumDetails/:id",
            component: this.Loadable(() => import('./containers/curriculum').then(x => x.CurriculumDetails)),
        },
        {
            name: "统计",
            path: "/CurriculumStatistics",
            component: this.Loadable(() => import('./containers/curriculum').then(x => x.CurriculumStatistics)),
        },
        {
            name: "周课程",
            path: "/CurriculumWeek",
            component: this.Loadable(() => import('./containers/curriculum').then(x => x.CurriculumWeek)),
        },
        {
            component: this.createCSSTransition(this.NoMatch)
        }
    ]

}
