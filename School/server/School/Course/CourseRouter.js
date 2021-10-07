var courseRoute = require("express").Router()
var coursController = require("../Course/CourseController")
//
courseRoute.route("/cours/:id")
    .post(coursController.createCourse)

module.exports = courseRoute