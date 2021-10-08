import React, { useState, useEffect } from "react";
import Teachers from "./teacher components/Teachers.jsx";
import Lecture from "./teacher components/Lecture.jsx";
import Exercice from "./teacher components/Exercice.jsx";
import Quiz from "./teacher components/Quiz.jsx";
import Solution from "./teacher components/Solution.jsx";
import AddStudent from "./teacher components/AddStudents.jsx";
import Students from "../Students/Students.jsx";


export default function HomeTeacher(props) {
  const [teacherView, seteacherView] = useState("teacher");
  
  const changeView = (option) => {
    seteacherView(option);
  };
  const renderView = () => {
    if (teacherView === "teacher") {
      return <Teachers changeView={changeView} teacher={props.teacher} />;
    } else if (teacherView === "lecture") {
      return <Lecture changeView={changeView} teacher={props.teacher} />;
    } else if (teacherView === "exercice") {
      return <Exercice changeView={changeView} teacher={props.teacher} />;
    } else if (teacherView === "Quiz") {
      return <Quiz changeView={changeView} teacher={props.teacher}  />;
    } else if (teacherView === "solution")   {
      return <Solution changeView={changeView} teacher={props.teacher} />;
    } else if(teacherView === "addstudent"){
      return <AddStudent changeView={changeView} teacher={props.teacher}  />
    }
  };
  const deconnection = () => {
    localStorage.setItem("mainView", "main");
    props.setMain("main");
    props.setteacher({})
  };

  useEffect(() => {

    const tView = localStorage.getItem("teacherView");
    seteacherView(tView);
  }, []);

  useEffect(() => {
    localStorage.setItem("teacherView", teacherView);
  }, [teacherView]);
 console.log(props.teacher)
  return (
    <div>
      <div className="nav-teacher">
        <span
          className={
            teacherView === "teacher" ? "nav-selected" : "nav-unselected"
          }
          onClick={() => changeView("teacher")}
        >
          Teacher
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span
          className={
            teacherView === "lecture" ? "nav-selected" : "nav-unselected"
          }
          onClick={() => changeView("lecture")}
        >
          Lecture
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span
          className={
            teacherView === "exercice" ? "nav-selected" : "nav-unselected"
          }
          onClick={() => changeView("exercice")}
        >
          Exercice
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span
          className={teacherView === "Quiz" ? "nav-selected" : "nav-unselected"}
          onClick={() => changeView("Quiz")}
        >
          Quiz
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span
          onClick={() => changeView("solution")}
          className={
            teacherView === "solution" ? "nav-selected" : "nav-unselected"
          }
        >
          Solution
        </span>
        <span
          onClick={() => changeView("addstudent")}
          className={
            teacherView === "addstudent" ? "nav-selected" : "nav-unselected"
          }
        >
          AddStudents 
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span onClick={() => deconnection()}>Home Page</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </div>

      <div className="main">{renderView()}</div>
    </div>
  );
        }
