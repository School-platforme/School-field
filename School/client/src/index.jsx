import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";

import Students from "./components/Students/Students.jsx";
import Admin from "./components/Admin/Admin.jsx";
import HomeTeacher from "./components/Teachers/HomeTeacher.jsx"
import Main from './Main.jsx';





// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       view: "main",
//     };
//     this.changeView = this.changeView.bind(this);
//   }

//   changeView(option) {
//     this.setState({
//       view: option,
//     });
//   }

//   renderView() {
//     const { view } = this.state;
//     if (view === "admin") {

//        return <Admin/>

//     } else if(view === 'teacher') {
//       return <HomeTeacher/>
//     }
//       else if(view === 'student'){
//         return <Students/>
//       }

//   }

//   render() {
//     if(this.state.view === 'main'){
//     return (
//       <div>
//         <div className="nav">

//           <span className="logo"
//             onClick={() => this.changeView('teacher')}>
//             teacher
//           </span>
//           <span className={this.state.view === 'MainPage'
//             ? 'nav-selected'
//             : 'nav-unselected'}
//             onClick={() => this.changeView('admin')}>
//           Admin

//           </span>

            

//           <span
//             className={
//               this.state.view === "MainPage" ? "nav-selected" : "nav-unselected"
//             }
//             onClick={() => this.changeView("student")}
//           >student</span>
//         </div>
//         </div>
//         )
//         }
//          else{ 

//           return   <div className="main">{this.renderView()}</div>
      
//          }
//   }
// }



export default function App() {
  const [mainView, setMainView] = useState('main')
  const changeView = (option) => {
           setMainView(option)
  }
  const renderView = ()=>{
    if(mainView === "admin" ){
      return <Admin  setMain={setMainView} />
    }
    else if (mainView === "teacher"){
      return <HomeTeacher setMain={setMainView} />
    }
    else if(mainView === 'student'){
      return <Students  setMain={setMainView} />
    }
    else {
      return <Main changeView={changeView}  />
    }
  }
  useEffect(() => {
    const mView = localStorage.getItem('mainView')
    setMainView(mView)
  }, [])
   
  useEffect(() => {
     localStorage.setItem('mainView',mainView)
  }, [mainView])
  

  return renderView()
}



ReactDOM.render(<App />, document.getElementById("school"));
