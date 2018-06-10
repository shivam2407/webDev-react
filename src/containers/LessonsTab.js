import React, {Component} from 'react'

class LessonsTab extends Component {
    render() {
        return (
            <ul className="nav nav-tabs">
            <li className="nav-items"><a className="nav-link active">
                Active Tabs</a></li>
                <li className="nav-items"><a className="nav-link">
                Other Tabs</a></li>
            </ul>
        )
    }
}

export default LessonsTab