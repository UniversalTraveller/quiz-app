import createPage from "../../templates/createPage/createPage.js";
export default function getCards() {
  const url = "https://opentdb.com/api.php?amount=10";

  fetch(url)
    .then((jsonObject) => jsonObject.json())
    .then((javascriptObject) => displayCards(javascriptObject.results))
    .catch((error) => console.error(error.message));

  function displayCards(arrayToDisplay) {
    console.log(arrayToDisplay);
    const cards = [];

    arrayToDisplay.forEach((card, index) => {
      let questionText = card.question.replace(/&quot;/g, '"');
      questionText = questionText.repalace(/&quot;/g, '"');
      cards.push({
        id: index + 1,
        question: questionText,
        answer: card.correct_answer,
        tags: card.category,
      });
    });
    createPage("page--home", "Quiz-App", cards);
    createPage("page--bookmarks", "Bookmarks", cards);
  }
}
