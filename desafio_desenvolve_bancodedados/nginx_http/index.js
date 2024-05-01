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


//progress Quiz// Hide Html inincio iniciar quiz/ remove hide click apos click//
document.querySelector('.start-quiz').addEventListener('click', showProgressMessage);

//Funcão de tira hide apos clicar StartQuiz///
function showProgressMessage() {
  var progressMessage = document.getElementById('progressMessage');
  if (progressMessage) {
    progressMessage.classList.remove('hide'); // remover Progresso apos clicar inicar quiz.
  }
}

$nextQuestionButton.addEventListener('click', function () {
  updateProgressMessage();
});

//Fuçao de prograsso//Depois de Clicar Inicar QUIZ///
function updateProgressMessage() {
const $progressMessage = document.querySelector(".progress-message");
const totalQuestions = questions.length;
const currentQuestionNumber = currentQuestionIndex + 1; //começar 1/6 ir ate 6/6.

if (currentQuestionNumber <= totalQuestions + 1 ) {
  $progressMessage.textContent = `Quiz ${currentQuestionNumber}/${totalQuestions}`;
  if (currentQuestionNumber === totalQuestions +1 ) {
    $progressMessage.textContent = "Quiz Finalizado"; /// Encerramento Quiz Finalizado //
  }
} else {
  $progressMessage.style.display = "none"; 
}
}

///Score QuizPoint//
document.querySelector('.start-quiz').addEventListener('click', showScoreMessage);

// Função apos click remover Hide
function showScoreMessage() {
  const scoreMessage = document.getElementById('scoreMessage');
  if (scoreMessage) {
    scoreMessage.classList.remove('hide'); // Remover hide Score //
  }
}

$nextQuestionButton.addEventListener('click', updateScoreMessage);


function updateScoreMessage() {
  const scoreMessage = document.getElementById('scoreMessage');
  if (scoreMessage) {
    scoreMessage.textContent = `QuizPoints: ${score}`;  //inicar com QuizPoints/// 
    scoreMessage.classList.remove('hide'); // HidePoints//
  }
}


let score = 0; // Inicia com pontuação zero

// Função para exibir a pontuação atualizada após responder a uma pergunta
function showScoreMessage() {
  const scoreMessage = document.getElementById('scoreMessage');
  scoreMessage.textContent = `QuizPoints: ${score}`; // Atualiza a mensagem de pontuação
  scoreMessage.classList.remove('hide'); // Exibe a mensagem de pontuação
}

// Função para exibir feedback e atualizar a pontuação
function selectAnswer(event) {
  const answerClicked = event.target;
  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true;
  });

  if (answerClicked.dataset.correct) {
    answerClicked.classList.add("correct"); 
    totalCorrect++;
    score++; // Incrementa a pontuação por resposta correta
    showScoreMessage(); // Atualiza e exibe a pontuação
    showFeedback("Correto!"); // Exibe feedback correto no elemento feedbackMessage
  } else {
    answerClicked.classList.add("incorrect"); 
    showFeedback("Incorreto!"); // Exibe feedback incorreto no elemento feedbackMessage
  }

  document.querySelectorAll(".answer").forEach(button => {
    if (button.dataset.correct) {
      button.classList.add("correct");
    }
  });

  $nextQuestionButton.classList.remove("hide");
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
  }, 1700); // Tempo
}

