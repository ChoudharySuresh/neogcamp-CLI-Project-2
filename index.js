var readlineSync = require("readline-sync");

var score = 0;

var highScore = [
  {
    name: "Vivek",
    score: "4",
  },

  {
    name: "Prasad",
    score: "6",
  },

  {
    name: "Vishambar",
    score: "2",
  },
];


function greeting() {
  var userName = readlineSync.question("What's Your Name? ");
  console.log("Welcome " + userName + " Are You GTA Fan? Let's play quiz");
}

var questions = [
  {
    question: "Who are protagonists in GTA?\nA.Civilians\nB.Anti-heroes\nC.Military\n",
    answer: "B",
  },

  {
    question: "When was the first version launched?\nA.1997\nB.1995\nC.2000\n",
    answer: "A"
  },

  {
    question: "Which company is the publisher of GTA series?\nA.Ubisoft\nB.EA games\nC.Rockstar Games\n",
    answer: "C"
  },

  {
    question: "Who is the main character in GTA: San Andreas\nA.Antonio Toni Cipriani\nB.Tommy Vercetti\nC.Carl CJ Johnson\n",
    answer: "C"
  },

  {
    question: "Which real city is Vice City based on?\nA.Toronto\nB.Miami\nC.Buenos Aires\n",
    answer: "B"
  },

  {
    question: "What is the year of the latest release of GTA?\nA.2012\nB.2018\nC.2013\n",
    answer: "C"
  },
];

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right");
    score++;
  }
  else {
    console.log("Wrong");
    score--;
  }

  console.log("Current Score : " + score);
  console.log("------------------------");
}

function game() {

  for (var i = 0; i < questions.length; i++) {
    play(questions[i].question, questions[i].answer);
  }

}

function showScore() {
  console.log("YaY ! You Scored : " + score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  for (var i = 0; i < highScore.length; i++) {
    console.log(highScore[i].name + " : " + highScore[i].score);
  }

}

greeting();
game();
showScore();