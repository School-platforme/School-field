import React from "react";

export default function Main(props) {
  return (
    <div>
      <div className="nav">
        <span  onClick={() => props.changeView("admin")}>
          Admin
        </span>
        <span  onClick={() => props.changeView("teacher")}>
          Teacher
        </span>
        &nbsp;&nbsp;&nbsp;
        <span   onClick={() => props.changeView("student")}>
          student
        </span>
      </div>
    </div>
  );
}
