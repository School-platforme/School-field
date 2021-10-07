// export default function OwnStatistics(props) {
//   return (
//     <div>
//       <div className="nav-teacher">
//         <span>Here is Your statistics `dear student`</span>
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//       </div>
//       statistics
//       <button
//         onClick={() => {
//           props.changeView("main");
//         }}
//       >
//         Back
//       </button>
//     </div>
//   );
// }

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

export default class OwnStatistics extends PureComponent {
  // static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";
  constructor(props) {
    super(props);
    this.state = {
      student: [],
    };
  }

  // get student data

  render() {
    return (
      <div>
        <BarChart
          width={700}
          height={300}
          data={this.state.student}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="StudentName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={`Cours.length`} name="Quiz done" fill="#82ca9d" />
          <Bar
            dataKey={`Students.length`}
            name="Quiz succeded"
            fill="#CAB81E"
          />
        </BarChart>
        <div>
          <button
            onClick={() => {
              this.props.changeView("main");
            }}
          >
            Back
          </button>
        </div>
      </div>
    );
  }
}

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

// how many qiuz done
// how many quiz succeded

// exercise
// quiz
// results
