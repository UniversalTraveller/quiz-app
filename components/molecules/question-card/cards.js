import displayCards from "./displayCards.js";
export default function getCards() {
  const url = "https://opentdb.com/api.php?amount=10";

  fetch(url)
    .then((jsonObject) => jsonObject.json())
    .then((javascriptObject) => displayTheCards(javascriptObject.results))
    .catch((error) => console.error(error.message));

  function displayTheCards(arrayToDisplay) {
    console.log(arrayToDisplay);
    const cards = [];

    arrayToDisplay.forEach((card, index) => {
      cards.push({
        id: index + 1,
        question: card.question,
        answer: card.correct_answer,
        tags: card.category,
      });
    });
    displayCards("page--home", "Quiz-App", cards);
    displayCards("page--bookmarks", "Bookmarks", cards);
  }
}
