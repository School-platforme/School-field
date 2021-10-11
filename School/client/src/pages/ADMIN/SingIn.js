import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { RiStackFill } from "react-icons/ri";

export const SingIn = () => {
  const [User, setUser] = useState("");
  const [Password, setPassword] = useState("");
  const [path, setPath] = useState("/Admin/singin");
  const [bool, setError] = useState(false);
  const error = (
    <div>
      <Stack sx={{ width: "300px", marginLeft: "615px" }}>
        <Alert severity="error">Check your password or user name </Alert>
      </Stack>
    </div>
  );

  let check = () => {
    // if (User == undefined || Password == undefined) {
    //   setError(true);
    //   return;
    // }
    axios
      .post("http://localhost:3002/admin/check", {
        User,
        Password,
      })
      .then((result) => {
        if (result.data) {
          setPath("/admin");
          setError(false);
          localStorage.setItem("admin", result.data);
        }
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <>
      {/* <admin data ={data}/> && false */}
      <div className="Register">
        {/* <h1>Sign In For Admin </h1> */}
        <div className="item">
          <br />
          <br />
          <br />
          <TextField
            onChange={(e) => setUser(e.target.value)}
            style={{ width: "300px" }}
            required
            label="Username"
            value={User}
          />

          <br />
          <br />
          <br />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "300px" }}
            required
            label="Password"
            type="password"
          />
          <br />
          <br />
          <br />
          <Link className="LINK" to="/Admin/register">
            Register ?
          </Link>
        </div>
        <br />
      </div>

      {bool ? error : ""}
      <div className="butn">
        <Button
          style={{ width: "150px", backgroundColor: "black", color: "white" }}
          variant="contained"
        >
          <Link className="lnk" to="/">
            Back Home
          </Link>
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          style={{ width: "150px", backgroundColor: "black", color: "white" }}
          variant="contained"
        >
          <Link onClick={check} className="lnk" to={path}>
            Sign in
          </Link>
        </Button>
      </div>
    </>
  );
};
