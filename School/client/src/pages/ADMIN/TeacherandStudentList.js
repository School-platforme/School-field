import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';




function TeachersList() {
  const [teachers, setTeachers] = useState([])
  const [student, setStudent] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3002/teacher')
      .then(rst => {
        setTeachers(rst.data[0])
        setStudent(rst.data[1])
      })
  }, [])



  return (
    <>
      <Sidebar />
      <div className="teacher-container">
        {teachers.map((teacher, key) => {
          return (
            <div key={key} className="teacher-card">
              {/* <h4>
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
                id={teacher._id}

                className="fire-btn"
              >
                Kick out{" "}
              </button> */}
              <div>
                <Card>

                  <TableContainer component={Paper}>
                    <Box sx={{ p: 5 }}>
                      <Table className='hi' aria-label="simple table">
                        <TableHead>
                          <TableRow >
                            <TableCell style={{ fontSize: '1.3rem' }}>NAME</TableCell>
                            <TableCell style={{ fontSize: '1.3rem' }} align="left">EMAIL</TableCell>
                            <TableCell style={{ fontSize: '1.3rem' }} align="left">PHONE</TableCell>
                            <TableCell style={{ fontSize: '1.3rem' }} align="center">ROLE</TableCell>
                            <TableCell style={{ fontSize: '1.3rem' }} align="right">LEVEL</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {teachers.map((teacher, key) => (
                            <TableRow style={{ fontSize: '4rem' }} key={teacher.name}>

                              <TableCell align="left" component="th" scope="row">
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                {teacher.name}
                              </TableCell>


                              {/*<TableCell align="right">{row.name}</TableCell>*/}
                              <TableCell align="left">{teacher.email}</TableCell>
                              <TableCell align="center">{teacher.role}</TableCell>
                              <TableCell align="right">{teacher.settings}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  </TableContainer>


                </Card>
              </div>
            </div>
          );
        })}

        <div>

        </div>
      </div>
    </>

  );
}

export default TeachersList;
