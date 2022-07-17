import createPage from '../../templates/createPage/createPage.js';
let cardSet = [];
export default function displayCards(page, title, cards) {
  if (page === 'page--home') {
    cardSet = cards;
  } else if (page === 'page--bookmarks') {
    cardSet = cards.filter(card => card.bookmarked);
  }

  createPage(page, title, cardSet, cards);
}
