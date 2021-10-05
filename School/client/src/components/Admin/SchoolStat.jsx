import React from "react";

function SchoolStat({ changeView }) {
  return (
    <div>
      <h5> Stats </h5>
      <button onClick={() => changeView("adminFeed")}> back to feed </button>
    </div>
  );
}

export default SchoolStat;
