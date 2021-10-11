import React from "react";
import AdminHome from "./AdminHome";


import Sidebar from "./components/Sidebar";

export const AdminPage = () => {
  return (
    <>
      <Sidebar />
      <div className='homepage'>
        {/* <span style={{ font: 'initial' }}> School field review </span> */}
        <AdminHome />
      </div>
    </>
  );
};
