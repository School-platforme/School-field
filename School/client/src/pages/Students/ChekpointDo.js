import React, {useState, useEffect} from "react";


export const Check = (props)=>{
    const [Name,setName] = useState('')

    useEffect(()=>{
        
        setName(localStorage.getItem('checkname'))
    },[])
console.log(Name)


    return (
        <>
    <div>do her</div>
    </>
    )




}