import React, { Component } from "react";
import axios from "axios";

class AddTeachers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TeacherName: "",
      TeacherLastName: "",
      Email: "",
      password: "",
      imageUrl: "",
      Field: "",
      Phone: 0,
      teacher: {},
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(this.state);
    const nam = event.target.name;
    const value = event.target.value;

    this.setState({
      [nam]: value,
      teacher: {
        TeacherName: this.state.TeacherName,
        TeacherLastName: this.state.TeacherLastName,
        Email: this.state.Email,
        password: this.state.password,
        imageUrl: this.state.imageUrl,
        Field: this.state.Field,
        Phone: Number(this.state.Phone),
      },
    });
  }

  createTeacher() {
    axios
      .post("", this.state.teacher)
      .then((teacher) => {
        console.log(teacher);
        console.log("teacher created");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="create">
        <div className="create-editor">
          <h2>Create teacher</h2>
          <div className="create-teacher-inputs">
            <input
              className="create-body-textarea"
              name="TeacherName"
              type="text"
              placeholder="First Name"
              onChange={this.handleChange}
            ></input>
            <input
              className="create-body-textarea"
              name="TeacherLastName"
              type="text"
              placeholder="Last Name"
              onChange={this.handleChange}
            ></input>
            <input
              className="create-body-textarea"
              name="imageUrl"
              type="text"
              placeholder="Teacher image"
              onChange={this.handleChange}
            ></input>
            <input
              className="create-body-textarea"
              name="Field"
              type="text"
              placeholder="Teacher Field"
              onChange={this.handleChange}
            ></input>
            <input
              className="create-body-textarea"
              name="age"
              type="text"
              placeholder="Teacher age"
              onChange={this.handleChange}
            ></input>
            <input
              className="create-body-textarea"
              name="Email"
              type="text"
              placeholder="Email"
              onChange={this.handleChange}
            />
            <input
              className="create-body-textarea"
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            />

            <br></br>
            <br></br>

            <button
              onClick={this.createTeacher.bind(this)}
              className="create-submit-button-add-teacher"
              type="submit"
            >
              Save teacher
            </button>

            <br></br>
            <br></br>

            <button onClick={() => this.props.changeView("adminFeed")}>
              back to feed !
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default AddTeachers;
