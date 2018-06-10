import React, {Component} from 'react'
import ModuleList from './moduleList'
import LessonTabs from './LessonsTab'

class CourseEditor extends Component  {
    render() {
        return (
            <div className="row">
                <div className="col-4">
                <ModuleList/>
                </div>
                <div className="col-8">
                <LessonTabs/>
                </div>
            </div>
        );
    }
}
export default CourseEditor