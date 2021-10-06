import React, { useState } from "react";

function Quiz() {
  const [Quiz, setQuiz] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(Quiz);
    setQuiz("");
  };
  return (
    <div className="feed">
      <div>
        <ul>
          <li className="feed-list-item">
            <div className="feed-list-item-title">Quiz</div>
            <div className="feed-list-item-byline">
              <span className="feed-list-item-byline-author">
                {" "}
                Add The Quiz
              </span>
              <form onSubmit={HandleSubmit}>
                <label>Quiz:</label>
                <input
                  className="inputLecure"
                  type="text"
                  value={Quiz}
                  placeholder="Add your Quiz here"
                  onChange={(e) => setQuiz(e.target.value)}
                />
                <input className="btn" type="submit" value="submit" />
              </form>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
