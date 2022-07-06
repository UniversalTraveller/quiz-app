const answerButton = document.querySelector('[data-js="show-answer-button"]');
answerButton.addEventListener("click", onButtonClick);
function onButtonClick() {
  const answer = document.querySelector('[data-js="answer"]');
  answer.classList.toggle("question-card__answer--hidden");
  if (answerButton.innerHTML.includes("Show Answer")) {
    answerButton.innerHTML = "Hide Answer";
  } else {
    answerButton.innerHTML = "Show Answer";
  }
}

const bookmarkButton = document.querySelector('[data-js="bookmark"]');
bookmarkButton.addEventListener("click", onBookmarkClick);
function onBookmarkClick() {
  bookmarkButton.classList.toggle("question-card__bookmark-button--active");
}
