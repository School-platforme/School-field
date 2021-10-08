// This is the model

var mongoose = require('mongoose');
const db = require('../db/index.js');
mongoose.Promise = global.Promise;


//
//this the admin to create his account
var adminSchema = mongoose.Schema({
  User: { type: String, unique: true, required: true },
  Password: { type: String, required: true },
  Email: { type: String, unique: true, required: true },
  ImageUrl: { type: String, required: true },

})

var AdminModel = mongoose.model("ADMIN", adminSchema)

///admin model 
var contactUsSchema = mongoose.Schema({
  Name: { type: String  },
  Email: { type: String  },
  Subject: { type: String  },
  Message: { type: String  },

})

/// contact us model 

var contactUsModel = mongoose.model("contactUs",contactUsSchema)
// this for the admin after he create his account know he can add a teacher 
var createTeacherSchema = mongoose.Schema({
  TeacherName: { type: String, required: true },
  TeacherLastName: { type: String, required: true },
  Password: { type: String, required: true },
  ImageUrl: { type: String, required: true },
  Email: { type: String, unique: true, required: true },
  Field: { type: String, required: true },
  Phone: { type: String, required: true },
  Experience: { type: String, required: true },
  Students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "student"
  }],
  Cours: [{

    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"

  }],

});
//// teacher model 
var TeacherModel = mongoose.model("teacher", createTeacherSchema)




// this schema has relation to the teacher ***one teacher has many student***
var createStudentSchema = mongoose.Schema({
  ImageUrl: { type: String, required: true },
  StudentName: { type: String, required: true },
  StudentLastName: { type: String, required: true },
  Age: { type: Number, required: true },
  Phone: { type: Number, required: true },
  Password: { type: String, required: true },
  Teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher"
  }
  ,
  Result: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Result"
  }]

})
var StudentModel = mongoose.model("student", createStudentSchema)



//this for the teacher to let him create or add lecture or exercice or quiz for the lecture  ***one teacher has many lecture exercice and quiz ***
var createLectureAndQuizAndExerciceSchema = mongoose.Schema({
  Lecture: { type: Array, "default": [] },
  Exercice: { type: Array, "default": [] },
  Quiz: { type: Array, "default": [] },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher"
  }
})

var CourseModel = mongoose.model("Course", createLectureAndQuizAndExerciceSchema)


//this schema for the result of one studenet ***one student has many result*** 
var resultSchema = mongoose.Schema({
  ExResult: { type: Number },
  QzResult: { type: Number },
  Student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student"
  }
})
var ResultModel = mongoose.model("Result", resultSchema)

module.exports = {
  AdminModel,
  contactUsModel,
  TeacherModel,
  StudentModel,
  CourseModel,
  ResultModel
};
