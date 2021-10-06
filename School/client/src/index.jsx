import React from "react";
import ReactDOM from "react-dom";

import Students from "./components/Students/Students.jsx";
import Admin from "./components/Admin/Admin.jsx";
import HomeTeacher from "./components/Teachers/HomeTeacher.jsx"






class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "main",
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
    if (view === "admin") {

       return <Admin/>

    } else if(view === 'teacher') {
      return <HomeTeacher/>
    }
      else if(view === 'student'){
        return <Students/>
      }

  }

  render() {
    if(this.state.view === 'main'){
    return (
      <div>
        <div className="nav">

          <span className="logo"
            onClick={() => this.changeView('teacher')}>
            teacher
          </span>
          <span className={this.state.view === 'MainPage'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={() => this.changeView('admin')}>
          Admin

          </span>

            

          <span
            className={
              this.state.view === "MainPage" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("student")}
          >student</span>
        </div>
        </div>
        )
        }
         else{ 

          return   <div className="main">{this.renderView()}</div>
      
         }
  }
}

ReactDOM.render(<App />, document.getElementById("school"));
