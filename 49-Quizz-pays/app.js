const questions = [
  {
    question: "Quel est le nom du pays ?",
    img: "france.jpg",
    name: "France"
  },
  {
  question: "Quel est le nom du pays ?",
    img: "allemagne.jpg",
    name: "Allemagne"
  },
  {
      question: "Quel est le nom du pays ?",
    img: "angleterre.jpg",
    name: "Angleterre"
  },
  {
      question: "Quel est le nom du pays ?",
    img: "argentine.jpg",
    name: "Argentine"
  },
  {
      question: "Quel est le nom du pays ?",
    img: "cameroun.jpg",
    name: "cameroun"
  },
];

let currentQuestion = 0;
let score = 0;

const quizzImg = document.querySelector("#quizz-img");
const quizzQuestion = document.querySelector("#quizz-question");
const inputResult = document.querySelector("#resultat");
const btnNext = document.querySelector("#next");
const resultatFinal = document.querySelector("#resultatFinal");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledQuestions = shuffle(questions);

quizzImg.src = `./src/${shuffledQuestions[currentQuestion].img}`;
quizzQuestion.textContent = shuffledQuestions[currentQuestion].question;

function validation(){
  if (inputResult.value.toLowerCase() === shuffledQuestions[currentQuestion].name.toLowerCase()) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion === shuffledQuestions.length) {
    quizzQuestion.textContent = "Fin du quizz";
    quizzImg.style.display = "none";
    inputResult.style.display = "none";
    btnNext.style.display = "none";
    resultatFinal.textContent = "Votre score est de " + score + " sur " + shuffledQuestions.length;
  } else {
    quizzImg.src = `./src/${shuffledQuestions[currentQuestion].img}`;
    quizzQuestion.textContent = shuffledQuestions[currentQuestion].question;
    inputResult.value = "";
  }
};



//   Bouton next + touche entrer
btnNext.addEventListener("click", validation);
inputResult.addEventListener("keyup", (event) => {
if (event.key === "Enter") {
  validation();
}
});
