import * as React from 'react';
import { observer, inject } from 'mobx-react';
import Animate from 'rc-animate';
import List from "./components/list";
import Personal from "./components/personal";
import Total from "./components/total";
@inject("Curriculum")
@observer
export default class extends React.Component<any, any> {
    render() {
        // this.props.Curriculum.statistics
        if (this.props.Curriculum.statistics.showStatistics) {
            return <PersonalBody />
        }
        return <ListBody />
    }
}
class ListBody extends React.Component<any, any> {

    render() {
        return <Animate transitionName="fade" transitionAppear={true} component="">
            <List />
        </Animate >
    }
}
class PersonalBody extends React.Component<any, any> {

    render() {
        return <Animate transitionName="fade" transitionAppear={true} component="">
            <>
                <Personal />
                <Total />
            </>
        </Animate >
    }
}



