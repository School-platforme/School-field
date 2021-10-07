import React, { useState, useEffect } from "react";
import Teachers from "./teacher components/Teachers.jsx";
import Lecture from "./teacher components/Lecture.jsx";
import Exercice from "./teacher components/Exercice.jsx";
import Quiz from "./teacher components/Quiz.jsx";
import Solution from "./teacher components/Solution.jsx";

export default function HomeTeacher(props) {
  const [teacherView, seteacherView] = useState("teacher");
  const changeView = (option) => {
    seteacherView(option);
  };
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
  };
  const deconnection = () => {
    localStorage.setItem("mainView", "main");
    props.setMain("main");
  };

  useEffect(() => {
    const tView = localStorage.getItem("teacherView");
    seteacherView(tView);
  }, []);

  useEffect(() => {
    localStorage.setItem("teacherView", teacherView);
  }, [teacherView]);

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
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span onClick={() => deconnection()}>Home Page</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </div>

      <div className="main">{renderView()}</div>
    </div>
  );

  // class HomeTeacher extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       view: "teacher",
  //     };
  //     this.changeView = this.changeView.bind(this);
  //   }

  //   changeView(option) {
  //     this.setState({
  //       view: option,
  //     });
  //   }

  //   renderView() {
  //     const { view } = this.state;

  //     if (view === "teacher") {
  //       return <Teachers changeView={this.changeView} />;
  //     } else if (view === "lecture") {
  //       return <Lecture changeView={this.changeView} />;
  //     } else if (view === "exercice") {
  //       return <Exercice changeView={this.changeView} />;
  //     } else if (view === "Quiz") {
  //       return <Quiz changeView={this.changeView} />;
  //     } else if (view === "solution") {
  //       return <Solution changeView={this.changeView} />;
  //     }
  //   }
  //   render() {
  //     return (
  //       <div>
  //         <div className="nav">
  //           <span
  //             className={
  //               this.state.view === "teacher" ? "nav-selected" : "nav-unselected"
  //             }
  //             onClick={() => this.changeView("teacher")}
  //           >
  //             Teacher
  //           </span>

  //           <span
  //             className={
  //               this.state.view === "lecture" ? "nav-selected" : "nav-unselected"
  //             }
  //             onClick={() => this.changeView("lecture")}
  //           >
  //             Lecture
  //           </span>
  //           <span
  //             className={
  //               this.state.view === "exercice" ? "nav-selected" : "nav-unselected"
  //             }
  //             onClick={() => this.changeView("exercice")}
  //           >
  //             Exercice
  //           </span>
  //           <span
  //             className={
  //               this.state.view === "Quiz" ? "nav-selected" : "nav-unselected"
  //             }
  //             onClick={() => this.changeView("Quiz")}
  //           >
  //             Quiz
  //           </span>
  //           <span
  //             onClick={() => this.changeView("solution")}
  //             className={
  //               this.state.view === "solution" ? "nav-selected" : "nav-unselected"
  //             }
  //           >
  //             Solution
  //           </span>

  //         </div>

  //         <div className="main">{this.renderView()}</div>
  //       </div>
  //     );
  //   }
  // }
}
