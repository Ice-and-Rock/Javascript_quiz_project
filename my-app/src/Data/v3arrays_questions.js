const arraysQuizData = [
    {
      questionText: "How do you declare an empty array in JavaScript?",
      optionText: [
        { answerText: "let arr = []", isCorrect: true },
        { answerText: "let arr ={}", isCorrect: false },
        { answerText: "let arr = '' ", isCorrect: false },
        { answerText: "let arr = new Array()", isCorrect: false },
      ],
    },
    {
      questionText:
        "How do you access the third element of an array named 'myArray'?",
      optionText: [
        { answerText: "myArray[3]", isCorrect: false },
        { answerText: "myArray(2)", isCorrect: false },
        { answerText: "myArray[2]", isCorrect: true },
        { answerText: "myArray.2", isCorrect: false },
      ],
    },
    {
      questionText: "Which method adds an element to the end of an array?",
      optionText: [
        { answerText: "push()", isCorrect: true },
        { answerText: "pop()", isCorrect: false },
        { answerText: "unshift()", isCorrect: false },
        { answerText: "shift()", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which method removes the last element of an array and returns it?",
      optionText: [
        { answerText: "push()", isCorrect: false },
        { answerText: "pop()", isCorrect: true },
        { answerText: "unshift()", isCorrect: false },
        { answerText: "shift()", isCorrect: false },
      ],
    },
    {
      questionText: "Consider the following code. What will be the output?",
      codeSnippet:
        "const arr = [1, 2, 3, 4]; arr.splice(1, 2, 'a', 'b'); console.log(arr);",
      optionText: [
        { answerText: "[1, 2, 3, 4]", isCorrect: false },
        { answerText: "[1, 'a', 'b', 4]", isCorrect: true },
        { answerText: "[1, 2, 'a', 'b']", isCorrect: false },
        { answerText: "['a', 'b', 3, 4]", isCorrect: false },
      ],
    } ];

    export default arraysQuizData;