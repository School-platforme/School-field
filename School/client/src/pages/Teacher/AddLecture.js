import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";

function Lecture() {
  const [Lecture, setLecture] = useState("");
  const [teacherId, setteacherId] = useState("");
  const [LectureName, setLectureName] = useState("");

  useEffect(() => {
    var teacher = localStorage.getItem("teacherId");
    setteacherId(JSON.parse(teacher));
  }, []);

  const Submit = () => {
    axios
      .post(`http://localhost:3002/addLecture/${teacherId}`, {
        Lecture,
        LectureName,
      })
      .then((rst) => {
        setLecture("");
        setLectureName("");
      });
  };

  return (
    <>
      <Sidebar />
      <div className="feed">
        <div>
          <div className="feed-list-item-title"></div>
          <div className="feed-list-item-byline">
            <span className="feed-list-item-byline-author"></span>
            <br />
            <br />
            <TextField
              value={LectureName}
              onChange={(e) => setLectureName(e.target.value)}
              name="LectureName"
              label="Material section"
              multiline
              style={{ width: "300px" }}
              rows={1}
            />
            <br />
            <br />
            <TextField
              value={Lecture}
              onChange={(e) => setLecture(e.target.value)}
              name="Lecture"
              label="Add your lecture here ..."
              multiline
              style={{ width: "300px" }}
              rows={12}
            />
            <br />
            <br />
            <Button onClick={Submit}>Submit</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lecture;
