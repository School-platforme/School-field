import React, { useState, useEffect } from 'react';
import Teachers from "./teacher components/Teachers.jsx";
import Lecture from "./teacher components/Lecture.jsx";
import Exercice from "./teacher components/Exercice.jsx";
import Quiz from "./teacher components/Quiz.jsx";
import Solution from "./teacher components/Solution.jsx";



export default function HomeTeacher(props) {
  const [teacherView, seteacherView] = useState('teacher')
  const changeView = (option) => {
    seteacherView(option)
  }
  const renderView = () => {
    if (teacherView === "teacher") {
      return <Teachers changeView={changeView} />;
    } else if (teacherView === "lecture") {
      return <Lecture changeView={changeView} />;
    } else if (teacherView === "exercice") {
      return <Exercice changeView={changeView} />;
    } else if (teacherView === "Quiz") {
      return <Quiz changeView={changeView} />;
    } else if (teacherView === "solution") {
      return <Solution changeView={changeView} />;
    }
  }
  const deconnection = () => {
    localStorage.clear()
    props.setMain('main')
  }

  useEffect(() => {
    const tView = localStorage.getItem('teacherView')
    seteacherView(tView)
  }, [])
   
  useEffect(() => {
     localStorage.setItem('teacherView',teacherView)
  }, [teacherView])

  return (   
      <div>
        <div className="nav">
          <span
            className={
              teacherView === "teacher" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => changeView("teacher")}
          >
            Teacher
          </span>

          <span
            className={
              teacherView === "lecture" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => changeView("lecture")}
          >
            Lecture
          </span>
          <span
            className={
              teacherView === "exercice" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => changeView("exercice")}
          >
            Exercice
          </span>
          <span
            className={
              teacherView === "Quiz" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => changeView("Quiz")}
          >
            Quiz
          </span>
          <span
            onClick={() => changeView("solution")}
            className={
              teacherView === "solution" ? "nav-selected" : "nav-unselected"
            }
          >
            Solution
          </span>
          <span
            onClick={() => deconnection()}
           
          >
            deconnection
          </span>


        </div>

        <div className="main">{renderView()}</div>
      </div>
    );
  
  


}



