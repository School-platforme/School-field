import axios from "axios";
import React, { Component } from "react";
import AddTeachers from "./AddTeachers.jsx";
import AdminFeed from "./AdminFeed.jsx";
import SchoolStat from "./SchoolStat.jsx";
import TeachersList from "./TeachersList.jsx";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "adminFeed",
      data: [],
    };

    this.changeView = this.changeView.bind(this);
  }

  // componentDidMount() {
  //   axios.get("").then((data) => {
  //     console.log(data.data);
  //     this.setState({
  //       data: data.data,
  //     });
  //   });
  // }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView() {
    const { view } = this.state;

    if (view === "adminFeed") {
      return <AdminFeed changeView={this.changeView} />;
    }
    if (view === "teacherList") {
      return (
        <div className="teachers-list">
          <TeachersList
            changeView={this.changeView}
            teachersList={this.props.data}
          />
        </div>
      );
    }
    if (view === "createTeacher") {
      return <AddTeachers changeView={this.changeView} />;
    }
    if (view === "schoolstat") {
      return <SchoolStat changeView={this.changeView} />;
    }
  }

  render() {
    return (
      <div>
        <div className="">{this.renderView()}</div>
      </div>
    );
  }
}

export default Admin;
