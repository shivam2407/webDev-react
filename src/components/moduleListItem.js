import React, {Component} from 'react'

export default class ModuleListItem
    extends Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <li className="list-group-item">
                    {this.props.message}
                    <span className="float-right">
                        <i className="fa fa-trash"/>
                        <i className="fa fa-pencil"/>
                    </span>
                </li>
            );
        }
    }