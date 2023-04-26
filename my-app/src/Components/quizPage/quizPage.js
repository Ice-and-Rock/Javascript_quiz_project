
// This is where we pull the quiz data from the json file.
// TO DO - add the 'next button' function
// the next button will take us to the next question in the quiz data.
// once all five questions have been answered, a results button will appear
// once we click on the results button a different div will be rendered which shows the results of the quiz
// MVP - display answer / alert correct or incorrect/show immediate result?

import React, { useState } from "react";

const Quiz = ({ quizData, quizName }) => {
  const [answers, setAnswers] = useState(Array(quizData.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (questionIndex, choiceIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = choiceIndex;
    setAnswers(updatedAnswers);
  };

  const quizQuestions = quizData.arraysQuizData;
  
  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <div>
      <h2>{quizName}</h2>
      <ul>
        {quizData.map((question, questionIndex) => (
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
      </ul>
      <button onClick={handleSubmit}>Submit</button>
      {showResults && (
        <div>
          <h3>Results:</h3>
          <ul>
            {quizData.map((question, questionIndex) => (
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
