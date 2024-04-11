// Seletor html /// index.hmtl //
const $startGameButton = document.querySelector(".start-quiz"); ///botao start quiz//
const $nextQuestionButton = document.querySelector(".next-question"); //botao proxima questao//
const $questionsContainer = document.querySelector(".questions-container"); //botao container multiplas escolha//
const $questionText = document.querySelector(".question"); //perguntas//
const $answersContainer = document.querySelector(".answers-container");  ///container de respostas//
const $answers = document.querySelectorAll(".answer"); //repostas//

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
        Você acertou  ${totalCorrect} de ${totalQuestions} pontos possíveis!
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
    question: 'Qual é a data para entregar o primeiro projeto?',
    answers: [
      { text: '16 de abril no grupo WhatsApp do Desenvolve.', correct: false },
      { text: '9 de maio às 19h pelo Telegram.', correct: false  },
      { text: '17 de abril no email dos mentores.', correct: true },
      { text: 'Entregar na próxima reunião para os mentores.', correct: false },
    ]
  },
];

//Progress Quiz// Hide Html inincio iniciar quiz/ remove hide click apos click//
document.querySelector('.start-quiz').addEventListener('click', showProgressMessage);

//Funcão que vai remover hide, apos clicar StartQuiz///
function showProgressMessage() {
  var progressMessage = document.getElementById('progressMessage');
  if (progressMessage) {
    progressMessage.classList.remove('hide'); // remover Progresso apos clicar inicar quiz.
  }
}

$nextQuestionButton.addEventListener('click', function () {
  updateProgressMessage();
});

//Funçao de prograsso, depois de clicar inicar QUIZ///
function updateProgressMessage() {
const $progressMessage = document.querySelector(".progress-message");
const totalQuestions = questions.length;
const currentQuestionNumber = currentQuestionIndex + 1; //começar 1/6 ir ate 6/6.

if (currentQuestionNumber <= totalQuestions + 1 ) {
  $progressMessage.textContent = `Quiz ${currentQuestionNumber}/${totalQuestions}`;
  if (currentQuestionNumber === totalQuestions +1 ) {
<<<<<<< HEAD
    $progressMessage.textContent = "Quiz Finalizado"; /// Encerramento Quiz Finalizado //
=======
    $progressMessage.textContent = "Quiz Finalizado!"; /// Encerramento Quiz Finalizado //
>>>>>>> 9c1b027d522fbe948e2383429d24a1cf6ad7e211
  }
} else {
  $progressMessage.style.display = "none"; 
}
}


///Score quiz point//
document.querySelector('.start-quiz').addEventListener('click', showScoreMessage);

// Function to show the score message after clicking Start Quiz
function showScoreMessage() {
  const scoreMessage = document.getElementById('scoreMessage');
  if (scoreMessage) {
    scoreMessage.classList.remove('hide'); // Remove the 'hide' class from scoreMessage
  }
}

$nextQuestionButton.addEventListener('click', updateScoreMessage);

// Function to update the score message after answering a question
function updateScoreMessage() {
  const scoreMessage = document.getElementById('scoreMessage');
  if (scoreMessage) {
    scoreMessage.textContent = `QuizPoints: ${score}`; // Update scoreMessage with the current score
    scoreMessage.classList.remove('hide'); // Make sure scoreMessage is not hidden
  }
}


//score progresso//
// Inicialize a pontuação como uma variável global
let score = 0;

// Função para atualizar a pontuação
function updateScore() {
  score++; // Adiciona 1 ponto por resposta correta
}

// Função para exibir a pontuação atualizada após responder a uma pergunta
function showScoreMessage() {
  const scoreMessage = document.getElementById('scoreMessage');
  scoreMessage.textContent = `QuizPoints: ${score}`; // Atualiza a mensagem de pontuação
  scoreMessage.classList.remove('hide'); // Exibe a mensagem de pontuação
}

// Adiciona um ouvinte de evento ao botão "Start Quiz"
document.querySelector('.start-quiz').addEventListener('click', function() {
  const feedbackMessage = document.getElementById('feedbackMessage');
  feedbackMessage.classList.remove('hide'); // Exibe o feedback ao clicar em "Start Quiz"
});

// Função para exibir feedback e atualizar a pontuação
function selectAnswer(event) {
  const answerClicked = event.target;
  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true;
  });

  if (answerClicked.dataset.correct) {
<<<<<<< HEAD
    answerClicked.classList.add("correct"); // Adiciona classe para estilo correto (verde)
    totalCorrect++;
    updateScore(); // Chama a função para atualizar a pontuação
    showFeedback("Correto!"); // Exibe feedback correto no elemento feedbackMessage
  } else {
    answerClicked.classList.add("incorrect"); // Adiciona classe para estilo incorreto (vermelho)
    showFeedback("Incorreto!"); // Exibe feedback incorreto no elemento feedbackMessage
=======
    answerClicked.classList.add("correct"); //click na pergunta correta ou incorreta//
    document.getElementById('feedbackMessage').textContent = 'Você Acertou (+1ponto)'; //Click correta//
    document.getElementById('feedbackMessage').classList.remove('hide'); 
    totalCorrect++;
  } else {                                     // Nao fica abaixo de 0, melhor não colocar -1pontos//
    answerClicked.classList.add("incorrect"); // Click na pergunta incorreta //
    document.getElementById('feedbackMessage').textContent = 'Você Errou (+0ponto)'; // +-=- - ++=+ //
    document.getElementById('feedbackMessage').classList.remove('hide'); 
>>>>>>> 9c1b027d522fbe948e2383429d24a1cf6ad7e211
  }

  document.querySelectorAll(".answer").forEach(button => {
    if (button.dataset.correct) {
      button.classList.add("correct");
    }
  });

  $nextQuestionButton.classList.remove("hide");
<<<<<<< HEAD
=======

 /// Gambi // Timer ativar hide // Tentei colocar menos hide e remove hide //
  setTimeout(() => {
    document.getElementById('feedbackMessage').classList.add('hide');
  }, 1000); //5s

>>>>>>> 9c1b027d522fbe948e2383429d24a1cf6ad7e211
  currentQuestionIndex++;
}

// Função para exibir feedback por um curto período de tempo
function showFeedback(message) {
  const feedbackElement = document.getElementById("feedbackMessage");
  feedbackElement.textContent = message;
  feedbackElement.classList.remove('hide'); // Exibe o feedback

  // Define um timeout para ocultar o feedback após 2 segundos
  setTimeout(function() {
    feedbackElement.classList.add('hide'); // Oculta o feedback
  }, 2000);
}