let answersButton = document.querySelector('[js-data="show-answer-button"]');
answersButton.addEventListener("click", onButtonClick);
function onButtonClick() {
  let answer = document.querySelector('[js-data="answer"]');
  answer.classList.toggle("question-card__answer--hidden");
  if (answersButton.innerHTML.includes("Show Answer")) {
    answersButton.innerHTML = "Hide Anser";
  } else {
    answersButton.innerHTML = "Show Answer";
  }
}

let bookmarkButton = document.querySelector('[data-js="bookmark"]');
bookmarkButton.addEventListener("click", onBookmarkClick);
function onBookmarkClick() {
  bookmarkButton.classList.toggle("question-card__bookmark-button--active");
}
