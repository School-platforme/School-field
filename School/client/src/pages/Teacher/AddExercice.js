import React, { useState } from "react";
import Sidebar from "./components/Sidebar"

function Exercice() {
  const [Exercice, setExercice] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(Exercice);
    setExercice("");
  };
  return (
      <>
      <Sidebar/>
    <div className="feed">
      <div>
        <ul>
          <li className="feed-list-item">
            <div className="feed-list-item-title">Exerice</div>
            <div className="feed-list-item-byline">
              <span className="feed-list-item-byline-author">
                {" "}
                Add The Exercice
              </span>
              <form onSubmit={HandleSubmit}>
                <label>Ex:</label>
                <input
                  className="inputLecure"
                  type="text"
                  value={Exercice}
                  placeholder="Add your exercice here"
                  onChange={(e) => setExercice(e.target.value)}
                />
                <input className="btn" type="submit" value="submit" />
              </form>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Exercice;