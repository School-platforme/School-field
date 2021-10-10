import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar"
import { TextField, Button } from '@material-ui/core'

import axios from "axios"



function Quiz() {
  const [Quiz, setQuiz] = useState("");

  const [bool, setBool] = useState(false)
  const [nameQuiz, setName] = useState("")
  const [quizArray, setQuizArray] = useState([])
  const [Q, setQ] = useState('')
  const [A1, setA1] = useState('')
  const [A2, setA2] = useState('')
  const [A3, setA3] = useState('')
  const [rightA, setrightA] = useState('')
  const [teacherId,setteacherId] = useState('')


   useEffect(() => {
      
      var teacher = localStorage.getItem('teacherId')
      setteacherId(JSON.parse(teacher))



  }, [])


  

  const add = () => {
    var obj = {
      Q: Q,
      A1: A1,
      A2: A2,
      A3: A3,
      rightA: rightA
    }
    var array = quizArray
    array.push(obj)
    setQuizArray(array)
    setQ('')
    setA1('')
    setA2('')
    setA3('')
    setrightA('')
  }
  

  const QuizFinish = () => {
    setBool(true)
    add()
  }


  const Submit = () => {
    // here juste for test you need  to provide it  with dynamic id 
    axios.post(`http://localhost:3002/checkpoint/${teacherId}`, {
      quizArray,
      name: nameQuiz
    
    })
      .then(() => {
        setBool(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const QuizTitle = <><TextField onChange={e => setName(e.target.value)} label="Quiz Title" multiline style={{ width: "500px" }} rows={2} /><br /><br /><Button onClick={Submit}> Submit</Button></>

  return (
    <>
      <Sidebar />
      <div className="feed">
        <div>
          <ul>
            <li className="feed-list-item">
              <div className="feed-list-item-title">Quiz</div>
              <div className="feed-list-item-byline">
                <span className="feed-list-item-byline-author">

                  Add The Quiz
                </span>
                <br />
                <br />

                <br />

                <TextField
                  value={Q}
                  onChange={e => setQ(e.target.value)}
                  name='Q'
                  label="Quiz Question "
                  multiline
                  style={{ width: "500px" }}
                  rows={2}
                />
                <br />
                <br />
                <br />
                <br />
                <TextField
                  value={A1}
                  onChange={e => setA1(e.target.value)}
                  name='A1'
                  label="Answer1"
                  multiline
                  style={{ width: "500px" }}
                  rows={2}

                /><br />
                <TextField
                  onChange={e => setA2(e.target.value)}
                  value={A2}
                  name='A2'
                  label="Answer2"
                  multiline
                  style={{ width: "500px" }}
                  rows={2}

                /><br />
                <TextField
                  onChange={e => setA3(e.target.value)}
                  name='A3'
                  label="Answer3"
                  multiline
                  style={{ width: "500px" }}
                  rows={2}
                  value={A3}
                /><br />
                <br />
                <br />
                <TextField
                  onChange={e => setrightA(e.target.value)}
                  name='rightA'
                  label="Right Answer"
                  multiline
                  style={{ width: "500px" }}
                  rows={2}
                  value={rightA}
                /><br />
                <br />
                <Button
                  onClick={add}
                >
                  Add
                </Button>
                <Button
                  onClick={QuizFinish}
                >
                  Quiz finish
                </Button>
                <br />
                <br />
                {bool ? QuizTitle : ""}

              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Quiz;