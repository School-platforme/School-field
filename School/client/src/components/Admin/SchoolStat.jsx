// // import React from "react";

// // function SchoolStat({ changeView }) {
// //   return (
// // <div>
// //   <h5> Stats here </h5>

// //   <button onClick={() => changeView("adminFeed")}> back to feed </button>
// // </div>
// //   );
// // }

// export default SchoolStat;
import axios from "axios";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// const statsD = this.props.data;

// const statsdata1 = this.state.teachers;

export default class SchoolStat extends PureComponent {
  // static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
      students: [],
      studentsCount: 0,
      teachersCount: 0,
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3000/teacher").then((data) => {
      this.setState({
        teachers: data.data[0], //set the state here for all the teacher
        students: data.data[1], //set the state for all the student
      });
    });
  }

  render() {
    // const studentLength = this.state.students.length;
    console.log("stats teachers", this.state.teachers);
    console.log("stats students", this.state.students);

    return (
      <div>
        <BarChart
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
          <XAxis dataKey="TeacherName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            isAnimationActive={false}
            dataKey={`Cours.length`}
            fill="#82ca9d"
          />
          <Bar
            isAnimationActive={false}
            dataKey={`Students.length`}
            fill="#CAB81E"
          />
        </BarChart>
        <div>
          <button onClick={() => this.props.changeView("adminFeed")}>
            back to feed{" "}
          </button>
          <button onClick={() => this.props.changeView("adminFeed")}>
            Get Stats
          </button>
        </div>
      </div>
    );
  }
}

// i need an array of object of teachers filtered with needed element(cours and students numbers)
// i want to

// const statsData = [
//   {
//     TeacherName: "Teacher A",
//     Cours: 5,
//     Students: 3,
//   }
// ]
//   {
//     TeacherName: "Teacher B",
//     lecture: 10,
//     exercise: 7,
//     Students: 3,
//   },
//   {
//     TeacherName: "Teacher C",
//     lecture: 4,
//     exercise: 8,
//     Students: 3,
//   },
//   {
//     TeacherName: "Teacher D",
//     lecture: 4,
//     exercise: 3,
//     Students: 3,
//   },
//   {
//     TeacherName: "Teacher E",
//     lecture: 4,
//     exercise: 12,
//     Students: 3,
//   },
//   {
//     TeacherName: "Teacher F",
//     lecture: 4,
//     exercise: 3,
//     Students: 3,
//   },
// ];
