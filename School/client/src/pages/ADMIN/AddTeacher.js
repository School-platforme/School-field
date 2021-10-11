import React, { Component } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import {
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  Box,
  FormControl,
} from "@material-ui/core";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
class AddTeachers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TeacherName: "",
      TeacherLastName: "",
      Email: "",
      Password: "",
      ImageUrl: "",
      Field: "",
      Phone: "",
      Experience: "Entry-level",
      bool: false,
      teacher: {},
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const nam = event.target.name;
    const value = event.target.value;

    this.setState({
      [nam]: value,
      teacher: {
        TeacherName: this.state.TeacherName,
        TeacherLastName: this.state.TeacherLastName,
        Email: this.state.Email,
        Password: this.state.Password,
        ImageUrl: this.state.ImageUrl,
        Field: this.state.Field,
        Phone: Number(this.state.Phone),
        Experience: this.state.Experience,
      },
    });
  }

  selectExp(e) {
    this.setState({
      Experience: e.target.value,
    });
  }
  // to create teacher
  createTeacher() {
    axios
      .post("http://localhost:3002/teacher", this.state.teacher)
      .then((teacher) => {
        this.setState({
          teachers: teacher.data, /// here after submitting the data to the data base delete mak all variable as empty string
          TeacherName: "",
          TeacherLastName: "",
          Email: "",
          Password: "",
          ImageUrl: "",
          Field: "",
          Phone: "",
          Experience: "",
          bool: true,
        });
      })
      .catch((err) => {
        // here do somthing else if there is an error
        // the error is beacause the user submit the data and there is an TextField empty
        // do somthing for this
        console.log(err);
      });
  }

  render() {
    const alertModel = (
      <Stack>
        <Alert
          style={{ color: "white", backgroundColor: "#87d593" }}
          severity="success"
        >
          Teacher is already creaded
        </Alert>
      </Stack>
    );

    return (
      <>
        <Sidebar />
        <div>
          <div className="create">
            <div className="create-editor">
              {/* <h2
                style={{
                  textAlign: "center",
                  marginTop: "30px",
                  marginBottom: "50px",
                  fontSize: "50px",
                  fontFamily: "Francois One",
                }}
              >
                Create teacher
              </h2> */}
              <div className="create-teacher-inputs">
                <TextField
                  // className="create-body-textarea"
                  name="TeacherName"
                  type="text"
                  placeholder="First Name"
                  onChange={this.handleChange}
                  value={this.state.TeacherName}
                />

                <TextField
                  // className="create-body-textarea"
                  name="TeacherLastName"
                  type="text"
                  placeholder="Last Name"
                  onChange={this.handleChange}
                  value={this.state.TeacherLastName}
                />

                <TextField
                  // className="create-body-textarea"
                  name="ImageUrl"
                  type="text"
                  placeholder="Teacher image"
                  onChange={this.handleChange}
                  value={this.state.ImageUrl}
                />

                <TextField
                  // className="create-body-textarea"
                  name="Field"
                  type="text"
                  placeholder="Teacher Field"
                  onChange={this.handleChange}
                  value={this.state.Field}
                />
                {/* </div> */}
                {/* <div className="create-teacher-inputs2"> */}
                <TextField
                  required
                  name="Phone"
                  type="text"
                  placeholder="Phone number"
                  onChange={this.handleChange}
                  value={this.state.Phone}
                />

                <TextField
                  required
                  name="Email"
                  type="text"
                  placeholder="Email"
                  onChange={this.handleChange}
                  value={this.state.Email}
                />
                <TextField
                  required
                  name="Password"
                  type="password"
                  placeholder="Enter password"
                  onChange={this.handleChange}
                  value={this.state.Password}
                />
                <br />

                <Box
                  sx={{
                    minWidth: "120",
                  }}
                >
                  <FormControl style={{ width: "300px" }}>
                    <InputLabel id="demo-simple-select-label">
                      Experience
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={this.state.Experience}
                      label="Experience"
                      onChange={this.selectExp.bind(this)}
                    >
                      <MenuItem value="beginner">0 - 2 years</MenuItem>
                      <MenuItem value="Medium">2 - 4 years</MenuItem>
                      <MenuItem value="expert">More than 4 years</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <br />
                {this.state.bool ? alertModel : ""}
                <br />
                <Button
                  onClick={this.createTeacher.bind(this)}
                  className="teacherLink"
                  type="submit"
                >
                  Save teacher
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default AddTeachers;
