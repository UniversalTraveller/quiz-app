export default function getFormInput() {
  const form = document.querySelector('[data-js="form"]');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const questionValue = form.elements.question.value;
    const answerValue = form.elements.answer.value;
    const tagsValue = form.elements.tags.value
      .split(',')
      .map(tag => tag.trim());
    console.log(tagsValue);
    const newQuestionCard = {
      id: 0,
      question: questionValue,
      answer: answerValue,
      tags: tagsValue,
    };
    window.userCreatedCards.push(newQuestionCard);
  });
}
