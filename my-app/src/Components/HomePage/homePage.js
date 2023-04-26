// HomePage.js

import React from "react";
import VarQuizButton from "../buttons/buttons";

function HomePage({ handleQuizData }) {
  return (
    <div>
      <h1>JavaScript Quiz</h1>
      <button value="Variables Quiz" onClick={handleQuizData}>
        Variables Quiz
      </button>
      <button value="Arrays Quiz" onClick={handleQuizData}>
        Arrays Quiz
      </button>
      <button value="Functions Quiz" onClick={handleQuizData}>
        Functions Quiz
      </button>
      <VarQuizButton />
    </div>
  );
}

export default HomePage;
































// import React, { useState } from "react";
// import variablesQuizData from "../../Data/variables_questions.json"; 
// import arraysQuizData from "../../Data/arrays_questions.json"; 
// import functionsQuizData from "../../Data/functions_questions.json"; 
// import Quiz from "../quizPage/quizPage";
// import NavBar from "../NavBar/NavBar";
// import Logo from '../../images/V3_Logo.png';

// // create a new function that contains our entire App
//   // return the layout of our design

//   // create a function that hands down props to the quiz page
//     // the data rendered needs to be dependant on the handleclick of each quiz topic
//     // 

// function HomePage() {
//   // assigns a new function



//   const [quizData, setQuizData] = useState(variablesQuizData);

//   const [quizName, setQuizName] = useState("Variables Quiz");
//   const handleQuizData = (e) => {
//     const quizName = e.target.value;
//     setQuizName(quizName);
//     if (quizName === "Variables Quiz") {
//       setQuizData(variablesQuizData);
//     } else if (quizName === "Arrays Quiz") {
//       setQuizData(arraysQuizData);
//     } else if (quizName === "Functions Quiz") {
//       setQuizData(functionsQuizData);
//     }
//   };

//   return ( <> 
//     <header>
//       <NavBar />
//     </header>

//   <body>
//       <div>
//         {" "}
//         <h1>JavaScript Quiz</h1>
//         <button value="Variables Quiz" onClick={handleQuizData}>
//           {" "}
//         </button>
//         <button value="Arrays Quiz" onClick={handleQuizData}>
//           {" "}
//         </button>
//         <button value="Functions Quiz" onClick={handleQuizData}>
//           {" "}
//         </button>
//         <Quiz quizData={quizData} quizName={quizName} />
//       </div>
//     </body>
//     </>
//   );
// }

// export default HomePage;
