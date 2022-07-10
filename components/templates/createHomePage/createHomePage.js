import getCards from "../../molecules/question-card/cards.js";
export default function createHomePage(page, title, cards) {
  const contentAreas = document.getElementsByClassName(page);
  const contentArea = contentAreas[0];
  contentArea.innerHTML = "";

  const pageHeader = document.createElement("header");
  pageHeader.classList.add("title-bar");
  pageHeader.innerHTML = `<h1 class="title-bar__page-title">${title}</h1>`;
  contentArea.append(pageHeader);

  const pageMain = document.createElement("main");
  pageMain.classList.add("content-area");
  contentArea.append(pageMain);

  cards.forEach((card) => {
    const questionCard = document.createElement("article");
    questionCard.classList.add("question-card");
    if (
      page === "page--home" ||
      (page === "page--bookmarks" && card["bookmarked"])
    ) {
      pageMain.append(questionCard);
    }

    const bookmarkButton = document.createElement("button");
    bookmarkButton.classList.add("question-card__bookmark-button");

    if (card["bookmarked"]) {
      bookmarkButton.classList.add("question-card__bookmark-button--active");
    }

    bookmarkButton.addEventListener("click", () => {
      if (card["bookmarked"]) {
        bookmarkButton.classList.remove(
          "question-card__bookmark-button--active"
        );
        card["bookmarked"] = false;
      } else {
        bookmarkButton.classList.add("question-card__bookmark-button--active");
        card["bookmarked"] = true;
      }
      createHomePage("page--bookmarks", "Bookmarks", cards);
      createHomePage("page--home", "Quiz-App", cards);
    });

    const bookmarkIcon = document.createElement("span");
    bookmarkIcon.classList.add("material-symbols-outlined");
    bookmarkIcon.innerText = "Bookmark";
    bookmarkButton.append(bookmarkIcon);

    const cardQuestion = document.createElement("p");
    cardQuestion.classList.add("question-card__question");
    cardQuestion.innerText = card["question"];

    const cardAnswer = document.createElement("p");
    cardAnswer.classList.add(
      "question-card__answer",
      "question-card__answer--hidden"
    );
    cardAnswer.innerText = card["answer"];

    const answerButton = document.createElement("button");
    answerButton.classList.add("big-button");
    answerButton.innerText = "Show Answer";

    let answerVisible = false;
    answerButton.addEventListener("click", toggleAnswerButtonText);

    function toggleAnswerButtonText() {
      if (answerVisible) {
        answerVisible = false;
        cardAnswer.classList.add("question-card__answer--hidden");
        answerButton.innerText = "Show Answer";
      } else {
        answerVisible = true;
        cardAnswer.classList.remove("question-card__answer--hidden");
        answerButton.innerText = "Hide Answer";
      }
    }

    questionCard.append(bookmarkButton, cardQuestion, answerButton, cardAnswer);
  });
}
