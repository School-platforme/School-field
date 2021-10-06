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

const statsData = [
  {
    TeacherName: "Teacher A",
    lecture: 4,
    exercise: 5,
    Students: 3,
    // length
  },
  {
    TeacherName: "Teacher B",
    lecture: 10,
    exercise: 7,
    Students: 3,
  },
  {
    TeacherName: "Teacher C",
    lecture: 4,
    exercise: 8,
    Students: 3,
  },
  {
    TeacherName: "Teacher D",
    lecture: 4,
    exercise: 3,
    Students: 3,
  },
  {
    TeacherName: "Teacher E",
    lecture: 4,
    exercise: 12,
    Students: 3,
  },
  {
    TeacherName: "Teacher F",
    lecture: 4,
    exercise: 3,
    Students: 3,
  },
];

export default class SchoolStat extends PureComponent {
  // static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("stats data", this.props.data);
    return (
      <div>
        <BarChart
          width={700}
          height={300}
          data={statsData}
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
          <Bar dataKey="lecture" fill="#8884d8" />
          <Bar dataKey="exercise" fill="#82ca9d" />
          <Bar dataKey="Students" fill="#CAB81E" />
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
