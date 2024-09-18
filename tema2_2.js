let questions = [];
let rng = [];
let score = 0;
let cardBodies = [];
function updateScore() {
    document.getElementById('score').innerText = 'Score: ' + score + '/10';
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function checkAnswer(guess, question) {
    let answers = cardBodies[question].getElementsByClassName("answer");
    if (guess == rng[question]) {
        score++;
        updateScore();
    }
    else if (rng[question] != -1) {
        cardBodies[question]
        answers[guess].classList.replace('normal', 'bad');
    }
    answers[rng[question]].classList.replace('normal', 'good');
    rng[question] = -1;
}

function createQuestions(id) {
    let questionDiv = document.createElement('div');
    questionDiv.id = id;
    questionDiv.className = 'card-body';

    let categorySpan = document.createElement('span');
    categorySpan.className = 'category';
    questionDiv.appendChild(categorySpan);

    let questionH1 = document.createElement('h1');
    questionH1.className = 'question';
    questionDiv.appendChild(questionH1);

    for (let i = 0; i < 4; i++) {
        const answerButton = document.createElement('button');
        answerButton.className = 'answer normal';
        answerButton.onclick = function () {
            checkAnswer(i, id);
        };
        questionDiv.appendChild(answerButton);
    }

    document.body.appendChild(questionDiv);
}

function startQuiz(diff) {
    for (let i = 0; i < 10; i++) {
        createQuestions(i);
    }
    cardBodies = document.querySelectorAll('.card-body');
    document.querySelector('.difficulty-body').style.display = 'none';
    document.getElementById('score').style.display = 'block';
    updateScore();
    fetch('https://opentdb.com/api.php?amount=10&difficulty=' + diff + '&type=multiple').then(function (response) {
        response.json().then(data => {
            console.log(data);
            questions = data.results;
            for (let i = 0; i < 10; i++) {
                rng[i] = getRandomNumber(0, 4);
                let categoryText = cardBodies[i].querySelector(".category");
                let questionText = cardBodies[i].querySelector(".question");
                let answers = cardBodies[i].getElementsByClassName("answer");
                categoryText.innerHTML = questions[i].category;
                questionText.innerHTML = questions[i].question;
                answers[rng[i]].innerHTML = questions[i].correct_answer;
                for (let j = 0; j < 3; j++) {
                    answers[(j + 1 + rng[i]) % 4].innerHTML = questions[i].incorrect_answers[j];
                }
            }
        });
    })
}
