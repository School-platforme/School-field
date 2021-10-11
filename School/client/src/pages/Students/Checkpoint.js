import React from "react";
import Sidebar from "./components/Sidebar" 
import { useState , useEffect} from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import { Check } from "./ChekpointDo";
export const Chekpoint = () => {
    const [checkPoint , setChekpoint] = useState([])
    

    


    useEffect(()=>{
       var student = JSON.parse(localStorage.getItem('student'))
       
       axios.get(`http://localhost:3002/checkpoint/${student.teacherId}`)
            .then(rst => {
                setChekpoint(rst.data)
            })
            .catch(err => {
               console.log(err)
            })
    },[])
    


    
    return (
        <>
        <Sidebar/>
        <div className="container2">
       {checkPoint.map((e,i)=>{
           return (
               <>
               <h3 className="block">
                   
                <Link
               onClick={e=>{
              
                    localStorage.setItem("checkname",e.target.className) 
                                   
                }}
               className={e.name}  
                to="/checkpoint/do"
               >
                   
                   
                   {e.name} </Link></h3>
               <h6 className="block">{moment(e.createdAt).format("MMM Do YY")}</h6>
               </>
           )


       })}
        </div>
        </>
    );
    };
    