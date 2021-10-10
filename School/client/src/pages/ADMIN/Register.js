import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
export const Register = () => {
  const [User, setUser] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  const [path, setPath] = useState("/Admin/register");
  const [bool, setError] = useState(false);
  const error = (
    <Stack sx={{ width: "300px", marginLeft: "615px" }}>
      <Alert severity="error">Please fill in all the requirment data </Alert>
    </Stack>
  );

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 26203f8cbac98b00adfad94185b56dbb2babeada
  let post = () => {
    axios
      .post("http://localhost:3002/admin", {
        User,
        Password,
        Email,
        ImageUrl,
      })
      .then(() => {
        setPath("/Admin");
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  };
<<<<<<< HEAD
=======
    let post = () => {
        console.log({User, Password, Email, ImageUrl})
        axios.post("http://localhost:3002/admin", {
            User, Password, Email, ImageUrl
        }).then(() => {
            setPath("/Admin")
            setError(false)
        }).catch(() => {
            setError(true)
        })
>>>>>>> 27b130d7c3138e98e4f9fc65592f00ad67447e75
=======
>>>>>>> 26203f8cbac98b00adfad94185b56dbb2babeada

  return (
    <>
      <br />

      <div className="Register">
        <h1> Regitser For Admin </h1>

        <div className="item">
          <br />
          <br />
          <TextField
            onChange={(e) => setUser(e.target.value)}
            style={{ width: "300px" }}
            required
            label="USER NAME"
          />
          <br />
          <br />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "300px" }}
            required
            label="EMAIL"
          />
          <br />
          <br />
          <TextField
            onChange={(e) => setImageUrl(e.target.value)}
            style={{ width: "300px" }}
            required
            label="IMAGE LINK HERE"
          />
          <br />
          <br />
          <TextField
            style={{ width: "300px" }}
            onChange={(e) => setPassword(e.target.value)}
            required
            label="password"
            type="password"
          />
          <br />
          <br />
          <Link className="LINK" to="/Admin/singin">
            SIGN IN
          </Link>
        </div>
      </div>
      {bool ? error : ""}
      <div className="butn">
        <Button style={{ width: "150px" }} variant="contained">
          <Link className="lnk" to="/">
            {" "}
            BACK HOME
          </Link>{" "}
        </Button>
        <Button style={{ width: "150px" }} variant="contained">
          <Link onClick={post} className="lnk" to={path}>
            {" "}
            REGISTER
          </Link>{" "}
        </Button>
      </div>
    </>
  );
};
