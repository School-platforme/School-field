import React from "react";

function AdminFeed({ changeView }) {
  return (
    <div>
      <div className="main">
        <h2>Welcome Admin </h2>
        <button
          className="adminButtonss"
          onClick={() => changeView("createTeacher")}
        >
          Create Teacher
        </button>
        <br></br>
        <button
          className="adminButtonss"
          onClick={() => changeView("schoolstat")}
        >
          Statistics
        </button>
      </div>
    </div>
  );
}

export default AdminFeed;
