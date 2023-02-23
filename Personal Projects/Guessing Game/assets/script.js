const trueBtn = document.getElementById('true-box');
const falseBtn = document.getElementById('false-box');
const nextBtn = document.getElementById('next-question');
const response = document.getElementById('question-response');
const scoreTally = document.getElementById('score-tally');

var sec = 15;

trueBtn.addEventListener('click', function () {
    qCheck(true)
    trueBtn.disabled = true;
    falseBtn.disabled = true;
    console.log("true button")
});

falseBtn.addEventListener('click', function () {
    qCheck(false)
    trueBtn.disabled = true;
    falseBtn.disabled = true;
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
}, {
    "question": " Being scared of clouds is called Coulrophobia?",
    "answer": false,
    "response": "False! Coulrophobia is the fear of being the scared of clowns"
}, {
    "question": " Did Einstein fail his math class in university?",
    "answer": false,
    "response": "False! Einstein actually failed his physics class in university"
}, {
    "question": " It takes nine months for an elephant to be born?",
    "answer": false,
    "response": "False! Elephant babies are born after 22 months"
}, {
    "question": " In California, USA, you cannot wear cowboy boots unless you own at least two cows",
    "answer": true,
    "response": "True, you cannot wear cowboy boots unless you own at least two cows"
}, {
    "question": " Humans share 95 percent of their DNA with bananas",
    "answer": false,
    "response": "False, humans share 60 percent of their DNA with bananas"
}, {
    "question": " Is a coconut is a nut?",
    "answer": false,
    "response": "False! It’s actually a one-seeded drupe like peaches"
}, {
    "question": " Coca Cola exists in every country around the world",
    "answer": false,
    "response": " False! Coca Cola does not exist in Cuba and North Korea"
}, {
    "question": " Rapper Nicki Minaj is over 180 cm (5 ft, 10.9 in) in height",
    "answer": false,
    "response": "False. Nicki Minaj is ‘only’ 157 cm (5 ft, 1.8 in) tall. Hard to tell with all those high heels, right?"
}, {
    "question": " The Trojan horse was used by the Greeks to mask their way into the city of Troy and win the war",
    "answer": true,
    "response": "True! The Trojan horse was used by the Greeks to mask their way into the city of Troy and win the war"
}, {
    "question": " The liver is the largest organ in the human body",
    "answer": false,
    "response": "False. The human body’s largest organ is the skin. It weighs 3.6 kg (8 lbs.)"
}, {
    "question": " The world’s earliest surviving motion-picture film dates back to 1888",
    "answer": true,
    "response": "True! The world’s earliest surviving motion-picture film dates back to 1888"
}, {
    "question": " After you drink alcohol, it takes your brain 6 minutes to start reacting to it",
    "answer": true,
    "response": "True! After you drink alcohol, it takes your brain 6 minutes to start reacting to it"
}, {
    "question": " Singer Billie Eilish’s full name is Billie Eilish Pirate Baird O’Connell",
    "answer": true,
    "response": "True! Singer Billie Eilish’s full name is Billie Eilish Pirate Baird O’Connell"
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
        setTimeout(nextQuestion, 5000)
        sec = 5
        questionColour.style.background = "linear-gradient(270deg, #36DE90, transparent) #188E56";

    } else {
        // show incorrect and reset current score
        console.log("you were wrong");
        highScore();
        score = 0;
        scoreTally.innerText = score;
        fade();
        sec = 5
        response.innerText = questions[currentQuestion].response
        setTimeout(nextQuestion, 5000)
        questionColour.style.background = "linear-gradient(270deg, #F57860, transparent) #D73010";
    }
}

function nextQuestion() {
    console.log("Going to text Question!")
    trueBtn.disabled = false;
    falseBtn.disabled = false;
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
        sec--;
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