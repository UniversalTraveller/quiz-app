export default function showAnswer() {
  const answerButton = document.querySelector('[data-js="show-answer-button"]');
  let answerVisible = false;
  answerButton.addEventListener("click", () => {
    const answer = document.querySelector('[data-js="answer"]');
    if (answerVisible) {
      answerVisible = false;
      answer.classList.add("question-card__answer--hidden");
      answerButton.innerText = "Hide Answer";
    } else {
      answerVisible = true;
      answer.classList.remove("question-card__answer--hidden");
      answerButton.innerText = "Show Answer";
    }
  });
}
