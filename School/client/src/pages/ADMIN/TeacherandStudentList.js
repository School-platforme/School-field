import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";

import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

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
import moment from "moment";

import { CardHeader } from "@mui/material";

function TeachersList() {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudent] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/teacher").then((rst) => {
      setTeachers(rst.data[0]);
      setStudent(rst.data[1]);
    });
  }, []);

  return (
    <>
      <Sidebar />


      <h1
        style={{
          textAlign: "center",
          marginBottom: "100px",
          marginTop: "30px",
        }}
      >
        {" "}
        Lists Of Students && Teacher{" "}
      </h1>
      <Card style={{ margin: "20px", padding: "5px" }}>
        <h3 style={{ margin: "50px" }}>Teacher Data : </h3>
        <TableContainer component={Paper}>
          <Box sx={{ p: 5 }}>
            <Table className="teacher-table" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontSize: "1.3rem" }}>
                    Full Name
                  </TableCell>
                  <TableCell style={{ fontSize: "1.3rem" }} align="left">
                    E-mail address
                  </TableCell>
                  <TableCell style={{ fontSize: "1.3rem" }} align="center">
                    Phone Number
                  </TableCell>
                  <TableCell style={{ fontSize: "1.3rem" }} align="right">
                    Level
                  </TableCell>
                  <TableCell style={{ fontSize: "1.3rem" }} align="center">
                    Starting Date
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teachers.map((teacher, key) => (
                  <TableRow style={{ fontSize: "4rem" }} key={key}>
                    <CardHeader
                      avatar={<Avatar src={teacher.ImageUrl} />}
                      title={
                        teacher.TeacherName + " " + teacher.TeacherLastName
                      }
                    />
                    <TableCell align="left">{teacher.Email}</TableCell>
                    <TableCell align="center">{teacher.Phone}</TableCell>
                    <TableCell align="right">{teacher.Experience}</TableCell>
                    <TableCell align="center">
                      {moment(teacher.createdAt).format("MMM Do YY")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </TableContainer>
      </Card>
      <span style={{ margin: "100px" }}></span>
      <div className="student-table">
        <Card style={{ margin: "20px", padding: "5px" }}>
          <h3 style={{ margin: "50px" }}>Student Data : </h3>
          <TableContainer component={Paper}>
            <Box sx={{ p: 5 }}>
              <Table className="teacher-table" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontSize: "1.3rem" }}>
                      Full Name
                    </TableCell>
                    <TableCell style={{ fontSize: "1.3rem" }}>Age</TableCell>
                    <TableCell style={{ fontSize: "1.3rem" }} align="center">
                      Email
                    </TableCell>
                    <TableCell style={{ fontSize: "1.3rem" }} align="center">
                      Starting Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {students.map((student, key) => (
                    <TableRow style={{ fontSize: "4rem" }} key={key}>
                      <CardHeader
                        avatar={<Avatar src={student.ImageUrl} />}
                        title={
                          student.studentName + " " + student.studentLastName
                        }
                      />
                      <TableCell align="left">{student.Age}</TableCell>
                      <TableCell align="center">{student.Email}</TableCell>

                      <TableCell align="center">
                        {moment(student.createdAt).format("MMM Do YY")}
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
}

export default TeachersList;
