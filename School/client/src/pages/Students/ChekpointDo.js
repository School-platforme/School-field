import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";

export const Check = () => {

    const [checkPointData, setChekpointData] = useState({
      
        quizArray: [
          {
            Q: 'Question one ',
            A1: 'answer one ',
            A2: 'answer two',
            A3: 'answer 3 ',
            rightA: 'right answer '
          },
          {
            Q: 'Question two ',
            A1: 'answer one ',
            A2: 'answer two ',
            A3: 'answer three ',
            rightA: 'right answer 2 '
          }
        ],
        name: 'test',
        teacherId: '6163fe6666eb553dfac1308a',
  
        __v: 0
      })


    useEffect(() => {
        console.log(localStorage.getItem('checkname'))
        axios.post(`http://localhost:3002/Checkpoint`, { name:localStorage.getItem('checkname') })
            .then(rst => {
                    console.log(rst.data)
                setChekpointData(rst.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const  result=(e)=>{
       let  count = 0
        console.log(e.target.value)
        checkPointData.quizArray.forEach( e =>{
           if (e.rightA){
               count++
           }     
        })
       return count
    }

    return (
        
        <div>
            {console.log(checkPointData.quizArray)}
            {checkPointData.quizArray.map((e, i) => {
                return (
                    <div className="container3">
                    <h3>{e.Q}</h3>
                      <br/>  
                     <input type='checkbox' value={e.A1} onClick={result}/> {e.A1} <br/>
                     <input  type='checkbox' value={e.A2} onClick={result}/> {e.A2}<br/>
                     <input type='checkbox' value={e.A3} onClick={result}/> {e.A3}
                    </div>

                )
            })}
             <button onClick={result}></button>   
        </div>
    )




}