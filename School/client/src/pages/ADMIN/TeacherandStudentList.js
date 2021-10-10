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
// import moment from 'moment'

import { CardHeader } from '@mui/material';



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
      <Card>

        <TableContainer component={Paper}>
          <Box sx={{ p: 5 }}>
            <Table className='teacher-table' aria-label="simple table">
              <TableHead>
                <TableRow >
                  <TableCell style={{ fontSize: '1.3rem' }}>NAME</TableCell>
                  <TableCell style={{ fontSize: '1.3rem' }} align="left">E-mail address</TableCell>
                  <TableCell style={{ fontSize: '1.3rem' }} align="center">Phone Number</TableCell>
                  <TableCell style={{ fontSize: '1.3rem' }} align="right">Level</TableCell>
                  <TableCell style={{ fontSize: '1.3rem' }} align="right">Starting Date</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {teachers.map((teacher) => (
                  <TableRow style={{ fontSize: '4rem' }} key={teacher._id}>

                    <CardHeader
                      avatar={
                        <Avatar
                          alt=""
                          src={teacher.ImageUrl}
                        />
                      }
                      title={teacher.TeacherName + ' ' + teacher.TeacherLastName}
                    />


                    {/*<TableCell align="right">{row.name}</TableCell>*/}
                    <TableCell align="left">{teacher.Email}</TableCell>
                    <TableCell align="center">{teacher.Phone}</TableCell>
                    <TableCell align="right">{teacher.Experience}</TableCell>
                    <TableCell align="center">{teacher.createdAt}</TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </TableContainer>


      </Card>

    </>
  );
}






export default TeachersList;
