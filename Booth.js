const startButton = document.getElementById("startButton");
const spinButton = document.getElementById("spinButton");
const wheel = document.getElementById("wheel");
const introSection = document.getElementById("intro-section");
const wheelSection = document.getElementById("wheel-section");
const questionSection = document.getElementById("question-section");
const finalSection = document.getElementById("final-section");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const leaderboard = document.getElementById("leaderboard");
const finalMessage = document.getElementById("finalMessage");
const finalText = document.getElementById("finalText");
const leaderboardForm = document.getElementById("leaderboardForm");
const leaderboardTable = document.getElementById("leaderboardTable");

let correctAnswers = 0;

startButton.addEventListener("click", () => {
  introSection.classList.add("hidden");
  wheelSection.classList.remove("hidden");
});

spinButton.addEventListener("click", () => {
  spinButton.disabled = true;
  const randomAngle = Math.floor(Math.random() * 360) + 1080;
  wheel.style.transform = `rotate(${randomAngle}deg)`;

  setTimeout(() => {
    spinButton.disabled = false;
    wheelSection.classList.add("hidden");
    questionSection.classList.remove("hidden");
    showQuestion();
  }, 3000);
});

const questions = [
  { question: "What does IFP stand for?", answers: [{ text: "Integrity Focal Person", correct: true }, { text: "Internal Focal Point", correct: false }] },
  { question: "Who is the Chairman of Whistleblowing Committee?", answers: [{ text: "Chief Integrity Officer", correct: true }, { text: "Board Risk Committee", correct: false }] },
  { question: "When did Section 17A of MACC Act come into force?", answers: [{ text: "1 June 2020", correct: true }, { text: "1 January 2018", correct: false }] }
];

function showQuestion() {
  questionElement.innerText = questions[correctAnswers].question;
  answerButtons.innerHTML = "";
  questions[correctAnswers].answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("answer-option");
    button.onclick = () => {
      if (answer.correct) correctAnswers++;
      if (correctAnswers < 3) {
        showQuestion();
      } else {
        showFinalSection();
      }
    };
    answerButtons.appendChild(button);
  });
}

function showFinalSection() {
  questionSection.classList.add("hidden");
  finalSection.classList.remove("hidden");

  finalMessage.innerText = correctAnswers === 3 ? "🎉 Congratulations!" : "😢 Try Again!";
  finalText.innerText = correctAnswers === 3 ? "You answered all questions correctly!" : "Better luck next time!";
}
