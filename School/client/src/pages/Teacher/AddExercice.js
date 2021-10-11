import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import { Redirect } from "react-router";

function Exercice() {
  const [Exercice, setExercice] = useState("");
  const [Exercices, setExercices] = useState([]);
  const [teacherId, setteacherId] = useState("");
  const [ExerciceName, setName] = useState("");
  const [bool, setBool] = useState(false);

  useEffect(() => {
    var teacher = localStorage.getItem("teacherId");
    setteacherId(JSON.parse(teacher));
   
  }, []);

  const add = () => {
    var array = Exercices;
    array.push(Exercice);
    setExercices(Exercices);
    setExercice("");
  };

  const Submit = () => {
    axios
      .post(`http://localhost:3002/exercice/${teacherId}`, {
        Exercice: Exercices,
        name: ExerciceName,
      })
      .then(() => {
       
        setBool(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ExerciceFinish = () => {
    setBool(true);
    add();
  };

  const exerciceTitle = (
    <>
      <TextField
        onChange={(e) => setName(e.target.value)}
        label="Exercise Title"
        multiline
        style={{ width: "300px" }}
        rows={2}
      />
      <br />
      <br />
      <Button onClick={Submit}> Submit</Button>
    </>
  );

  return (
    
    <>
    
   
      <Sidebar />
      <div className="feed1">
        <div>
          <ul>
            <li className="feed-list-item">
              <div className="feed-list-item-title"></div>
              <div className="feed-list-item-byline">
                <span className="feed-list-item-byline-author">
                  {" "}
                  Add The Exercice
                </span>
                <TextField
                  onChange={(e) => setExercice(e.target.value)}
                  name="Exercice"
                  label="Exercice"
                  multiline
                  style={{ width: "350px" }}
                  rows={10}
                  value={Exercice}
                />
                <br />
                <br />
                <Button onClick={add}>Add</Button>
                <Button onClick={ExerciceFinish}>Exercice finish</Button>
                <br />
                <br />
                {bool ? exerciceTitle : ""}
              </div>
            </li>
          </ul>
        </div>
      </div>

    </>
    
  );
}

export default Exercice;
