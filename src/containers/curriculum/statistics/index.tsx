import * as React from 'react'
import { observer, inject } from 'mobx-react';
import DataBody from './body';
import { LoadingComponents } from '../../../components';
import "./style.css"

@inject("Curriculum")
@observer
export class CurriculumStatistics extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.props.Curriculum.statistics.getData();
    }
    componentWillUnmount() {
        this.props.Curriculum.statistics.switch(true);
    }
    render() {
        const Loading = this.props.Curriculum.statistics.Loading;
        if (Loading) {
            return <LoadingComponents />;
        }
        return <DataBody />
    }
}


