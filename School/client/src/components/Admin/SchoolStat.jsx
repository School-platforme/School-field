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

const data = [
  {
    name: "Teacher A",
    lecture: 4,
    exercise: 5,
    quiz: 3,
  },
  {
    name: "Teacher B",
    lecture: 10,
    exercise: 7,
    quiz: 3,
  },
  {
    name: "Teacher C",
    lecture: 4,
    exercise: 8,
    quiz: 3,
  },
  {
    name: "Teacher D",
    lecture: 4,
    exercise: 3,
    quiz: 3,
  },
  {
    name: "Teacher E",
    lecture: 4,
    exercise: 12,
    quiz: 3,
  },
  {
    name: "Teacher F",
    lecture: 4,
    exercise: 3,
    quiz: 3,
  },
];

export default class SchoolStat extends PureComponent {
  // static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <BarChart
          width={700}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="lecture" fill="#8884d8" />
          <Bar dataKey="exercise" fill="#82ca9d" />
          <Bar dataKey="quiz" fill="#CAB81E" />
        </BarChart>
        <div>
          <h5> Stats here </h5>

          <button onClick={() => this.props.changeView("adminFeed")}>
            back to feed{" "}
          </button>
        </div>
      </div>
    );
  }
}
