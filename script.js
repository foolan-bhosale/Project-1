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

class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
        // this.string = string;
    }

    // targeting  next question

    getNextQuestion() {
        return this.questions[this.questionIndex];
        // console.log(this.questions[this.questionIndex]);
    }

    // checking the game finished or not

    isGameFinished() {
        // alert(this.questions.length);
        if (this.questionIndex === this.questions.length) {
            console.log('returning true');
            return true;
        }
    }

    // getting Index of the question

    getQuestionIndex() {
        return this.questionIndex++;
    }
    // increase score function
    increaseScore() {
        this.score += 1;
        return this.score;
    }

    // clickedAnswer(answer) {
    //     // quizContainer.style.display = 'none';
    //     // feedbackContainer.style.display = 'block';
    //     if (this.getQuestionIndex().correctAnswer(answer)) {
    //         // console.log(this.score++);
    //         this.score++;
    //         scoreContainer.innerHTML = ` SCORE : ${this.score}`;
    //         const node = document.createTextNode(answer);

    //         console.log(answer);
    //     }
    //     this.questionIndex++;
    //     if (this.questionIndex == this.questions.length) {
    //         localStorage.setItem('score', this.score);
    //         return window.location.assign('/result.html');
    //     }
    // }
}

class Question {
    constructor(string, choices, answer) {
        this.string = string;
        this.choices = choices;
        this.answer = answer;
    }
    correctAnswer(guessedAnswer) {
        return guessedAnswer === this.answer;
    }
}

let questions = [
    new Question(
        'If we want define style for an unique element, then which css selector will we use?',
        ['id', 'class', 'text', 'name'],
        'id'
    ),

    new Question(
        "If we don't want to allow a floating div to the left side of an element, which css property will we use ?",
        ['margin', 'float', 'clear', 'padding'],
        'clear'
    ),

    new Question(
        'Can we align a Block element by setting the left and right margins ?',
        ['Yes, we can', 'May be', 'Both of the above', 'Not possible'],
        'Not Possible'
    ),
    new Question(
        'If we want to wrap a block of text around an image, which css property will we use ?',
        ['wrap', 'float', 'align', 'push'],
        'float'
    ),
    new Question(
        'Fundamental HTML Block is known as ___________.',
        ['HTML Body', 'HTML Tag', 'HTML Attribute', 'HTML Element'],
        'HTML Tag'
    )
];
