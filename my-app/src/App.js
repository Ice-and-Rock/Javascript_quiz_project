// App.js

import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import variablesQuizData from "./Data/variables_questions.json";
import arraysQuizData from "./Data/arrays_questions.json";
import functionsQuizData from "./Data/functions_questions.json";
import NavBar from "./Components/NavBar/NavBar";
import Quiz from "./Components/quizPage/quizPage";
import "./index.css";
import "./App.css";
import "./Components/NavBar/navBar.css";
import "./Components/quizPage/quizPage.css";
import "./Components/buttons/buttons.css";

function App() {
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
    <>
      <header className="NavBar">
        <NavBar />
      </header>

      <body className="App">
        <div>
          {" "}
          <h1>JavaScript Quiz</h1>
          <button value="Variables Quiz" onClick={handleQuizData}>
            Variables{" "}
          </button>
          <button value="Arrays Quiz" onClick={handleQuizData}>
            Arrays{" "}
          </button>
          <button value="Functions Quiz" onClick={handleQuizData}>
            function{" "}
          </button>
          <Quiz quizData={quizData} quizName={quizName} />
        </div>
      </body>

      <quizQuestions>
        <Quiz
          quizData={require("./Data/arrays_questions.json")}
          quizName="Arrays Quiz"
        />
        {/* Pass arrays_questions.json as quizData prop to Quiz component */}
        <Quiz
          quizData={require("./Data/functions_questions.json")}
          quizName="Functions Quiz"
        />
        {/* Pass functions_questions.json as quizData prop to Quiz component */}
        <Quiz
          quizData={require("./Data/variables_questions.json")}
          quizName="Variables Quiz"
        />
        {/* Pass variables_questions.json as quizData prop to Quiz component */}
      </quizQuestions>
    </>
  );
}



export default App;


