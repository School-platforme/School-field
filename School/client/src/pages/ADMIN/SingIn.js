
import React from "react";
import { TextField, Button } from '@material-ui/core'
import { Link } from "react-router-dom";
import axios from "axios"
import { Redirect } from "react-router-dom";
import { useState } from "react";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


export const SingIn = () => {
    const [User, setUser] = useState("")
    const [Password, setPassword] = useState("")
    const [path, setPath] = useState("/Admin/singin")
    const [bool, setError] = useState(false)
    const error = <div><Stack sx={{ width: '300px', marginLeft: "615px" }}><Alert severity="error">Check your password or user name </Alert></Stack></div>

    let check = () => {
        axios.post("http://localhost:3002/admin/check", {
            User, Password
        }).then(() => {
            setPath("/Admin")
            setError(false)
        }).catch(() => {
            setError(true)
        })

    }

    return (
        <>
        {/* <admin data ={data}/> && false */}
            <div className="Register">
                <h1>Sing In For Admin </h1>
                <div className="item">
                    <br />
                    <br />
                    <br />
                    <TextField
                        onChange={e => setUser(e.target.value)}
                        style={{ width: "300px" }}
                        required
                        label="USER NAME"
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
                    <Link
                        className="LINK"
                        to="/Admin/register"
                    >
                        REGISTER ?
                    </Link>
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
                        to="/home">
                        Back Home
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