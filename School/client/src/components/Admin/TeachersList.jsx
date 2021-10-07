import React from "react";
import axios from "axios";

function TeachersList({ changeView, teachers, deleteTeacher }) {
  console.log("lisssssssst", teachers);

  return (
    <div className="teacher-container">
      {teachers.map((teacher, key) => {
        return (
          <div key={key} className="teacher-card">
            <h4>
              <img src={teacher.ImageUrl} style={{ width: 100 }} alt="" />
            </h4>
            <b>
              {teacher.TeacherName} {teacher.TeacherLastName}
            </b>
            <p>{teacher.Field}</p>
            <p>{teacher.Experience}</p>
            <p> Number of Students : {teacher.Students.length}</p>

            <button className="promote-btn">Edit</button>
            <button
              id={teacher.Email}
              onClick={deleteTeacher}
              className="fire-btn"
            >
              Kick out{" "}
            </button>
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
