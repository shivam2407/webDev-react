import React, {
    Component
} from 'react'
import CourseRow from '../components/courseRow'
import CourseService from '../services/courseService';

class CourseManager extends Component {

    constructor() {
        super();
        this.courseService = CourseService.instance;
    }

    componentDidMount() {
        this.courseService.findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
            });
    }

    courseList() {
        let course = null;
        if(this.state) {
            course = this.state.courses.map(
                function(course) {
                    return <CourseRow key={course.id} course={course}/>
                }
            )
        }
        return course;
    }

    render () {
        return (
            <div className="container-fluid">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Owned By</th>
                    <th scope="col">Last Modified</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.courseList()}
                </tbody>
            </table> 
            </div>
        )
    }
}

export default CourseManager