// This is where we pull the quiz data from the json file.
// TO DO - add the 'next button' function
// the next button will take us to the next question in the quiz data.
// once all five questions have been answered, a results button will appear
// once we click on the results button a different div will be rendered which shows the results of the quiz
// MVP - display answer / alert correct or incorrect/show immediate result?

import React, { useState } from "react";

  const arraysQuizData = [
    
      
      {questionText: "How do you declare an empty array in JavaScript?",
      optionText: [
        {answerText: "let arr = []", isCorrect: true},
        {answerText: "let arr ={}", isCorrect: false},
        {answerText: "let arr = '' ", isCorrect: false},
        {answerText: "let arr = new Array()", isCorrect: false}
      ],
    },
    
      
      {questionText: "How do you access the third element of an array named 'myArray'?", 
      optionText: [
      {answerText: "myArray[3]", isCorrect: false},
      {answerText: "myArray(2)", isCorrect: false},
      {answerText: "myArray[2]", isCorrect: true},
      {answerText: "myArray.2", isCorrect: false}
      ],
    },

    {questionText: "Which method adds an element to the end of an array?",
     optionText: [
        {answerText: "push()", isCorrect: true},
        {answerText: "pop()", isCorrect: false},
        {answerText: "unshift()", isCorrect: false},
        {answerText: "shift()", isCorrect: false}
      ],
    },

      {questiontext: "Which method removes the last element of an array and returns it?",
      optionText: [
        {answerText: "push()", isCorrect: false},
        {answerText: "pop()", isCorrect: true},
        {answerText: "unshift()", isCorrect: false},
        {answerText: "shift()", isCorrect: false}
      ],
    },

    {questionText: "Consider the following code. What will be the output?",
      "codeSnippet": "const arr = [1, 2, 3, 4]; arr.splice(1, 2, 'a', 'b'); console.log(arr);",
      optionText: [
        {answerText: "[1, 2, 3, 4]", isCorrect: false},
        {answerText: "[1, 'a', 'b', 4]", isCorrect: true},
        {answerText: "[1, 2, 'a', 'b']", isCorrect: false},
        {answerText: "['a', 'b', 3, 4]", isCorrect: false} 
      ],
    }
  ]



const Quiz = ({ quizData, quizName }) => {
  const [answers, setAnswers] = useState(Array(quizData.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  console.log(quizData);

  const handleAnswerSelect = (questionIndex, choiceIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = choiceIndex;
    setAnswers(updatedAnswers);
  };

  const quizQuestions = quizData.arraysQuizData;

  const handleSubmit = () => {
    setShowResults(true);
  };

  // console.log("number 2", quizData);

  return (
    <div>
      <h2>{quizName}</h2>
      {/* ADDED */}
      <p>THIS IS A TEST</p>

      {/* <ul>
      {quizData.arraysQuizData.map((question, questionIndex) => (
          <li key={questionIndex}>
            <h3>{question.question}</h3>
            <ul>
              {question.choices.map((choice, choiceIndex) => (
                <li key={choiceIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${questionIndex}`}
                      value={choiceIndex}
                      onChange={() => handleAnswerSelect(questionIndex, choiceIndex)}
                    />
                    {choice}
                  </label>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>  */}
       <button onClick={handleSubmit}>Submit</button>
      {showResults && (
        <div>
          <h3>Results:</h3>
          <ul>
            {quizData.arraysQuizData.map((question, questionIndex) => (
              <li key={questionIndex}>
                Question {questionIndex + 1}: {answers[questionIndex] === question.correctChoice ? "Correct" : "Incorrect"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;
