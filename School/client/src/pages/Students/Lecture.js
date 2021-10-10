import axios from "axios";
import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";

export const Lecture = () => {
  const [lecture, setLecture] = useState([]);

  useEffect(() => {
    var student = JSON.parse(localStorage.getItem("student"));

    axios
      .get(`http://localhost:3002/addLecture/${student.teacherId}`)
      .then((rst) => {
        setLecture(rst.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="services">
        <h1>Lecture Space</h1>
      </div>
    </>
  );
};
