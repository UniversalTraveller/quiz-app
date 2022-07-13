import getCards from "../../molecules/question-card/cards.js";
import createTitleBar from "../../organisms/title-bar/createTitleBar.js";
export default function createPage(page, title, cards) {
  const pages = document.getElementsByClassName(page);
  const pageContent = pages[0];
  pageContent.innerHTML = "";

  pageContent.append(createTitleBar(title));

  const pageMain = document.createElement("main");
  pageMain.classList.add("content-area");
  pageContent.append(pageMain);

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
      createPage("page--bookmarks", "Bookmarks", cards);
      createPage("page--home", "Quiz-App", cards);
    });

    const bookmarkIcon = document.createElement("span");
    bookmarkIcon.classList.add("material-symbols-outlined");
    bookmarkIcon.innerText = "Bookmark";
    bookmarkButton.append(bookmarkIcon);

    const cardQuestion = document.createElement("p");
    cardQuestion.classList.add("question-card__question");
    cardQuestion.innerText = card["question"];

    const cardTags = document.createElement("ul");
    card.tags.forEach((tag) = {
      const cardTag = document.createElement("li");

    });



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

    questionCard.append(bookmarkButton, cardQuestion, answerButton, cardTags, cardAnswer);
  });
}
