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
    School.checkPointModel.create({ quizArray, name , teacherId })
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
        
            res.status(404).send(err)
        })
}

/// git all quiz for spsific teacher that he created
exports.getCheckponit = (req, res) => {
    // taking the id of specific teacher
    var teacherId = req.params.id.replace(' "','')
    

    
    School.checkPointModel.find({teacherId: JSON.parse(teacherId)},(err,rst)=> {
        if(err) res.status(500).send(err)
        console.log(rst)
        res.status(200).send(rst)})
  


}

// still it's finished yet 
exports.updateCheckpoint = (req,res)=>{
    let name = req.body.name
    let quizArray = req.body.quizArray
    let teacherId = req.params.id 
    School.TeacherModel.findById(teacherId,(err,{Quiz})=>{
    let quizId =  JSON.parse(JSON.stringify(Quiz))
   console.log(quizId)       
    })


}



exports.allCheckpoint = (req,res) => {
    School.checkPointModel.find({}, (err,rst)=>{
           if(err) res.status(500).send(err)
           res.status(200).send(rst)

    })
}
