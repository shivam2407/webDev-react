import React, {Component} from 'react'
import ModuleListItem from '../components/moduleListItem'

class ModuleList extends Component{
    render() {
        return (
            <ul className="list-group">
                <ModuleListItem message="Hey there"/>
                <ModuleListItem/>
                <ModuleListItem/>
                <ModuleListItem/>
                <ModuleListItem/>
                <ModuleListItem/>
            </ul>
        );
    }
}

export default ModuleList