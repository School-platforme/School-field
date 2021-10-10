import React, { useState,useEffect } from "react";
import Sidebar from "./components/Sidebar"
import { TextField, Button } from '@material-ui/core'
import axios from "axios";


function Lecture() {
  const [Lecture, setLecture] = useState("");
  const [teacherId,setteacherId] = useState('')
  const [LectureName,setLectureName] = useState('')

    
 

  useEffect(() => {
      
    var teacher = localStorage.getItem('teacherId')
    setteacherId(JSON.parse(teacher))

 }, [])



  return (
      <>
      <Sidebar/>
    <div className="feed">
      <div>
        <ul>
          <li className="feed-list-item">
            <div className="feed-list-item-title">Lecture</div>
            <div className="feed-list-item-byline">
              <span className="feed-list-item-byline-author">
                Add The lecture
              </span>
              <br/>
              <br/>
              <TextField
                  value={LectureName}
                  onChange={e => setLecture(e.target.value)}
                  name='LectureName'
                  label="lectureName"
                  multiline
                  style={{ width: "200px" }}
                  rows={1}
                />
                <Button  >Put</Button>
                <br/>
                <br/>
              <TextField
                  value={Lecture}
                  onChange={e => setLecture(e.target.value)}
                  name='Lecture'
                  label="lecture"
                  multiline
                  style={{ width: "500px" }}
                  rows={15}
                />
                <br/>
                <br/>
                <Button  >Submit</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Lecture;
