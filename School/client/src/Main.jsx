import React from "react";

export default function Main(props) {
  return (
    <div>
      <div className="nav">
        <span className="logo" onClick={() => props.changeView("admin")}>
          Admin
        </span>
        <span className="logo1" onClick={() => props.changeView("teacher")}>
          Teacher
        </span>
        &nbsp;&nbsp;&nbsp;
        <span className="logo2" onClick={() => props.changeView("student")}>
          student
        </span>
      </div>
    </div>
  );
}
