import React, { Component } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import { TextField, Button } from "@material-ui/core";
import { Redirect } from "react-router";
class AddStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      StudentName: "",
      StudentLastName: "",
      Age: "",
      Password: "",
      ImageUrl: "",
      Phone: "",
      Email: "",
      student: {},
      teacherId: localStorage.getItem('teacherId'),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const nam = event.target.name;
    const value = event.target.value;

    this.setState({
      [nam]: value,
      student: {
        StudentName: this.state.StudentName,
        StudentLastName: this.state.StudentLastName,
        Password: this.state.Password,
        Email: this.state.Email,
        ImageUrl: this.state.ImageUrl,
        Phone: Number(this.state.Phone),
        Age: Number(this.state.Age),
        teacherId: this.state.teacherId,
      },
    });
  }

  selectExp(e) {
    this.setState({
      Experience: e.target.value,
    });
  }
  // to create teacher
  createStudent() {
    ;
    axios
      .post(
        `http://localhost:3002/student/${this.state.teacherId}`,
        this.state
      )
      .then((student) => {
        console.log(student);
        this.setState({
          students: student.data, /// here after submitting the data to the data base delete mak all variable as empty string
          studentName: "",
          studentLastName: "",
          Email: "",
          Password: "",
          ImageUrl: "",
          Phone: "",
        });
      }).then(() => {
        alert('student created')
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() { {console.log(this.state)}
    return (
      <>
    
        <Sidebar />
        <div>
          <div className="create">
            <div className="create-editor">
              {/* <h2
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  color: "white",
                  fontFamily: "Francois One",
                }}
              >
                Create student
              </h2> */}
                <div className="create-teacher-inputs">
                  <TextField
                    name="StudentName"
                    type="text"
                    label="First Name"
                    onChange={this.handleChange}
                  />

                  <TextField
                    name="StudentLastName"
                    type="text"
                    label="Last Name"
                    onChange={this.handleChange}
                  />
                  <TextField
                    name="Email"
                    type="text"
                    label="Email"
                    onChange={this.handleChange}
                  />

                  <TextField
                    name="ImageUrl"
                    type="text"
                    label="Image"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="create-teacher-inputs2">
                  <TextField
                    name="Phone"
                    type="text"
                    label="Phone number"
                    onChange={this.handleChange}
                  />

                  <TextField
                    name="Age"
                    label="Age"
                    onChange={this.handleChange}
                  />
                  <TextField
                    name="Password"
                    type="password"
                    label="Password"
                    onChange={this.handleChange}
                  />
                  <br></br>
                  <br></br>

                  <Button onClick={this.createStudent.bind(this)}>
                    Save student
                  </Button>
                </div>
              </div>
            </div>
          </div>
        
  
      </>
    );
  }
}
export default AddStudent;
