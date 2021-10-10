
import React from "react";
import { TextField, Button } from '@material-ui/core'
import { Link } from "react-router-dom";
import axios from "axios"
import { Redirect } from "react-router-dom";
import { useState } from "react";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


export const SingInTeacher = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [path, setPath] = useState("/teacher/singin")
    const [bool, setError] = useState(false)
    const error = <div><Stack sx={{ width: '300px', marginLeft: "615px" }}><Alert severity="error">Check your password or user name </Alert></Stack></div>

    let check = () => {
        axios.post("http://localhost:3002/find", {
            Email, Password
        }).then(rst => {
           if( rst.data){
            localStorage.setItem('teacherId',JSON.stringify(rst.data._id))
            setPath("/teacher")
            setError(false)}
        }).catch(() => {
            setError(true)
        
        })

    }

    return (
        <>
            <div className="Register">
                <h1>SING IN FOR TEACHER</h1>
                <div className="item">
                    <br />
                    <br />
                    <br />
                    <TextField
                        onChange={e => setEmail(e.target.value)}
                        style={{ width: "300px" }}
                        required
                        label="Email "
                    />


                    <br />
                    <br />
                    <br />
                    <TextField
                        onChange={e => setPassword(e.target.value)}
                        style={{ width: "300px" }}

                        required
                        label="password"
                        type="password"
                    />
                    <br />
                    <br />
                    <br />
                
                </div>
                <br />


            </div>
            {bool?error:""}
            <div className="butn">

                <Button style={{ width: "150px" }}
                    variant="contained"
                >
                    <Link
                        className="lnk"
                        to="/">
                        BACK HOME
                     </Link>
                </Button>
                <Button style={{ width: "150px" }}
                    variant="contained"
                >
                    <Link
                        onClick={check} className="lnk"
                        to={path}>
                        SING IN
                    </Link>
                </Button>
            </div>
        </>
    );
};