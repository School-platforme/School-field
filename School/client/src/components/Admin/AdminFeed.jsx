import React from "react";

function AdminFeed({ changeView }) {
  return (
    <div>
      <div className="main">
        <h2>Welcome Admin </h2>
        <button
          className="adminButtons"
          onClick={() => changeView("createTeacher")}
        >
          Create Teacher
        </button>
        <br></br>
        <button
          className="adminButtons"
          onClick={() => changeView("schoolstat")}
        >
          Statistics
        </button>

        <br></br>
        <button
          className="adminButtons"
          onClick={() => changeView("teacherList")}
        >
          Teachers List
        </button>
      </div>
    </div>
  );
}

export default AdminFeed;
