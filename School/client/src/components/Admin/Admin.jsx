import axios from "axios";
import React, { useEffect, useState } from "react";
import AddTeachers from "./AddTeachers.jsx";
import AdminFeed from "./AdminFeed.jsx";
import SchoolStat from "./SchoolStat.jsx";
import TeachersList from "./TeachersList.jsx";

export default function Admin(props) {
  const [adminView, setAdminView] = useState('adminFeed')
  const changeView = (option) =>{
    setAdminView(option)
  }


  useEffect(() => {
    const adView = localStorage.getItem('adminView')
    setAdminView(adView)
  }, [])
   
  useEffect(() => {
     localStorage.setItem('adminView',adminView)
  }, [adminView])

  const   renderView = ()  =>  {
      
    
         if (adminView === "adminFeed") {
           return <AdminFeed changeView={changeView}  setMain={props.setMain} />;
         }
         if (adminView === "teacherList") {
           return (
             <div className="teachers-list">
               <TeachersList
                 changeView={changeView}
               />
             </div>
           );
         }
         if (adminView === "createTeacher") {
           return <AddTeachers changeView={changeView} />;
         }
         if (adminView === "schoolstat") {
           return <SchoolStat changeView={changeView} />;
         }
       }


  return renderView()
}


