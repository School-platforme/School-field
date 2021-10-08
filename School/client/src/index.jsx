import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";

import Students from "./components/Students/Students.jsx";
import Admin from "./components/Admin/Admin.jsx";
import SigninTeacher from './components/Teachers/SigninTeacher.jsx';
import Main from './Main.jsx';
import HomeTeacher from './components/Teachers/HomeTeacher.jsx';
import SigninStudent from './components/Students/SigninStudent.jsx';






export default function App() {
  const [mainView, setMainView] = useState('main')
  const [teacher, setteacher] = useState({})
  const [student, setstudent] = useState({})
  const changeView = (option) => {
           setMainView(option)
  }
  const renderView = ()=>{
    if(mainView === "admin" ){
      return <Admin  setMain={setMainView} />
    }
    else if (mainView === "teacher"){
      return <SigninTeacher setMain={setMainView} setteacher={setteacher} />
    }  else if (mainView === "student"){
      return <SigninStudent setMain={setMainView} setstudent={setstudent} />
    }
    else if (mainView === "accessteacher"){
      return <HomeTeacher setMain={setMainView} setteacher={setteacher}  teacher={teacher} />
    }
    else if(mainView === 'accessstudent'){
      return <Students  setMain={setMainView} setstudent={setstudent}  student={student} />
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
