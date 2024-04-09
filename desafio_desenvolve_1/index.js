// Seletor html /// index.hmtl //
const $startGameButton = document.querySelector(".start-quiz");
const $nextQuestionButton = document.querySelector(".next-question");
const $questionsContainer = document.querySelector(".questions-container");
const $questionText = document.querySelector(".question");
const $answersContainer = document.querySelector(".answers-container");
const $answers = document.querySelectorAll(".answer");

// Contagem de perguntas /// iniciar apartir -> start quiz //
let currentQuestionIndex = 0;
let totalCorrect = 0;

// Clicar start quiz ///
$startGameButton.addEventListener("click", startGame);
$nextQuestionButton.addEventListener("click", displayNextQuestion);

// Funções start quiz esconder
function startGame() {
  $startGameButton.classList.add("hide");
  $questionsContainer.classList.remove("hide");
  displayNextQuestion();
}

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

  document.body.removeAttribute("class");
  $nextQuestionButton.classList.add("hide");
}

// Funções correta e incorreta //
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

  // Adiciona o conteúdo da mensagem de finalização e o botão de refazer o quiz
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

// progresso quiz // Funçao ao clicar inicar quiz // Progresso aparecer //
document.addEventListener('DOMContentLoaded', function () {
  const $startGameButton = document.querySelector(".start-quiz"); // Botão "Iniciar Quiz"
  const $progressMessage = document.querySelector(".progress-message"); // Mensagem de progresso

  $startGameButton.addEventListener('click', function () {
    $progressMessage.classList.remove('hide'); // Remove a classe "hide" para mostrar a mensagem de progresso
    updateProgressMessage();
  });

  $nextQuestionButton.addEventListener('click', function () {
    updateProgressMessage();
  });
});

// Fuçao de contagem /// Quiz 1/6 apos chegar na pergunta 6/6/ Mensagem Quiz Encerrado //
function updateProgressMessage() {
  const $progressMessage = document.querySelector(".progress-message");
  const totalQuestions = questions.length;
  const currentQuestionNumber = currentQuestionIndex + 1; //começar 1/6//

  if (currentQuestionNumber <= totalQuestions) {
    $progressMessage.textContent = `Quiz ${currentQuestionNumber}/${totalQuestions}`;
  } else if (currentQuestionNumber === totalQuestions + 1) {
    $progressMessage.textContent = "Quiz Encerrado";
  } else {
    $progressMessage.style.display = "none"; 
  }
}

function resetQuiz() {
  const $progressMessage = document.querySelector(".progress-message");
  $progressMessage.classList.add('hide'); // Adiciona a classe "hide" para ocultar a mensagem de progresso
  totalQuestions = 6; 
}