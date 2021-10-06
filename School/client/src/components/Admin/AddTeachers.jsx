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
      ImageUrl: "",
      Field: "",
      Phone: "",
      Experience: "Beginner",
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
        ImageUrl: this.state.ImageUrl,
        Field: this.state.Field,
        Phone: Number(this.state.Phone),
        Experience: this.state.Experience,
      },
    });
  }

  selectExp(e) {
    console.log("hh", e.target.value);
    this.setState({
      Experience: e.target.value,
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
    console.log("experience", this.state.Experience);
    return (
      <div className="create">
        <div className="create-editor">
          <h2>Create teacher</h2>
          <div className="create-teacher-inputs">
            <label htmlFor="TeacherName"> First Name </label>
            <input
              // className="create-body-textarea"
              name="TeacherName"
              type="text"
              placeholder="First Name"
              onChange={this.handleChange}
            ></input>

            <label htmlFor="TeacherLastName"> Last Name </label>

            <input
              // className="create-body-textarea"
              name="TeacherLastName"
              type="text"
              placeholder="Last Name"
              onChange={this.handleChange}
            ></input>
            <label htmlFor="ImageUrl"> Teacher image </label>

            <input
              // className="create-body-textarea"
              name="ImageUrl"
              type="text"
              placeholder="Teacher image"
              onChange={this.handleChange}
            ></input>
            <label htmlFor="Field"> Teacher Field </label>

            <input
              // className="create-body-textarea"
              name="Field"
              type="text"
              placeholder="Teacher Field"
              onChange={this.handleChange}
            ></input>
            <label htmlFor="Phone"> Phone Number </label>

            <input
              // className="create-body-textarea"
              name="Phone"
              type="text"
              placeholder="Phone number"
              onChange={this.handleChange}
            ></input>
            <label htmlFor="Email"> Email</label>

            <input
              // className="create-body-textarea"
              name="Email"
              type="text"
              placeholder="Email"
              onChange={this.handleChange}
            />
            <label htmlFor="password"> Password</label>
            <input
              // className="create-body-textarea"
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            />
            <label> Years of experience</label>
            <select name="Experience" onChange={this.selectExp.bind(this)}>
              <option value="beginner">0 - 2 years</option>
              <option value="experienced">2 - 4 years</option>
              <option value="advanced ">More than 4 years</option>
            </select>

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
