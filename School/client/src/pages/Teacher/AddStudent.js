import React, { Component } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar"



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
        ImageUrl: this.state.ImageUrl,
        Phone: Number(this.state.Phone),
        Age: Number(this.state.Age),
        teacher_id: this.props.teacher._id
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
   console.log(this.state.student)
    axios
      .post(`http://localhost:3000/student/${this.state.teacher_id} `, this.state.student)
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
        // here do somthing else if there is an error
        // the error is beacause the user submit the data and there is an input empty
        // do somthing for this
        alert("fill in all your information ");
      });
  }
  // to get the data which is all the student and teacher
  // componentDidMount(){
  //   axios.get("http://localhost:3000/teacher")
  //   .then(data=>{
  //     this.setState({
  //       teachers:data.data[0] ,//set the state here for all the teacher
  //       students:data.data[1],//set the state for all the student
  //     })
  //   })

  // }
  render() {console.log(this.props)
    return (
        <>
        <Sidebar/>
      <div>
       
        <div className="create">
          <div className="create-editor">
            <h2>Create student</h2>
            <div className="create-teacher-inputs">
              <label htmlFor="StudentName"> First Name </label>
              <input
                // className="create-body-textarea"
                name="StudentName"
                type="text"
                placeholder="First Name"
                onChange={this.handleChange}
              ></input>

              <label htmlFor="StudentLastName"> Last Name </label>

              <input
                // className="create-body-textarea"
                name="StudentLastName"
                type="text"
                placeholder="Last Name"
                onChange={this.handleChange}
              ></input>
              <label htmlFor="ImageUrl"> Student image </label>

              <input
                // className="create-body-textarea"
                name="ImageUrl"
                type="text"
                placeholder="Student image"
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
              <label htmlFor="Age"> Age</label>

              <input
                // className="create-body-textarea"
                name="Age"
                type="text"
                placeholder="Age"
                onChange={this.handleChange}
              />
              <label htmlFor="Password"> Password</label>
              <input
                // className="create-body-textarea"
                name="Password"
                type="password"
                placeholder="Enter password"
                onChange={this.handleChange}
              />
              <br></br>
              <br></br>

              <button
                onClick={this.createStudent.bind(this)}
                className="create-submit-button-add-teacher"
                type="submit"
              >
                Save student 
              </button>

              <br></br>
              <br></br>

              <button onClick={() => this.props.changeView("teacher")}>
                back to feed !
              </button>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
export default AddStudent;