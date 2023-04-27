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

  const changeQuizDatahandler = (data, quizName) => {
    setQuizData(data);
    setQuizName(quizName);
  };

  // quizdata1 obj
  // quizdata2 obj
  // quizdata3 obj

  return (
    <>
      <header className="NavBar">
        <NavBar />
      </header>

      <body className="App">
        <div className="container">
          <h1 id="main-page-heading">JavaScript Quiz</h1>

          <div className="row-container">
            <img
              src="https://imgs.search.brave.com/at_I0l315xw_OtEmdg-juXwRE6Rv5mgsNdUNVS4Ye8Y/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/cUFGaVZUZnNWTHZy/QjRtVUNoNDhRSGFF/byZwaWQ9QXBp"
              alt=""
            />

            <p>
              {" "}
              JavaScript variables are containers used to store and manage data
              in a program. They can hold various data types such as numbers,
              strings, objects, and arrays. To declare a variable, you use the
              keywords 'var', 'let', or 'const', with 'let' and 'const' being
              the preferred choice in modern JavaScript due to their improved
              scoping rules. Variables can be assigned values using the equal
              sign (=) and can be referenced and manipulated throughout the
              code. Proper use of variables makes JavaScript code more
              efficient, organized, and easier to understand.
              <button
                value="Variables Quiz"
                onClick={() =>
                  changeQuizDatahandler(variablesQuizData, "Variables")
                }
              >
                Variables{" "}
              </button>
            </p>
          </div>

          <div className="row-container">
            <img
              src="https://imgs.search.brave.com/at_I0l315xw_OtEmdg-juXwRE6Rv5mgsNdUNVS4Ye8Y/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/cUFGaVZUZnNWTHZy/QjRtVUNoNDhRSGFF/byZwaWQ9QXBp"
              alt=""
            />{" "}
            <p>
              {" "}
              Arrays are data structures that store multiple values in a single,
              ordered collection. Each value, or element, in an array is
              assigned a unique index, starting with zero for the first element.
              Arrays can hold various data types such as numbers, strings,
              objects, or even other arrays (creating multidimensional arrays).
              They are versatile and commonly used in programming languages,
              including JavaScript, to organize and manipulate data efficiently.
              Operations such as adding, removing, or accessing elements can be
              performed using built-in array methods or by referencing the
              elements' indices directly.
              <button
                value="Arrays Quiz"
                onClick={() =>
                  changeQuizDatahandler(variablesQuizData, "Arrays")
                }
              >
                Arrays{" "}
              </button>
            </p>
          </div>

          <div className="row-container">
            <img
              src="https://imgs.search.brave.com/at_I0l315xw_OtEmdg-juXwRE6Rv5mgsNdUNVS4Ye8Y/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/cUFGaVZUZnNWTHZy/QjRtVUNoNDhRSGFF/byZwaWQ9QXBp"
              alt=""
            />{" "}
            <p>
              {" "}
              JavaScript functions are reusable blocks of code that perform a
              specific task. They can accept inputs called parameters and return
              values that can be used in other parts of the program. Functions
              can be defined using the 'function' keyword followed by the
              function name and parameter list. When a function is called, the
              code inside the function is executed, and the result is returned
              to the caller. Functions make code modular and help reduce
              repetition, making it easier to maintain and scale.
              <button
                value="Functions Quiz"
                onClick={() =>
                  changeQuizDatahandler(variablesQuizData, "Functions")
                }
              >
                Functions{" "}
              </button>
            </p>
          </div>
        </div>
      </body>

      <quizQuestions className="Quiz">
        <Quiz quizData={quizData} quizName={quizName} />
      </quizQuestions>
    </>
  );
}

export default App;
//just checking
