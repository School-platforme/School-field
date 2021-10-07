import React from "react";

export default function OwnStatistics(props) {
  return (
    <div>
      <div className="nav-teacher">
        <span>Here is Your statistics `dear student`</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      statistics
      <button
        onClick={() => {
          props.changeView("main");
        }}
      >
        Back
      </button>
    </div>
  );
}
