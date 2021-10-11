import axios from "axios";
import React, { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";

export const Teacher = () => {
  const [teacherId, setteacherId] = useState("");
  const [Lectures, setLecture] = useState([]);
  const [checkPoints, setcheckPoint] = useState([]);
  const [exercices, setexercice] = useState([]);

  useEffect(() => {
    var teacher = localStorage.getItem("teacherId");
    setteacherId(JSON.parse(teacher));
  }, []);

  console.log(teacherId)
  //  we stringified instead of parse

  useEffect(() => {
    axios.get(`http://localhost:3002/find/${teacherId}`).then((rst) => {
      console.log(rst);
      setLecture(rst.data[0]);
      setexercice(rst.data[1]);
      setcheckPoint(rst.data[2]);
    });
  }, [teacherId]);
  console.log(exercices)
  return (
    <>
      <Sidebar
      />
      <div>
        <h1>We need a component that represents the teacher signed in </h1>
      </div>
      <br></br>

      <div >

        {/* add details about the teacher */}
        <h1>teacher space</h1>
        <div >
          {Lectures.map((lecture) => {
            return (
              <div >
                <span>{lecture.LectureName}</span>
                <h5>{lecture.createdAt}</h5>
              </div>
            )
          })}

        </div>
        <br></br>
        <br></br>

        <div >
          {exercices.map((exercise) => {
            return (
              <div >

                <h3>{exercise.name}</h3>
                <h5>{exercise.createdAt}</h5>
              </div>
            )
          })}
        </div>
        <br></br>
        <br></br>

        <div >
          {checkPoints.map((checkPoint) => {
            return (
              <div >

                <h3>{checkPoint.name}</h3>
                <h5>{checkPoint.createdAt}</h5>
              </div>
            )
          })}
        </div>

      </div>
    </>
  );
};
