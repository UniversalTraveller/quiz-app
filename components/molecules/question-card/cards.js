export default function getCards() {
  const cards = [
    {
      id: "1",
      question: "What are two things you can never eat for breakfast?",
      answer: "Lunch and Dinner",
      tags: ["food", "breakfast"],
      bookmarked: false,
    },
    {
      id: "2",
      question: "What is always coming but never arrives? ",
      answer: "Tomorrow",
      tags: ["permanence", "arrival"],
      bookmarked: true,
    },
    {
      id: "3",
      question: "What never asks a question but gets answered all the time?",
      answer: "A cellphone",
      tags: ["questions", "answers", "permanence"],
      bookmarked: false,
    },
    {
      id: "4",
      question:
        "If you have one, you want to share it. But once you share it, you do not have it. What is it?",
      answer: "A secret",
      tags: ["possession", "sharing"],
      bookmarked: true,
    },
    {
      id: "5",
      question:
        "What starts with “e” and ends with “e” but only has one letter in it?",
      answer: "An envelope",
      tags: ["letters", "e"],
      bookmarked: false,
    },
  ];

  console.log(cards[4]["answer"]);

  const contentArea = document.querySelector('[data-js="content-area"]');

  cards.forEach((card) => {
    const questionCard = document.createElement("article");
    questionCard.classList.add("question-card");
    contentArea.append(questionCard);

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
