var readLine = require("readline-sync");
console.log("Are you a Cricket fan");

var score = 0;
var qusetionAndAnswer = [
  {
    question: "Which team has won most ODI world cup trophy? ",
    answer: "Australia",
    options: ["West Indies", "Australia", "India", "England"]
  },
  {
    question: "Which Cricketer has scored first time double hundred in ODI history? ",
    answer: "Sachin Tendulkar",
    options: ["Rohit Sharma", "Chris Gayle", "Sir Viv Richards", "Sachin Tendulkar"]
  },
  {
    question: "Who was the player of the tournament in 2011 ODI world cup? ",
    answer: "Yuvraj Singh",
    options: ["Virat Kohli", "Yuvraj Singh", "MS Dhoni", "Zaheer Khan"]
  },
  {
    question: "Which player has scored 400 runs in one innings in a Test match? ",
    answer: "Brian Lara",
    options: ["Brian Lara", "Ricky Ponting", "Canada", "Maldiv"]
  },
  {
    question: "Who has taken hattrick for first time for India in Test history? ",
    answer: "Harbhajan Singh",
    options: ["Irfan Pathan", "Jasprit Bumrah", "Chetan Sharma", "Harbhajan Singh"]
  }
]

function welcome() {
  var userName = readLine.question("What is your name? ");
  console.log("Welcome " + userName + " , Let's check your cricket knowledge");
  console.log("\n");
}



function quizToKnowMe(question, answer, options) {
  console.log("Q." + question);
  for (var i = 0; i < options.length; i++) {
    console.log((i + 1) + ". " + options[i]);
  }
  try {
    var userAnswer = readLine.question("Your answer: ");
    if (options[userAnswer - 1].toUpperCase() === answer.toUpperCase()) {
      console.log("Right");
      score++;
    } else {
      console.log("Wrong");
    }
    console.log("\n");

  }
  catch (err) {
    console.log("please enter the given option numbers")
  }
}
function playQuiz() {
  for (var i = 0; i < qusetionAndAnswer.length; i++) {
    var currentQuestion = qusetionAndAnswer[i];
    quizToKnowMe(currentQuestion.question,
      currentQuestion.answer,
      currentQuestion.options);
  }
}
function showScore() {
  console.log("Your score is " + score);
}

welcome();
playQuiz();
showScore();