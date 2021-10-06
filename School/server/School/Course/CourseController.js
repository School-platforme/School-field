var School = require("../School")

////after creation the course we need to update the teacher schema with that id  
exports.createCourse = function (req, res) {
    ///taking the array that have the  course from the client     
    let coursedata = req.body
    /// taking the id also to use it for updating 
    let teacherId = req.params.id
    //creation of the course 
    School.CourseModel.create(coursedata)
        .then((data) => {
            console.log("course added")
            ///after creation the course we will use the id that come from the specific teacher 
            ///and update the array of course inside the teacher Schema with the id  of course that mongoose generated when we create the course 
            return School.TeacherModel.findByIdAndUpdate(teacherId, {
                $push: { Cours: data }

            })
            /// if there is an error 
        }).catch((err) => {
            console.log(err)
        })
}