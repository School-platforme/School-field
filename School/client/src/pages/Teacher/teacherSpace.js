import axios from "axios";
import React, { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";

export const Teacher = () => {
  const [teacherId, setteacherId] = useState("");
  const [Lecture, setLecture] = useState([]);
  const [checkPoint, setcheckPoint] = useState([]);
  const [exercice, setexercice] = useState([]);

  useEffect(() => {
    var teacher = localStorage.getItem("teacherId");
    setteacherId(JSON.stringify(teacher));
  }, []);

  //  we stringified instead of parse

  useEffect(() => {
    axios.get(`http://localhost:3002/find/${teacherId}`).then((rst) => {
      console.log(rst);
      setLecture(rst.data[0]);
      setexercice(rst.data[1]);
      setcheckPoint(rst.data[2]);
    });
  }, [teacherId]);

  return (
    <>
      <Sidebar />
      <div className="events">
        <h1>teacher space</h1>
      </div>
    </>
  );
};
