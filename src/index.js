const answerButton = document.querySelector('[data-js="show-answer-button"]');
answerButton.addEventListener("click", onButtonClick);
function onButtonClick() {
  const answer = document.querySelector('[data-js="answer"]');
  answer.classList.toggle("question-card__answer--hidden");
  if (answerButton.innerText === "Show Answer") {
    answerButton.innerText = "Hide Answer";
  } else {
    answerButton.innerText = "Show Answer";
  }
}

const bookmarkButton = document.querySelector('[data-js="bookmark"]');
bookmarkButton.addEventListener("click", onBookmarkClick);
function onBookmarkClick() {
  bookmarkButton.classList.toggle("question-card__bookmark-button--active");
}
