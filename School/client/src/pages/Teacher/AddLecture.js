import React, { useState } from "react";
import Sidebar from "./components/Sidebar"

function Lecture() {
  const [lecture, setLecture] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(lecture);
    setLecture("");
  };

  return (
      <>
      <Sidebar/>
    <div className="feed">
      <div>
        <ul>
          <li className="feed-list-item">
            <div className="feed-list-item-title">Lecture</div>
            <div className="feed-list-item-byline">
              <span className="feed-list-item-byline-author">
                {" "}
                Add The lecture
              </span>
              <form onSubmit={HandleSubmit}>
                <label>Course</label>
                <input
                  className="inputLecure"
                  type="text"
                  value={lecture}
                  placeholder="Add your lecture here"
                  onChange={(e) => setLecture(e.target.value)}
                />
                <input className="btn" type="submit" value="submit" />
              </form>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Lecture;
