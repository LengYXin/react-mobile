import * as React from 'react'
import { observer, inject } from 'mobx-react';
import DataBody from './body';
import { LoadingComponents } from '../../../components';
import "./style.css"

@inject("Curriculum")
@observer
export class CurriculumDetails extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.props.Curriculum.details.getData();
        console.log(this);
    }
    render() {
        const Loading = this.props.Curriculum.details.Loading;
        if (Loading) {
            return <LoadingComponents />;
        }
        return <DataBody />
    }
}


