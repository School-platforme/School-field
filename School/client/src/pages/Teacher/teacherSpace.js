import axios from "axios";
import React, { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";

export const Teacher = () => {
<<<<<<< HEAD
	const [teacherId, setteacherId] = useState('')
	const [Lecture, setLecture] = useState([])
	const [checkPoint, setcheckPoint] = useState([])
	const [exercice, setexercice] = useState([])

	useEffect(() => {
		axios.get(`http://localhost:3002/find/${teacherId}`)
			.then(rst => {
				console.log(rst)
				setLecture(rst.data[0])
				setexercice(rst.data[1])
				setcheckPoint(rst.data[2])
			}).catch((err) => {
				console.log(err)
			})
	}, [teacherId])


	return (
		<>
			<Sidebar />
			<div className="events">
				<h1>teacher space</h1>

			</div>
		</>
	);
};


=======
  const [teacherId, setteacherId] = useState("");
  const [Lecture, setLecture] = useState([]);
  const [checkPoint, setcheckPoint] = useState([]);
  const [exercice, setexercice] = useState([]);

  useEffect(() => {
    var teacher = localStorage.getItem("teacherId");
    setteacherId(JSON.stringify(teacher));
  }, []);

  //  we stringified instead of parse

  useEffect(() => {
    axios.get(`http://localhost:3002/find/${teacherId}`).then((rst) => {
      console.log(rst);
      setLecture(rst.data[0]);
      setexercice(rst.data[1]);
      setcheckPoint(rst.data[2]);
    });
  }, [teacherId]);

  return (
    <>
      <Sidebar />
      <div className="events">
        <h1>teacher space</h1>
      </div>
    </>
  );
};
>>>>>>> af62d8519d114db47c6f4540b8bd7665d38a5370
