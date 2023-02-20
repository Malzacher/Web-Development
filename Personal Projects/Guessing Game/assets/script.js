
const trueBtn = document.getElementById('true-box');
const falseBtn = document.getElementById('false-box');
const nextBtn = document.getElementById('next-question');
const response = document.getElementById('question-response');
const scoreTally = document.getElementById('score-tally');

var sec = 15;

trueBtn.addEventListener('click', function () {
    qCheck(true)
    console.log("true button")
});

falseBtn.addEventListener('click', function () {
    qCheck(false)
    console.log("false button")
});

var currentQuestion = 0;
var score = 0;

var questions = [{
    "question": " Is the black box in a plane is actually black?",
    "answer": false,
    "response": "False! They are actually orange"
}, {
    "question": " Is Alliumphobia is a fear of garlic?",
    "answer": true,
    "response": "True! Alliumphobia is indeed a fear of garlic"
}, {
    "question": " is the atomic number for lithium no. 17",
    "answer": false,
    "response": "False! Lithiums atomic number is 3"
}, {
    "question": " Does broccoli contain more vitamin C than lemons?",
    "answer": true,
    "response": " True! Broccoli contains 89 mg of vitamin C per 100 grams, while lemons contain only 77 mg of vitamin C per 100 grams."
}];

(function () {
    fnReset();
    console.log("im working")
})();

function fnReset() {
    currentQuestion = 0;
    document.getElementById('update-question').innerHTML = questions[currentQuestion].question;
}

var questionColour = document.getElementById('question-box');

function qCheck(answer) {
    var questionAnswer = questions[currentQuestion].answer;

    console.log("in the right place")
    if (questionAnswer === answer) {
        // show Correct
        console.log("you were correct");
        score++;
        scoreTally.innerText = score;
        fade();
        response.innerText = questions[currentQuestion].response
        setTimeout(nextQuestion, 6000)
        questionColour.style.background = "linear-gradient(90deg, #36DE90, transparent) #188E56";

    }
    else {
        // show incorrect and reset current score
        console.log("you were wrong");
        highScore();
        score = 0;
        scoreTally.innerText = score;
        fade();
        response.innerText = questions[currentQuestion].response
        setTimeout(nextQuestion, 6000)
    }
}

function nextQuestion() {
    console.log("Going to text Question!")
    sec = 15;

    //toggling the fade class prior to changing the text

    textUpdate.classList.toggle("fade")
    questionColour.style.background = "#222B39";

    response.innerText = ""
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        console.log(currentQuestion)
    } else {
        alert("Sorry no more");
    }
    document.getElementById('update-question').innerHTML = questions[currentQuestion].question;

}
function highScore() {
    console.log(score)
    var highScore = 0;
    if (score > highScore) {
        highScore = score;
        console.log(highScore)
        document.getElementById('high-score-tally').innerText = highScore;
    }
}

var timer;
var ele = document.getElementById('timer-center');


function clock() {
    timer = setInterval(() => {
        ele.innerHTML = sec;
        sec -= 1;
        if (sec >= 10) {
            ele.style.color = "white";
        }
        if (sec <= 4) {
            ele.style.color = "#D73010";
        }
        if (sec === -1) {
            qCheck(null);
            score = 0;
            scoreTally.innerText = score;
            sec = 5;
        }
    }, 1000);
}

clock();

let textUpdate = document.getElementById('question-response');

function fade() {
    textUpdate.classList.toggle("fade")
    console.log("Fading")
}
