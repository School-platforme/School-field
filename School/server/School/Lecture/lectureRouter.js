var lectureRoute = require('express').Router()
var lectureController = require('./lectureController')



lectureRoute.route('/addLecture/:id')
        .post(lectureController.createLecture)



lectureRoute.route('/Lecture')
            .get(lectureController.allLecture)        




 module.exports = lectureRoute;            