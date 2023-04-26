import React from "react";
// This is where we pull the quiz data from the json file.
// TO DO - add the 'next button' function
// the next button will take us to the next question in the quiz data.
// once all five questions have been answered, a results button will appear
// once we click on the results button a different div will be rendered which shows the results of the quiz
// MVP - display answer / alert correct or incorrect/show immediate result?
const Quiz = ({ quizData, quizName }) => {
  return (
    <div>
      <h2>{quizName}</h2>
      {/* <ul>
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
      </ul> */}
    </div>
  );
};

export default Quiz;
