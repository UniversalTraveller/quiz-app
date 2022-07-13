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
      //compensate for character encoding
      let questionText = card.question.replace(/&quot;/g, '"');
      questionText = questionText.replace(/&amp;/g, "&");
      questionText = questionText.replace(/&#039;/g, "'");
      let questionAnswer = card.correct_answer.replace(/&quot;/g, '"');
      questionAnswer = questionAnswer.replace(/&amp;/g, "&");
      questionAnswer = questionAnswer.replace(/&#039;/g, "'");

      cards.push({
        id: index + 1,
        question: card.question,
        answer: questionAnswer,
        tags: card.category,
      });
    });
    createPage("page--home", "Quiz-App", cards);
    createPage("page--bookmarks", "Bookmarks", cards);
  }
}
