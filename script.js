const container = document.getElementsByClassName('class');
const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('next');
const startButton = document.getElementById('start');
const prevButton = document.getElementById('prev');
const paragraph = document.querySelector('#paragraph');
const list = document.querySelector('#list');
const heading = document.querySelector('h2');
const scoreContainer = document.querySelector('#score');
const showAnswer = document.querySelector('#show-answer');

// to start the game
startButton.addEventListener('click', startQuiz);

// targeting start element

function startQuiz() {
    startButton.style.visibility = 'hidden';
    return displayQuestion();
}
