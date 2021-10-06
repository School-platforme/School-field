import axios from "axios";
import React, { useEffect, useState } from "react";
import AddTeachers from "./AddTeachers.jsx";
import AdminFeed from "./AdminFeed.jsx";
import SchoolStat from "./SchoolStat.jsx";
import TeachersList from "./TeachersList.jsx";

// class Admin extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       view: "adminFeed",
//       data: [],
//     };

//     this.changeView = this.changeView.bind(this);
//   }

//   // componentDidMount() {
//   //   axios.get("").then((data) => {
//   //     console.log(data.data);
//   //     this.setState({
//   //       data: data.data,
//   //     });
//   //   });
//   // }

//   changeView(option) {
//     this.setState({
//       view: option,
//     });
//   }

//   renderView() {
//     const { view } = this.state;

//     if (view === "adminFeed") {
//       return <AdminFeed changeView={this.changeView} />;
//     }
//     if (view === "teacherList") {
//       return (
//         <div className="teachers-list">
//           <TeachersList
//             changeView={this.changeView}
//             teachersList={this.props.data}
//           />
//         </div>
//       );
//     }
//     if (view === "createTeacher") {
//       return <AddTeachers changeView={this.changeView} />;
//     }
//     if (view === "schoolstat") {
//       return <SchoolStat changeView={this.changeView} />;
//     }
//   }

//   render() {
//     return (
//       <div>
//         <div className="">{this.renderView()}</div>
//       </div>
//     );
//   }
// }

// export default Admin;

export default function Admin(props) {
  const [adminView, setAdminView] = useState("adminFeed");
  // const [Data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("/")
  //     .then((data) => {
  //       console.log(data);
  //       setData(data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });

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
            changeView={changeView}
            //  data={data}
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
  };

  return renderView();
}
