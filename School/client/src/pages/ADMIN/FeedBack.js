import React from "react"
import {   TextField,  Button } from '@material-ui/core'
import { Link } from "react-router-dom";
import  {  useState,useEffect } from "react";
import Sidebar from "./components/Sidebar";
import axios from "axios";

export const FeedBack=()=>{

    const [ContactUs,setContactUs]=useState([]) 
    useEffect(()=>{
      axios.get("http://localhost:3002/contactus")
      .then((data)=>{
        setContactUs(data.data)
      })
    },[]) 
    console.log(ContactUs)
return (
 <>
 <Sidebar/>
 <div>     </div>

 </>
)

}