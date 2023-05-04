
// TO DO ----------------
// Each time an answer is selected the quiz uses the next quesiton in the array
// once all five questions have been answered, a results 0/array.length will appear
// once the results are rendered a new button appears to take the quiz again
// MVP - display question / answers / results

import React, { useState } from "react";

// FUNCTIONS --------------------------------
 
// VARIABLES --------------------------------
 
// ARRAYS --------------------------------
  

  // ------------------ Quiz Component ------------------

        // TO DO
          // Change the quizName and quizData to be props ✅
          // Use the handleClick from the App.js file to change the data ✅
          // Make sure that the quiz works with all of the data ✅


  export default function Quiz({ quizName, quizData }) {

    // set up useStates for the elecments of the quiz ----------------------
      // currentQuestion is the index of the array
      // showScore is a boolean that is false by default
      // score is the number of correct answers using boolean from Q data
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

    // Adds one to the score if the answer is correct ----------------------      
      // Includes the NEXT question when answer is clicked
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

      // Moves the quiz to the next question --------------------------------
        // stops at the max length of the array
        // if you're at the end of the array, show the score
  const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div id="quizFont">
      <div className="quiz" >
        {showScore ? (
          <div className="score-section">
            {" "}
            You Scored {score} out of {quizData.length}
            <button
              onClick={() => {
                setShowScore(false);
                setScore(0);
                setCurrentQuestion(0);
              }}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/
                {quizData.length}
              </div>
              <h2 className="question-text"> {quizName}</h2>
              <div className="question-text">
                {" "}
                {quizData[currentQuestion].questionText}
              </div>
              {/*
                The section below I am conditionally rendering a component

                if quizData[currentQuestion].codeSnippet is true/not false

                then render this div and text  <div>{quizData[currentQuestion].codeSnippet}</div>
              */}

              {quizData[currentQuestion].codeSnippet && (
                <div id="snippet" className="answer-section">{quizData[currentQuestion].codeSnippet}</div>
              )}
            </div>

            <div className="answer-section">
              {quizData[currentQuestion].optionText.map(
                (answerOption) => (
                  <button
                    onClick={() =>
                      handleAnswerButtonClick(answerOption.isCorrect)
                    }
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
