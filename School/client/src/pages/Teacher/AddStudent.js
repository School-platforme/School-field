import React, { Component } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar"
import { TextField, Button } from '@material-ui/core'


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
      Email:"",
      student: {},
      teacher_id: localStorage.getItem('teacherId')
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
        Email:this.state.Email,
        ImageUrl: this.state.ImageUrl,
        Phone: Number(this.state.Phone),
        Age: Number(this.state.Age),
        teacher_id: this.state.teacher_id
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
  
    axios
      .post(`http://localhost:3002/student/${this.state.teacher_id} `
      , this.state.student)
      .then((student) => {
        this.setState({
          students: student.data, /// here after submitting the data to the data base delete mak all variable as empty string
          studentName: "",
          studentLastName: "",
          Email: "",
          Password: "",
          ImageUrl: "",
          Phone: "",

        });
      })
      .catch((err) => {
        console.log(err)
      });
  }
 
  render() {console.log(this.props)
    return (
        <>
        <Sidebar/>
      <div>
       
        <div className="create">
          <div className="create-editor">
            <h2>Create student</h2>
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
               label="Enter password"
                onChange={this.handleChange}
              />
              <br></br>
              <br></br>

              <Button
                onClick={this.createStudent.bind(this)}
              >
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