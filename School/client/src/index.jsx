import React from "react";
import ReactDOM from "react-dom";

import Students from "./components/Students/Students.jsx";



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "MainPage",
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
    if (view === "MainPage") {
      //  return <Students/>
    } else {
      
    }
  }

  render() {
    return (
      <div>
        <div className="nav">

          <span className="logo"
            onClick={() => this.changeView('MainPage')}>
            teacher
          </span>
          <span className={this.state.view === 'MainPage'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={() => this.changeView('MainPage')}>
          Admin

          </span>
          <span
            className={
              this.state.view === "MainPage" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("MainPage")}
          ></span>
        </div>

        <div className="main">{this.renderView()}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("school"));
