// Seletor html /// index.hmtl //
const $startGameButton = document.querySelector(".start-quiz");
const $nextQuestionButton = document.querySelector(".next-question");
const $questionsContainer = document.querySelector(".questions-container");
const $questionText = document.querySelector(".question");
const $answersContainer = document.querySelector(".answers-container");
const $answers = document.querySelectorAll(".answer");

<<<<<<< HEAD
// Contagem de perguntas /// iniciar apartir -> start quiz //
let currentQuestionIndex = 0;
let totalCorrect = 0;
=======
//Seletor html botões//
const $startGameButton = document.querySelector(".start-quiz") 
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container") 
const $questionText = document.querySelector(".question") 
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")
>>>>>>> e6527affa8b60a99652976609c7169e4ae5e9380

// Clicar start quiz ///
$startGameButton.addEventListener("click", startGame);
$nextQuestionButton.addEventListener("click", displayNextQuestion);

<<<<<<< HEAD
// Funções start quiz esconder
=======

//Contagen de perguntas
let currentQuestionIndex = 1
let totalCorrect = 1

// Evento start quiz //
$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

//Função de start quiz esconder///
>>>>>>> e6527affa8b60a99652976609c7169e4ae5e9380
function startGame() {
  $startGameButton.classList.add("hide");
  $questionsContainer.classList.remove("hide");
  displayNextQuestion();
}

<<<<<<< HEAD
=======
///fim///


/// Função de proxima pergunta ////
>>>>>>> e6527affa8b60a99652976609c7169e4ae5e9380
function displayNextQuestion() {
  resetState();
  if (questions.length === currentQuestionIndex) {
    return finishGame();
  }
  $questionText.textContent = questions[currentQuestionIndex].question;
  questions[currentQuestionIndex].answers.forEach(answer => {
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

function resetState() {
  while ($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild);
  }

<<<<<<< HEAD
  document.body.removeAttribute("class");
  $nextQuestionButton.classList.add("hide");
=======
  ///escoder///
  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
>>>>>>> e6527affa8b60a99652976609c7169e4ae5e9380
}
///fim///

<<<<<<< HEAD
// Funções correta e incorreta //
=======

//função de correta e incorreta//// --- Evento ---///
>>>>>>> e6527affa8b60a99652976609c7169e4ae5e9380
function selectAnswer(event) {
  const answerClicked = event.target;
  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true;
  });
  if (answerClicked.dataset.correct) {
    answerClicked.classList.add("correct"); ///green//
    totalCorrect++;
  } else {
    answerClicked.classList.add("incorrect"); ///red/
  }
  document.querySelectorAll(".answer").forEach(button => {
    if (button.dataset.correct) {
      button.classList.add("correct");
    }
  });

  ///Escoder////
  $nextQuestionButton.classList.remove("hide");
  currentQuestionIndex++;
}

// Função para finalizar e feedback quantas acertou ///
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

<<<<<<< HEAD
  ///Criar botao refazer QUIZ/// Após fim de jogo ///
  $questionsContainer.innerHTML = `
      <p class="final-message">
          Você acertou ${totalCorrect} de ${totalQuestions} questões!
          <span>Resultado: ${message}</span>
      </p>
      <button onclick=window.location.reload() class="button">
          Refazer Quiz!  
      </button>
  `;
}

///banco de perguntas//
=======
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

////-> Fim <---///

//Evento display proxima pergunta // ate endgame ////
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

// Apos fim de jogo //
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

//Quiz Banco de perguntas//
>>>>>>> e6527affa8b60a99652976609c7169e4ae5e9380
const questions = [
  {
    question: "Qual foi a data de início do Desenvolve?",
    answers: [
      { text: "29 de janeiro", correct: true, feedback: "Correto! Esse dia foi a primeira live de integração do curso Desenvolve!" },
      { text: "02 de fevereiro", correct: false, feedback: "Incorreto! Essa data não teve eventos relacionados ao Desenvolve." },
      { text: "12 de dezembro", correct: false, feedback: "Incorreto! Essa data não teve eventos relacionados ao Desenvolve." },
      { text: "29 de fevereiro", correct: false, feedback: "Incorreto! Esse dia não existe no calendário." }
    ]
  },
  {
    question: "Qual foi o dia do primeiro encontro?",
    answers: [
      { text: "02 e 07 de fevereiro, em uma quarta e quinta-feira.", correct: false, feedback: "Incorreto!" },
      { text: "05 e 08 de fevereiro, em uma terça e quinta-feira.", correct: true, feedback: "Correto! Esse foi o primeiro encontro à noite, às 20h!" },
      { text: "04 de janeiro, em uma segunda-feira, em dois horários diferentes.", correct: false, feedback: "Incorreto!" },
      { text: "06 de fevereiro, em um sábado.", correct: false, feedback: "Incorreto!" }
    ]
  },
  {
    question: 'Qual foi o primeiro curso da primeira semana?',
    answers: [
      { text: 'Javascript', correct: true, feedback: "Correto! O primeiro curso da primeira semana foi Javascript." },
      { text: 'Linux', correct: false, feedback: "Incorreto! "},
      { text: 'Redes', correct: false, feedback: "Incorreto!"},
      { text: "Shelscript", correct: false, feedback: "Incorreto!" }
    ]
  },
  {
    question: 'O Desenvolve oferece cursos pela plataforma Alura?',
    answers: [
      { text: "Verdadeiro", correct: true, feedback: "Correto! Os cursos são oferecidos pela plataforma Alura." },
      { text: "Falso", correct: false, feedback: "Incorreto! Os cursos são oferecidos pela plataforma Alura." },
    ]
  },
  {
    question: 'Qual foi o dia da aula inaugural do Desenvolve?',
    answers: [
      { text: '02 de janeiro às 20h', correct: false, feedback: "Incorreto! Não houve nenhum evento nesta data. A primeira live foi no dia 29 de janeiro." },
      { text: '29 de janeiro às 19h', correct: true, feedback: "Correto! Essa foi a primeira live do grupo Desenvolve." },
      { text: '02 de fevereiro às 20h', correct: false, feedback: "Incorreto! A primeira live foi no dia 29 de janeiro." },
      { text: '08 de fevereiro às 8h da manhã', correct: false, feedback: "Incorreto! A primeira live foi no dia 29 de janeiro." },
    ]
  },
  
  {
    question: 'Qual é a data para entregar o primeiro projeto?',
    answers: [
      { text: '16 de abril no grupo WhatsApp do Desenvolve.', correct: false },
      { text: '9 de maio às 19h pelo Telegram.', correct: false  },
      { text: '17 de abril no email dos mentores.', correct: true },
      { text: 'Entregar na próxima reunião para os mentores.', correct: false },
    ]
  },
];

<<<<<<< HEAD
=======

// Função para finalizar e feedback quantas acertou/// Endgame ///
function finishGame() {
  const totalQuestions = questions.length;
  const performance = Math.floor((totalCorrect / totalQuestions) * 100);

  let message = "";

  ///mensagem de pontuação///
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

  ///Criar botao centralizado apos finalizar quiz /// 
  $questionsContainer.innerHTML = `
      <p class="final-message">
          Você acertou ${totalCorrect} de ${totalQuestions} questões!
          <span>Resultado: ${message}</span>
      </p>
      <button onclick=window.location.reload() class="button">
          Refazer Quiz!  
      </button>
  `;
}


>>>>>>> e6527affa8b60a99652976609c7169e4ae5e9380
