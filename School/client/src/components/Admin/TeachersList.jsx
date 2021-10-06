import React from "react";
import axios from "axios";

function TeachersList({ changeView, teachers }) {
  console.log("lisssssssst", teachers);
  return (
    <div className="teacher-container">
      {teachers.map((teacher) => {
        return (
          <div className="teacher-card">
            <h4>
              <img src={teacher.ImageUrl} style={{ width: 100 }} alt="" />
            </h4>
            <b>
              {teacher.TeacherName} {teacher.TeacherLastName}
            </b>
            <p>{teacher.Field}</p>
            <p>{teacher.Experience}</p>

            <button>Promote</button>
            <button>Kick out </button>
          </div>
        );
      })}

      <div>
        <button onClick={() => changeView("adminFeed")}>back to feed</button>
      </div>
    </div>
  );
}

export default TeachersList;
