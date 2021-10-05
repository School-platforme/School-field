import React, { Component } from "react";
import AddTeachers from "./AddTeachers.jsx";
import AdminFeed from "./AdminFeed.jsx";
import SchoolStat from "./SchoolStat.jsx";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "adminFeed",
    };

    this.changeView = this.changeView.bind(this);
  }

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
