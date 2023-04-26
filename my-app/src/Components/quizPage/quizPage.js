import React from "react";

const Quiz = ({ quizData, quizName }) => {
  return (
    <div>
      <h2>{quizName}</h2>
      <ul>
        {quizData.map((question, index) => (
          <li key={index}>
            <h3>{question.question}</h3>
            <ul>
              {question.choices.map((choice, index) => (
                <li key={index}>{choice}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
