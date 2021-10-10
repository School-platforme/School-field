import axios from "axios";
import React, { PureComponent } from "react";
import Sidebar from "./components/Sidebar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Card from '@material-ui/core/Card';

export default class SchoolStat extends PureComponent {
  // static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
      students: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3002/teacher").then((data) => {
      this.setState({
        teachers: data.data[0], //set the state here for all the teacher
        students: data.data[1], //set the state for all the student
      });
    });
  }

  render() {
    // const studentLength = this.state.students.length;
    console.log("stats teachers", this.state);

    return (
      <>
        <Sidebar />
        <div className='schoolstat'>

          <BarChart
            className='teacher-stat'
            width={700}
            height={300}
            data={this.state.teachers}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis allowReorder='yes'
              dataKey="TeacherName" />
            <YAxis allowDecimals='' />
            <Tooltip />
            <Legend />
            <Bar dataKey={`Cours.length`} name="Cours" fill="#82ca9d" />
            <Bar dataKey={`Students.length`} name="Students" fill="#CAB81E" />
          </BarChart>
          <BarChart
            width={700}
            height={300}
            data={this.state.students}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              allowReorder='yes'
               dataKey="StudentName" />
            <YAxis allowDecimals='' />
            <Tooltip />
            <Legend />
            <Bar dataKey={`Result`} name="Result" fill="#82ca9d" />
            <Bar dataKey={`Teacher.TeacherName`} name="Teacher" fill="#CAB81E" />
          </BarChart>

        </div>

      </>
    );
  }
}

