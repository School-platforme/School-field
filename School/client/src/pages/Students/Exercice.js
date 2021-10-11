import axios from "axios";
import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar"


export const Exercice = () => {
    const [Exercice, setExercice] = useState([])


    useEffect(() => {
        var student = JSON.parse(localStorage.getItem('student'))

        axios.get(`http://localhost:3002/exercice/${student.teacherId}`)
            .then(rst => {
                setExercice(rst.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <>
            <Sidebar />
            <div className="services">
                <h1>Exercise Space</h1>
                <h2> add exercise</h2>
            </div>
        </>
    );
};