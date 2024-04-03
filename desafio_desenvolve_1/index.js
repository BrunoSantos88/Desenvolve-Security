const $startGameButton = document.querySelector(".start-quiz") 
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container") 
const $questionText = document.querySelector(".question") 
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")



//Contagen de perguntas
let currentQuestionIndex = 1
let totalCorrect = 1

// Clicar star quiz.
$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

//Funçoes
function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}
function displayNextQuestion() {
  resetState()
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }
  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)
    newAsnwer.addEventListener("click", selectAnswer)
  })
}
function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

//Incrementa o número de perguntas corretas//
function selectAnswer(event) {
  const answerClicked = event.target;
  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true;
  });
  if (answerClicked.dataset.correct) {
    answerClicked.classList.add("correct");
    totalCorrect++; // 
  } else {
    answerClicked.classList.add("incorrect");
  }
  document.querySelectorAll(".answer").forEach(button => {
    if (button.dataset.correct) {
      button.classList.add("correct");
    }
  });
  $nextQuestionButton.classList.remove("hide");
  currentQuestionIndex++;
} 

function displayNextQuestion() {
  resetState();
  
  if (questions.length === currentQuestionIndex) {
    return finishGame();
  }

  const currentQuestion = questions[currentQuestionIndex];
  $questionText.textContent = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const newAnswer = document.createElement("button");
    newAnswer.classList.add("button", "answer");
    newAnswer.textContent = answer.text;
    if (answer.correct) {
      newAnswer.dataset.correct = answer.correct;
    }
    $answersContainer.appendChild(newAnswer);

    newAnswer.addEventListener("click", selectAnswer);
  });

}
//nest question//
function displayNextQuestion() {
  resetState();
  
  if (questions.length === currentQuestionIndex) {
    return finishGame();
  }

  const currentQuestion = questions[currentQuestionIndex];
  $questionText.textContent = currentQuestion.question;
  currentQuestion.answers.forEach(answer => {
    const newAnswer = document.createElement("button");
    newAnswer.classList.add("button", "answer");
    newAnswer.textContent = answer.text;
    if (answer.correct) {
      newAnswer.dataset.correct = answer.correct;
    }
    $answersContainer.appendChild(newAnswer);

    newAnswer.addEventListener("click", selectAnswer);
  });
}

// Exibe a mensagem final//
function endGame() {
  document.querySelector('.final-message').classList.remove('hide'); 
  document.querySelector('.controls-container').classList.add('hide');
}
document.querySelector('.start-quiz').addEventListener('click', function() {
  startTimer(); 
});
function displayNextQuestion() {
  resetState();
  
  if (questions.length === currentQuestionIndex) {
    return finishGame();
  }

  const currentQuestion = questions[currentQuestionIndex];
  $questionText.textContent = currentQuestion.question;
  currentQuestion.answers.forEach(answer => {
    const newAnswer = document.createElement("button");
    newAnswer.classList.add("button", "answer");
    newAnswer.textContent = answer.text;
    if (answer.correct) {
      newAnswer.dataset.correct = answer.correct;
    }
    $answersContainer.appendChild(newAnswer);

    newAnswer.addEventListener("click", selectAnswer);
  });
}


//"<!-- banco de perguntas -->//
const questions = [
  {
    question: "Qual data que começou Desenvolve?",
    answers: [
      { text: "Dia 29 janeiro", correct: false },
      { text: "Dia 02 Fevereiro", correct: true },
      { text: "12 Dezembro", correct: false},
      { text: "29 Fevereiro", correct: false }
    ]
  },
  {
    question: "Que dia foi o primeiro encontro?",
    answers: [
      { text: "Dia 7, em uma quarta-feita!", correct: false },
      { text: "Dia 8 em uma quinta-feira!", correct: true },
      { text: "Dia 5 em uma terça-feira!", correct: true },
      { text: "Dia 02 no mesmo dia que começou!", correct: false }
    ]
  },
  {
    question: 'Qual foi o primero curso da primeira semana?"',
    answers: [
      { text: 'Javascript', correct: true },
      { text: 'Linux', correct: false },
      { text: 'Redes', correct: false },
      { text: "Shelscript", correct: false }
    ]
  },
  {
    question: 'O desenvolve oferece curso pela plataforma Alura?',
    answers: [
      { text: "Verdadeiro", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: 'Qual foi o dia da aula inaugural Desenvolve?',
    answers: [
      { text: 'Dia 02 de janeiro as 20h', correct: false },
      { text: 'Dia 29 de janeiro as 19h', correct: true },
      { text: 'Dia 02 de Fevereiro as 20h', correct: false },
      { text: 'Dia 08 de Fevereiro 8h da manha', correct: false }
    ]
  },
]



//"<!-- Tela final ao terminar o quiz -->//
function finishGame() {
  const totalQuestions = questions.length;
  const performance = Math.floor((totalCorrect / totalQuestions) * 100);

  let message = "";

  switch (true) {
    case performance >= 90:
      message = "Excelente :)";
      break;
    case performance >= 70:
      message = "Muito bom :)";
      break;
    case performance >= 50:
      message = "Bom";
      break;
    default:
      message = "Pode melhorar :(";
      break;
  }

  $questionsContainer.innerHTML = `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button onclick=window.location.reload() class="button">
      Refazer teste
    </button>
  `;
}