import { Card } from "@material-ui/core";
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
    setteacherId(JSON.stringify(teacher));
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

  return (
    <>
      <Sidebar
      />
      <div>
        <h1>We need a component that represents the teacher signed in </h1>
      </div>
      <div className="events">
        <h1>teacher space</h1>
        <div className='feedback'>
          {Lectures.map((lecture) => {
            return (
              <Card >
                <h3>{lecture.LectureName}</h3>
                <h5>{lecture.createdAt}</h5>
              </Card>
            )
          })}

        </div>
        <div className='feedback'>
          {exercices.map((exercise) => {
            return (
              <Card>
                <h3>{exercise.name}</h3>
                <h5>{exercise.createdAt}</h5>
              </Card>
            )
          })}
        </div>
        <div className='feedback'>
          {checkPoints.map((checkPoint) => {
            return (
              <Card>
                <h3>'{checkPoint.name}'</h3>
                <h5>{checkPoint.createdAt}</h5>
              </Card>
            )
          })}
        </div>

      </div>
    </>
  );
};
