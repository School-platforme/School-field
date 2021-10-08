import React from "react";
import Sidebar from "./components/Sidebar" 

import axios from "axios";
import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
export default class Students extends PureComponent {
  
	constructor(props) {
	  super(props);
	  this.state = {
		student: [],
	  };
	}
	render() {
	  return (
		  <>
		<Sidebar/>
			<h1 style={{textAlign:"center"}}
			>Your Result</h1>
		<div className="stat">
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
			
		  </div>
		</div>
		</>
	  );
	}
  }
  





