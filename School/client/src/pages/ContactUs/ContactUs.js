import React from "react";
import { useState } from "react";
import axios from "axios";
import { TextField, Button } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");
  const [Alert1, setAlert] = useState(false);
  const alertModel = (
    <Stack sx={{ width: "58%", marginLeft: "340px" }}>
      <Alert severity="success">Your feedback is already sended</Alert>
    </Stack>
  );
  const sendFeedBack = () => {
    axios
      .post("http://localhost:3002/contactus", {
        Name,
        Email,
        Subject,
        Message,
      })
      .then(() => {
        setAlert(true);
      })
      .catch(() => {
        console.log("error");
      });
  };
  return (
    <>
      <br />
      <div className="container1">
        <br />
        <br />
        <h1 className="nst">CONTACT US</h1>
        <p className="nst">
          Let us know what you think! In order to provide better service ,
          please do not hesitate to give us your feedback. Thank you.
        </p>
        <div className="block">
          <TextField
            onChange={(e) => setName(e.target.value)}
            style={{ width: "427px" }}
            label="Name"
            variant="standard"
          />

          <TextField
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "427px", marginLeft: "10px" }}
            label="Email"
            variant="standard"
          />
          <br />
          <br />
          <div>
            <TextField
              onChange={(e) => setSubject(e.target.value)}
              style={{ width: "870px" }}
              label="Subject"
              variant="standard"
            />
            <br />
            <br />

            <TextField
              onChange={(e) => setMessage(e.target.value)}
              style={{ width: "450px" }}
              label="Message"
              variant="standard"
            />
            <br />
            <br />
            <br />
            <br />
            {Alert1 ? alertModel : ""}

            <Button variant="contained" style={{ width: "210px" }}>
              <Link className="contactLink" to="/">
                BACK HOME
              </Link>
            </Button>
            <Button
              onClick={sendFeedBack}
              variant="contained"
              style={{ width: "210px" }}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Contact;
