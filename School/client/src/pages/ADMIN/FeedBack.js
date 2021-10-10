import React from "react"
import {   TextField,  Button } from '@material-ui/core'
import { Link } from "react-router-dom";
import  {  useState,useEffect } from "react";
import Sidebar from "./components/Sidebar";
import axios from "axios";
import moment from 'moment'
export const FeedBack=()=>{

    const [ContactUs,setContactUs]=useState([]) 
    useEffect(()=>{
      axios.get("http://localhost:3002/contactus")
      .then((data)=>{
        setContactUs((data.data).reverse())
      })
    },[]) 
    console.log(ContactUs)
return (
 <>
 <Sidebar/>
      <h1 style={{textAlign:"center",marginTop:"20px"}}>Feedback</h1>
  {ContactUs.map((e,i)=>{
    return ( <div style={{marginBottom:"50px"}}><div class="feedback">
      <div style={{textAlign:"center"}}>{"Message N°" + (i+1)}</div>
    <div >{ "Feedback From  : "+e.Name}</div>
    <div > {"Email : " +e.Email}</div>
    <div >{"Subject : "+ e.Subject}</div>
    <div >{"Message : "+ e.Message}</div>
    <div >{"Date : "+moment(e.createdAt).format("MMM Do YY")}</div>
  </div>
 
</div>  )
  } )}
 

 </>
)

}