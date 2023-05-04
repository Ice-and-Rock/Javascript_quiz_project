const variablesQuizData = [
    {
      questionText: "What is a variable in JavaScript?",
      optionText: [
        { answerText: "A reserved keyword to declare a value", isCorrect: false },
        { answerText: "A container to store values or data", isCorrect: true },
        { answerText: "An object that holds key-value pairs", isCorrect: false },
        { answerText: "A built-in function to perform a specific task", isCorrect: false }
      ]
    },
    {
      questionText: "Which keyword is used to declare a variable?",
      optionText: [
        { answerText: "var", isCorrect: true },
        { answerText: "let", isCorrect: true },
        { answerText: "const", isCorrect: true },
        { answerText: "all of the above", isCorrect: false }
      ]
    },
    {
      questionText: "What is the difference between let and var in JavaScript?",
      optionText: [
        { answerText: "let is used to declare a constant value, while var is used for variables", isCorrect: false },
        { answerText: "let and var are interchangeable and can be used interchangeably", isCorrect: false },
        { answerText: "var has function scope and let has block scope", isCorrect: true },
        { answerText: "let is used to declare global variables, while var is used for local variables", isCorrect: false }
      ]
    },
    {
      questionText: "Which of the following is NOT a valid variable name in JavaScript?",
      optionText: [
        { answerText: "my_variable", isCorrect: false },
        { answerText: "myVariable", isCorrect: false },
        { answerText: "my-Variable", isCorrect: true },
        { answerText: "myVariable123", isCorrect: false }
      ]
    },
    {
      questionText: "What is the value of a variable that has been declared but not initialized?",
      optionText: [
        { answerText: "undefined", isCorrect: true },
        { answerText: "null", isCorrect: false },
        { answerText: "0", isCorrect: false },
        { answerText: "NaN", isCorrect: false }
      ]
    }
  ] 
  export default variablesQuizData;
  