import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HOME } from "./pages/Home/HOME";
import { Chekpoint } from "./pages/Students/Checkpoint";
import { Exercice } from "./pages/Students/Exercice";
import { Lecture } from "./pages/Students/Lecture";
import Students from "./pages/Students/Student";
import { Teacher } from "./pages/Teacher/teacherSpace";
import Contact from "./pages/ContactUs/ContactUs";
import { Register } from "./pages/ADMIN/Register";
import { SingIn } from "./pages/ADMIN/SingIn";
import Quiz from "./pages/Teacher/AddCheckpoint";
import Exercice1 from "./pages/Teacher/AddExercice";
import Lecture1 from "./pages/Teacher/AddLecture";
import AddStudent from "./pages/Teacher/AddStudent";

import AddTeachers from "./pages/ADMIN/AddTeacher";
import { FeedBack } from "./pages/ADMIN/FeedBack";
import SchoolStat from "./pages/ADMIN/SchoolState";
import TeachersList from "./pages/ADMIN/TeacherandStudentList";
import { AdminPage } from "./pages/ADMIN/Admin";

import { SingInTeacher } from "./pages/Teacher/SingIn";
import { SingInStudent } from "./pages/Students/SingInStudent";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HOME} />

          <Route path="/students" exact component={Students} />
          <Route path="/students/lecture" exact component={Lecture} />
          <Route path="/students/exercice" exact component={Exercice} />
          <Route path="/students/chekpoint" exact component={Chekpoint} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/teacher" exact component={Teacher} />

          <Route path="/Admin/register" exact component={Register} />
          <Route path="/Admin/singin" exact component={SingIn} />
          <Route path="/teacher/checkpoint" exact component={Quiz} />
          <Route path="/teacher/exercice" exact component={Exercice1} />
          <Route path="/teacher/lecture" exact component={Lecture1} />
          <Route path="/teacher/addstudent" exact component={AddStudent} />

          <Route path="/admin/addteacher" exact component={AddTeachers} />
          <Route path="/admin/feedback" exact component={FeedBack} />
          <Route path="/admin/schoolstate" exact component={SchoolStat} />
          <Route path="/admin" exact component={AdminPage} />
          <Route path="/admin/teacherlist" exact component={TeachersList} />

          <Route path="/teacher/singin" exact component={SingInTeacher} />
          <Route path="/student/singin" exact component={SingInStudent} />
        </Switch>
        <br />
        <br />

        <br />
      </Router>
    </>
  );
}

export default App;
