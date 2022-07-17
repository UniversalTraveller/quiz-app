import switchPages from '../../organisms/nav-bar/switchPages.js';
import displayCards from './displayCards.js';
export default function getCards() {
  const url = 'https://opentdb.com/api.php?amount=10';

  fetch(url)
    .then(jsonObject => jsonObject.json())
    .then(javascriptObject => displayTheCards(javascriptObject.results))
    .catch(error => console.error(error.message));

  function displayTheCards(arrayToDisplay) {
    const cards = arrayToDisplay.map((card, index) => {
      return {
        id: index + 1,
        question: card.question,
        answer: card.correct_answer,
        tags: card.category,
      };
    });

    switchPages('page--home', 'Quiz-App', cards);
  }
}
