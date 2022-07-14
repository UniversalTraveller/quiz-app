export default function showAnswer() {
  const answerButtons = document.querySelectorAll(
    '[data-js="show-answer-button"]'
  );

  answerButtons.forEach(answerButton => {
    let answerVisible = false;
    answerButton.addEventListener('click', toggleAnswerButtonText);

    function toggleAnswerButtonText() {
      const answer = answerButton.nextElementSibling;
      if (answerVisible) {
        answerVisible = false;
        answer.classList.add('question-card__answer--hidden');
        answerButton.innerText = 'Show Answer';
      } else {
        answerVisible = true;
        answer.classList.remove('question-card__answer--hidden');
        answerButton.innerText = 'Hide Answer';
      }
    }
  });
}
