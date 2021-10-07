import React from "react";
import axios from "axios";

function TeachersList({ changeView, teachersList }) {
  return (
    <div>
      <div className="nav-teacher">
        <span>`List of your teachers`</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div className="teacher-container">
        <div className="teacher-card">
          <h4>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/teacher-2911399-2423347.png"
              style={{ width: 100 }}
              alt=""
            />
          </h4>
          <b>Imad El Ayoubi</b>
          <p>Web development</p>
          <p>Experience </p>

          <button>Promote</button>
          <button>Kick out </button>
        </div>
        <div className="card">
          <h4>
            <img
              src="https://tedcoedu.com/wp-content/uploads/2020/05/food.png?189db0&189db0"
              style={{ width: 100 }}
              alt=""
            />
          </h4>
          <b>Firas Debich</b>
          <p>Web development</p>
          <p>Experience </p>

          <button>Promote</button>
          <button>Kick out </button>
        </div>
        <div className="card">
          <h4>
            <img
              src="https://clementpannetier.dev/images/avatar-transparent.png"
              style={{ width: 100 }}
              alt=""
            />
          </h4>
          <b>Ahmad Cheikh</b>
          <p>Web development</p>
          <p>Experience </p>

          <button>Promote</button>
          <button>Kick out </button>
        </div>
        <div className="card">
          <h4>
            <img
              src="https://www.pngarts.com/files/11/Avatar-Transparent-Background-PNG.png"
              style={{ width: 100 }}
              alt=""
            />
          </h4>
          <b>Elyes Ben Khoud</b>
          <p>Web development</p>
          <p>Experience </p>

          <button>Promote</button>
          <button>Kick out </button>
        </div>
        <div>
          <button onClick={() => changeView("adminFeed")}>back to feed</button>
        </div>
      </div>
    </div>
  );
}

export default TeachersList;
