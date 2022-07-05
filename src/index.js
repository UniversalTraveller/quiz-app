console.clear();
console.log("hallo welt!");
let answersButton = document.querySelector('[js-data="show-answers-button"]');

function onButtonClick() {
  console.log("test");
  let answer = document.querySelector('[js-data="answer"]');
  answer.classList.toggle("question-card__answer--hidden");
}

answersButton.addEventListener("click", onButtonClick);
