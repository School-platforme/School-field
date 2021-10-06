
var School = require("../School")
//
exports.createTeacher = function (req, res) {
    // taking the information for the teacher that comes from the client side 
    const teacherData = req.body   
    // save the information into the data base 
       School.TeacherModel.create(teacherData)
       //if the data is saved without problem 
       .then (()=>{
           console.log("techer created ")
           // if there is an error
       }).catch((err)=>{
           console.log(err)
       } )
  
  };
  