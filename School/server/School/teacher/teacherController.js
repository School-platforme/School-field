
var School = require("../School")
var mongoose = require('mongoose');
//to create teacher 
exports.createTeacher = (req, res) => {
    // taking the information for the teacher that comes from the client side 
    const teacherData = req.body
    // save the information into the data base 
    School.TeacherModel.create(teacherData)
        //if the data is saved without problem 
        .then(() => {
            console.log("techer created ")
            // if there is an error
        }).catch((err) => {
            console.log(err)
        })

};
// to get all the student 
exports.getAllStudent = (req, res) => {
    //take the id of the specfic teacher 
    let teacherId = req.params.id
    //find that teacher with his id 
    School.TeacherModel.findById(teacherId, (err, data) => {
        // and then take the array of student id 
        let ArrayOfStudentsId = JSON.parse(JSON.stringify(data.Students))
        // use this query ,it will look for all the id that exist in ArrayOfStudentsId that you take it from the teacher 
        School.StudentModel.find().where('_id').in(ArrayOfStudentsId).exec((err, studentData) => {
            //if there is no student send back error
            if (err) res.status(404).send(err)
            // else send all the student to the client 
            res.status(200).send(studentData)
        })
    })


}

