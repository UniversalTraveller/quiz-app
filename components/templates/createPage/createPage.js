import displayCards from '../../molecules/question-card/displayCards.js';
import createTitleBar from '../../organisms/title-bar/createTitleBar.js';
export default function createPage(page, title, cards, allCards) {
  const pages = document.getElementsByClassName(page);
  const pageContent = pages[0];
  pageContent.innerHTML = '';

  pageContent.append(createTitleBar(title));

  const pageMain = document.createElement('main');
  pageMain.classList.add('content-area');
  pageContent.append(pageMain);

  cards.forEach(card => {
    const questionCard = document.createElement('article');
    questionCard.classList.add('question-card');

    pageMain.append(questionCard);

    const bookmarkButton = document.createElement('button');
    bookmarkButton.classList.add('question-card__bookmark-button');

    if (card['bookmarked']) {
      bookmarkButton.classList.add('question-card__bookmark-button--active');
    }

    bookmarkButton.addEventListener('click', () => {
      if (card['bookmarked']) {
        bookmarkButton.classList.remove(
          'question-card__bookmark-button--active'
        );
        card['bookmarked'] = false;
      } else {
        bookmarkButton.classList.add('question-card__bookmark-button--active');
        card['bookmarked'] = true;
      }
      displayCards('page--bookmarks', 'Bookmarks', allCards);
      displayCards('page--home', 'Quiz-App', allCards);
    });

    const bookmarkIcon = document.createElement('span');
    bookmarkIcon.classList.add('material-symbols-outlined');
    bookmarkIcon.innerText = 'Bookmark';
    bookmarkButton.append(bookmarkIcon);

    const cardQuestion = document.createElement('p');
    cardQuestion.classList.add('question-card__question');
    cardQuestion.innerHTML = card.question;

    const cardTags = document.createElement('ul');
    cardTags.classList.add('taglist');
    const cardTag = document.createElement('li');
    cardTag.classList.add('taglist__tag');
    cardTag.innerText = card.tags;
    cardTags.append(cardTag);

    const cardAnswer = document.createElement('p');
    cardAnswer.classList.add(
      'question-card__answer',
      'question-card__answer--hidden'
    );
    cardAnswer.innerHTML = card.answer;

    const answerButton = document.createElement('button');
    answerButton.classList.add('big-button');
    answerButton.innerText = 'Show Answer';

    let answerVisible = false;
    answerButton.addEventListener('click', toggleAnswerButtonText);

    function toggleAnswerButtonText() {
      if (answerVisible) {
        answerVisible = false;
        cardAnswer.classList.add('question-card__answer--hidden');
        answerButton.innerText = 'Show Answer';
      } else {
        answerVisible = true;
        cardAnswer.classList.remove('question-card__answer--hidden');
        answerButton.innerText = 'Hide Answer';
      }
    }

    questionCard.append(
      bookmarkButton,
      cardQuestion,
      answerButton,
      cardTags,
      cardAnswer
    );
  });
}
