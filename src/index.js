console.clear();
console.log("hallo welt!");
let answersButton = document.querySelector('[js-data="show-answers-button"]');

function onButtonClick() {
  console.log("test");
  text.classList.toggle("text--highlight");
}

answersButton.addEventListener("click", onButtonClick);
