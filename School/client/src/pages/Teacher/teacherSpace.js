import axios from "axios";
import React, { useState, useEffect } from "react";
import moment from "moment";

import Sidebar from "./components/Sidebar";
import Exercice from "./AddExercice";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import { CardHeader } from "@mui/material";



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
  console.log(exercices, checkPoints, Lectures)
  return (
    <>
      <Sidebar
      />

      {/* <Card style={{ margin: "100px", padding: "5px" }}> */}
      {/* <h3 style={{ margin: "50px" }}>Teacher Data : </h3> */}
      <div className="feedback">
        <TableContainer component={Paper}>
          <Box sx={{ p: 5 }}>
            <Table className="z" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontSize: "1.3rem" }}>
                    Lecture's title
                  </TableCell>
                  <TableCell style={{ fontSize: "1.3rem" }}>
                    Lecture
                  </TableCell>
                  <TableCell style={{ fontSize: "1.3rem" }} align="center">
                    Lecture Date
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Lectures.map((lecture, key) => (
                  <TableRow style={{ fontSize: "4rem" }} key={key}>
                    <TableCell align="left">{lecture.LectureName}</TableCell>
                    <TableCell align="left">{lecture.Lecture}</TableCell>
                    <TableCell align="center">
                      {moment(lecture.createdAt).format("MMM Do YY")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </TableContainer>
      </div>
      {/* </Card> */}
      <span style={{ margin: "100px" }}></span>
      <div className="feedback">
        <Card style={{ margin: "20px", padding: "5px" }}>
          {/* <h3 style={{ margin: "50px" }}>Exercises : </h3> */}
          <TableContainer component={Paper}>
            <Box sx={{ p: 5 }}>
              <Table className="teacher-table" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontSize: "1.3rem" }}>
                      Exercise title
                    </TableCell>
                    <TableCell style={{ fontSize: "1.3rem" }} align="center">Exercise</TableCell>
                    <TableCell style={{ fontSize: "1.3rem" }} align="right">
                      Exercise Date
                    </TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {exercices.map((exercise, key) => (
                    <TableRow style={{ fontSize: "4rem" }} key={key}>
                      <TableCell align="left">{exercise.name}</TableCell>
                      <TableCell align="center">{exercise.Exercice[0]}</TableCell>


                      <TableCell align="right">
                        {moment(exercise.createdAt).format("MMM Do YY")}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </TableContainer>
        </Card>
      </div>


    </>
  );
};
