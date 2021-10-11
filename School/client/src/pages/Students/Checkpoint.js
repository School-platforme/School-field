import React from "react";
import Sidebar from "./components/Sidebar" 
import { useState , useEffect} from "react";
import axios from "axios";

export const Chekpoint = () => {
    const [checkPoint , setChekpoint] = useState([])
 

    


    useEffect(()=>{
       var student = JSON.parse(localStorage.getItem('student'))
       
       axios.get(`http://localhost:3002/checkpoint/${"6161f87dfb961838b3552ae1"}`)
            .then(rst => {
                setChekpoint(rst.data)
            })
            .catch(err => {
               console.log(err)
            })
    },[])
     console.log(checkPoint)


    
    return (
        <>
        <Sidebar/>
        <div className="services">
        <h1>Chekpoint space </h1>
        </div>
        </>
    );
    };
    