import React from 'react'

let _singleton = Symbol();
const baseUrl = "https://sheltered-lake-69749.herokuapp.com/api/";

class CourseService {
    constructor(singletonToken) {
        if (_singleton!== singletonToken) {
            throw new Error("Cannot Instantiate directly")
        }
    }
    static get instance() {
        if (!this[_singleton]) {
            this[_singleton] =  new CourseService(_singleton);
        }
        return this[_singleton];
    }

    findAllCourses() {
        return fetch(baseUrl+"course").then(function(response) {
            return response.json();
        });
    }
}
export default CourseService;