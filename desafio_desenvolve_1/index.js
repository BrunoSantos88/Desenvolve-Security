
//Seletor//
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

//Funçoes start quiz esconder///
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

//Função de proxima pergunta//
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

// Apos terminar, mensagens final do quiz//
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

//"<!-- Quiz Banco de perguntas -->//
const questions = [
  {
    question: "Qual data que começou Desenvolve?",
    answers: [
      { text: "Dia 29 de janeiro", correct: true, feedback: "Correto! Esse dia foi a primeira live de integração do curso Desenvolve!" },
      { text: "Dia 02 de Fevereiro", correct: false, feedback: "Incorreto! Essa data não ocorreu nada." },
      { text: "12 de Dezembro", correct: false, feedback: "Incorreto! Essa data não ocorreu nada." },
      { text: "29 de Fevereiro", correct: false, feedback: "Incorreto! Esse dia liberou a plataforma Alura." }
    ]
  },
  {
    question: "Que dia foi o primeiro encontro?",
    answers: [
      { text: "Dia 7, em uma quarta-feira!", correct: false, feedback: "Incorreto!" },
      { text: "Dia 8 em uma quinta-feira!", correct: true, feedback: "Correto! Esse dia foi o primeiro encontro à noite, às 20h!" },
      { text: "Dia 4  em uma terça-feira!", correct: false, feedback: "Incorreto!!" },
      { text: "Dia 02 no mesmo dia que começou!", correct: false, feedback: "Incorreto!" }
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
    question: 'O desenvolve oferece curso pela plataforma Alura?',
    answers: [
      { text: "Verdadeiro", correct: true, feedback: "Correto! Os cursos são oferecidos pela plataforma Alura." },
      { text: "Falso", correct: false, feedback: "Incorreto! Os cursos são oferecidos pela plataforma Alura." },
    ]
  },
  {
    question: 'Qual foi o dia da aula inaugural do Desenvolve?',
    answers: [
      { text: 'Dia 02 de janeiro às 20h', correct: false, feedback: "Incorreto! Não houve nada neste dia. A primeira live foi no dia 29 de janeiro." },
      { text: 'Dia 29 de janeiro às 19h', correct: true, feedback: "Correto! Esse dia foi a primeira live do grupo Desenvolve." },
      { text: 'Dia 02 de Fevereiro às 20h', correct: false, feedback: "Incorreto! A primeira live foi no dia 29 de janeiro." },
      { text: 'Dia 08 de Fevereiro às 8h da manhã', correct: false, feedback: "Incorreto! A primeira live foi no dia 29 de janeiro." },
    ]
  },
];



// Função para finalizar o quiz
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

 // Atualizar o conteúdo do elemento 'feedback' com a mensagem de quiz finalizado
 feedbackElement.textContent = 'Feedback: Quiz finalizado';

 // Imprimir feedback das respostas
 questions.forEach(question => {
     question.answers.forEach(answer => {
         console.log(answer.feedback);
     });
 });

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

// feedback start quiz//texto
let feedbackElement = document.getElementById('feedback');
let startQuizButton = document.querySelector('.start-quiz');

// Alterar o texto do feedback após clicar no botão
startQuizButton.addEventListener('click', function() {
    feedbackElement.textContent = 'Atenção quiz está iniciado!';
});



///// Function Feedback
function selectAnswer(event) {
  const answerClicked = event.target;
  const questionIndex = currentQuestionIndex - 1; // Índice da pergunta atual

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true;
  });
  if (answerClicked.dataset.correct) {
    answerClicked.classList.add("correct");
    totalCorrect++; // Incrementa o número de perguntas corretas
    displayFeedback("Resposta correta: " + answerClicked.textContent); // Exibe a resposta correta
  } else {
    answerClicked.classList.add("incorrect");
    displayFeedback("Resposta incorreta: " + answerClicked.textContent); // Exibe a resposta incorreta
  }
  document.querySelectorAll(".answer").forEach(button => {
    if (button.dataset.correct) {
      button.classList.add("correct");
    }
  });
  $nextQuestionButton.classList.remove("hide");
  
  // Exibe o feedback da pergunta
  displayFeedback(questions[questionIndex].answers.filter(ans => ans.text === answerClicked.textContent)[0].feedback);
  
  currentQuestionIndex++;
} 

// Função para exibir o feedback
function displayFeedback(feedbackText) {
  const feedbackElement = document.getElementById('feedback');
  feedbackElement.textContent = 'Feedback: ' + feedbackText;
}

const nextQuestionButton = document.querySelector('.next-question');

nextQuestionButton.addEventListener('click', function() {
    currentQuestionIndex++;
    displayNextQuestion();
});

