var input = require('readline-sync');
var score = 0;
var highScore = [
  {
    name : "Aman",
    score : 8,
  },
  {
   name : "swapnali",
    score: 6,
  }
]
var questions = [{
        question: "What do you understand by HTML?",
        answer: "d",
        options: [
            "a. HTML describes the structure of a webpage",
            "b. HTML is the standard markup language mainly used to create web pages",
            "c. HTML consists of a set of elements that helps the browser how to view the content",
            "d. All of the above"
        ],
    },
    {
        question: "Who is the father of HTML?",
        answer: "b",
        options: [
            "a. Rasmus Lerdorf",
            "b. Tim Berners-Lee",
            "c.  Brendan Eich",
            "d. Sergey Brin"
        ],
    },
    {
        question: "HTML stands for ___",
        answer: "a",
        options: [
            "a. HyperText Markup Language",
            "b. HyperText Machine Language",
            "c. HyperText Marking Language",
            "d.  HighText Marking Language"
        ],
    },
    {
        question: "Which is used to read an HTML page and render it?",
        answer: "c",
        options: [
            "a. Web server",
            "b. Web network",
            "c. Web browser",
            "d. Web matrix"
        ],

    },
    {
        question: "Which tag is used for inserting the largest heading in HTML?",
        answer: "b",
        options: [
            "a. head",
            "b.  <h1>",
            "c.  <h6>",
            "d.  heading"
        ],

    },

    {
        question: "Which is used to create Web Pages ?",
        answer: "c",
        options: [
            "a. C++",
            "b. Java",
            "c. HTML",
            "d. JVM"
        ],

    },

    {
        question: "HTML is a set of markup ___.",
        answer: "a",
        options: [
            "a. tags",
            "b.  sets",
            "c.  attributes",
            "d. none of the above"
        ],

    },

    {
        question: "HTML tags are used to describe document ___.",
        answer: "b",
        options: [
            "a. definition",
            "b. content",
            "c. language",
            "d. model"
        ],

    },

    {
        question: "HTML program is saved using ___ extension.",
        answer: "b",
        options: [
            "a. .htmn",
            "b.  .html",
            "c. .htnl",
            "d. .htnl"
        ],

    },

    {
        question: "HTML program can be read and rendered by ___.",
        answer: "c",
        options: [
            "a. Compiler",
            "b. Server",
            "c. Web Browser",
            "d.  Interpreter"
        ],

    },
]

function welcome() {
    var newUser = input.question("What is your name ?")
    console.log(`welcome to ${newUser} lets enjoy markup language(HTML) fun quiz.`)
}

function user(question, answer, options) {
    console.log(`${question}`)

    console.log(`\nselect Singal Option \n`)
    for (var i = 0; i < options.length; i++) {
        console.log(options[i]);
    }
    var userinput = input.question(`please enter your answer :`)

    if (userinput.toUpperCase() === answer.toUpperCase()) {
        // console.log("you are right")
        score++;
        console.log(`current score : ${score}`);
    } else {
        // console.log("you are wrong")
        score--;
        console.log(`current score : ${score}`);
    }
    console.log(`\n`)
}

function game() {
    for (var i = 0; i < questions.length; i++) {
        currentquestion = questions[i];
        console.log(`----------------------------------`)
        console.log(`Question number : ${i +1} \n`)
        user(currentquestion.question, currentquestion.answer, currentquestion.options);
    }
}
function high() {
console.log(`your highest score is : ${score}`)
highScore.map(score => console.log(`${score.name}  ${score.score}`))
}

welcome();
game();
high();