import React, { useState } from "react";
import variablesQuizData from "../../Data/variables_questions.json"; // Not able to access file correctly on webpage
import arraysQuizData from "../../Data/arrays_questions.json"; // Not able to access file correctly on webpage
import functionsQuizData from "../../Data/functions_questions.json"; // Not able to access file correctly on webpage
import Quiz from "../quizPage/quizPage";

function HomePage() {
  const [quizData, setQuizData] = useState(variablesQuizData);
  const [quizName, setQuizName] = useState("Variables Quiz");
  const handleQuizData = (e) => {
    const quizName = e.target.value;
    setQuizName(quizName);
    if (quizName === "Variables Quiz") {
      setQuizData(variablesQuizData);
    } else if (quizName === "Arrays Quiz") {
      setQuizData(arraysQuizData);
    } else if (quizName === "Functions Quiz") {
      setQuizData(functionsQuizData);
    }
  };

  return (
    <div>
      {" "}
      <h1>JavaScript Quiz</h1>
      <button value="Variables Quiz" onClick={handleQuizData}>
        {" "}
      </button>
      <button value="Arrays Quiz" onClick={handleQuizData}>
        {" "}
      </button>
      <button value="Functions Quiz" onClick={handleQuizData}>
        {" "}
      </button>
      <Quiz quizData={quizData} quizName={quizName} />
    </div>
  );
}

export default HomePage;
