import axios from "axios";
import React, { useEffect, useState } from "react";
import AddTeachers from "./AddTeachers.jsx";
import AdminFeed from "./AdminFeed.jsx";
import SchoolStat from "./SchoolStat.jsx";
import TeachersList from "./TeachersList.jsx";

export default function Admin(props) {
  const [adminView, setAdminView] = useState("adminFeed");
  const [DataStudent, setDataStudent] = useState([]);
  const [DataTeacher, setDataTeacher] = useState([]);

  const state = { DataTeacher, DataStudent, adminView };
  console.log("my state", state);

  // useReference check it out

  const deleteTeacher = (event) => {
    console.log(event.target.id);
    axios
      .delete(`/teacher/${event.target.id}`)
      .then(() => {
        console.log("Teacher deleted from database");
      })
      .catch((err) => {
        console.log(`Couldn't delete`, err);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:3000/teacher").then((data) => {
      setDataTeacher(data.data[0]); //set the state here for all the teacher
      setDataStudent(data.data[1]); //set the state for all the student
    });
  }, []);
  // request should be hidden as a helper function

  const changeView = (option) => {
    setAdminView(option);
  };
  useEffect(() => {
    const adView = localStorage.getItem("adminView");
    setAdminView(adView);
  }, []);

  useEffect(() => {
    localStorage.setItem("adminView", adminView);
  }, [adminView]);

  const renderView = () => {
    if (adminView === "adminFeed") {
      return <AdminFeed changeView={changeView} setMain={props.setMain} />;
    }
    if (adminView === "teacherList") {
      return (
        <div className="teachers-list">
          <TeachersList
            deleteTeacher={deleteTeacher}
            changeView={changeView}
            teachers={DataTeacher}
            //  data={data}
          />
        </div>
      );
    }
    if (adminView === "createTeacher") {
      return <AddTeachers changeView={changeView} />;
    }
    if (adminView === "schoolstat") {
      return <SchoolStat data={DataTeacher} changeView={changeView} />;
    }
  };

  return renderView();
}
