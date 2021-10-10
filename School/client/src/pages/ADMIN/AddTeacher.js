import React, { Component } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import { TextField, Button, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core'
import { Link } from "react-router-dom";
// import { Box } from "@mui/system";


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
        });
      })
      .catch((err) => {
        // here do somthing else if there is an error
        // the error is beacause the user submit the data and there is an TextField empty
        // do somthing for this
        alert("fill in all your information ");
      });
  }

  render() {

    return (
      <>
        <Sidebar />
        <div>
          <div className="nav-teacher">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div className="create">
            <div className="create-editor">
              <h2>Create teacher</h2>
              <div className="create-teacher-inputs" >
                <TextField
                  style={{ width: "300px" }}
                  name="TeacherName"
                  type="text"
                  label="First Name"
                  onChange={this.handleChange}
                  value={this.state.TeacherName}
                  required
                >
                </TextField>
                <br />
                <br />

                <TextField
                  style={{ width: "300px" }}
                  name="TeacherLastName"
                  type="text"
                  label="Last Name"
                  onChange={this.handleChange}
                  value={this.state.TeacherLastName}
                  required
                ></TextField>
                <br />
                <br />
                <TextField
                  style={{ width: "300px" }}

                  name="ImageUrl"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.ImageUrl}
                  required
                  label='Teacher Image'
                ></TextField>
                <br />
                <br />
                <TextField
                  style={{ width: "300px" }}

                  name="Field"
                  type="text"
                  placeholder="Teacher Field"
                  onChange={this.handleChange}
                  value={this.state.Field}
                  required
                  label='Teacher Field'
                ></TextField>
                <br />
                <br />
                <TextField
                  style={{ width: "300px" }}

                  name="Phone"
                  type="text"
                  placeholder="Phone number"
                  onChange={this.handleChange}
                  value={this.state.Phone}
                  lable='Phone number'
                  required
                ></TextField>
                <br />
                <br />
                <TextField
                  style={{ width: "300px" }}
                  name="Email"
                  type="text"
                  placeholder="Email"
                  onChange={this.handleChange}
                  value={this.state.Email}
                  label='Email'
                  required
                />
                <br />
                <br />
                <TextField
                  style={{ width: "300px" }}
                  label="Password"
                  name="Password"
                  type="password"
                  required
                  placeholder="Enter password"
                  onChange={this.handleChange}
                  value={this.state.Password}
                />
                <br></br>
                <br></br>
                <FormControl style={{ width: '300px' }}>
                  <InputLabel id="demo-simple-select-label">Years of Experience</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"

                    onChange={this.selectExp.bind(this)}
                  >
                    <MenuItem value='Entry-level'>0 - 2 years</MenuItem>
                    <MenuItem value='Intermediate'>2 - 4 years</MenuItem>
                    <MenuItem value='Senior'>More than 4 years</MenuItem>
                  </Select>
                </FormControl>

                <br></br>
                <br></br>

                <Button
                  style={{ width: "150px" }}
                  onClick={this.createTeacher.bind(this)}
                  className="create-submit-button-add-teacher"
                  type="submit"
                  variant="contained"

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
