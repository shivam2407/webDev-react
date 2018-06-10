import React, {Component} from 'react'

class CourseRow extends Component{

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>{this.props.course.title   }</td>
                <td>me</td>
                <td>{this.props.course.modified}</td>
                <td><i className="fa fa-times"></i></td>
            </tr>
        )
    }
}

export default CourseRow