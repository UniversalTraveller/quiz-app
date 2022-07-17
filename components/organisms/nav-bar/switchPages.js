import displayCards from '../../molecules/question-card/displayCards.js';

export default function switchPages(page, title, cards) {
  const pages = document.querySelectorAll('.page');
  const navigationButtons = document.querySelectorAll(
    '[data-js="nav-bar__button"]'
  );

  displayCards('page--home', 'Quiz-App', cards);
  displayCards('page--bookmarks', 'Bookmarks', cards);

  navigationButtons.forEach((navigationButton, buttonIndex) => {
    navigationButton.addEventListener('click', switchToPage);
    function switchToPage() {
      displayCards(page, title, cards);
      pages.forEach(page => {
        page.classList.add('make-invisible');
      });
      pages[buttonIndex].classList.remove('make-invisible');
    }
  });
}
