import * as React from 'react';
import Animate from 'rc-animate';
import { LaughComponents } from '../../../components';
import Tabs from "./components/tabs";
import Table from "./components/table";
export default class extends React.Component<any, any> {
    render() {
        return <div className="curriculum-week-content">
            <Tabs />
            <div className="curriculum-week-table fade-enter fade-enter-active">
                <Table />
            </div>
        </div>
    }
}

