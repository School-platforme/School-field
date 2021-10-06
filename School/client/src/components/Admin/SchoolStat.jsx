import React from "react";

function SchoolStat({ changeView }) {
  return (
    <div>
      <div className="nav-teacher">
        <span>`General statistics`</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <h5> Stats here </h5>

      <button onClick={() => changeView("adminFeed")}> back to feed </button>
    </div>
  );
}

export default SchoolStat;
