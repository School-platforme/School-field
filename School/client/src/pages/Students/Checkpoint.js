import React from "react";
import Sidebar from "./components/Sidebar" 
import { useState , useEffect} from "react";
import axios from "axios";

export const Chekpoint = () => {
    const [checkPoint , setChekpoint] = useState([])

    useEffect(()=>{
     // here you need to provide this path with spesific id for now juste test try to render the quiz in this page                            
        axios.get(`http://localhost:3002/checkpoint/${"6161f87dfb961838b3552ae1"}`)
        .then(({data})=>{
            setChekpoint(data)
        })

    },[])
    console.log(checkPoint)
    // render chekpoint data  here 
    return (
        <>
        <Sidebar/>
        <div className="services">
        <h1>Chekpoint space </h1>
        </div>
        </>
    );
    };
    