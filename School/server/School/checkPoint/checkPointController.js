var School = require("../School")


// for checkpoint creation 
exports.createCheckPoint = (req, res) => {
    // taking the id of specific teacher
    let teacherId = req.params.id
    //taking the quiz data 
    let quizArray = req.body.quizArray
    // taking the quiz Name 
    let name = req.body.name
    // svae all of them into the data base 
    School.checkPointModel.create({ quizArray, name })
        .then(data => {
            //then use the id for that teacher and look for that teacher to update the array of quizez with id of the quiz that saved in data base 
            return School.TeacherModel.findByIdAndUpdate(teacherId, {
                $push: {
                    Quiz: data
                }
             })
        }).then(() => {
            // if there is no error send 201 as a status code
            res.status(201).send()
        }).catch((err) => {
            // else send an error 
            console.log('eror')
            res.status(404).send(err)
        })
}

/// git all quiz for spsific teacher that he created
exports.getCheckponit = (req, res) => {
    // taking the id of specific teacher
    let teacherId = req.params.id
    School.TeacherModel.findById(teacherId, (err, data) => {
        // look for that teacher 
        if (err) {
            // if there is no teacher with that specific id send directly the err and exit  
            res.status(404).send(err)
            return
        }
        // else take the Quiz Array of that teacher 
        let quizID = JSON.parse(JSON.stringify(data.Quiz))
        //  and get all quiz 
        School.checkPointModel.find().where("_id").in(quizID).exec((err, quizes) => {
            // if error send error  
            if (err) res.status(404).send()
            // send the quizes
            res.status(200).send(quizes)
        })
    })



}

