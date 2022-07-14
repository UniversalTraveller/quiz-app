export default function setBookmark() {
  const bookmarkButtons = document.querySelectorAll('[data-js="bookmark"]');
  bookmarkButtons.forEach(bookmarkButton => {
    let isBookmarked = false;
    bookmarkButton.addEventListener('click', () => {
      if (isBookmarked) {
        bookmarkButton.classList.remove(
          'question-card__bookmark-button--active'
        );
        isBookmarked = false;
      } else {
        bookmarkButton.classList.add('question-card__bookmark-button--active');
        isBookmarked = true;
      }
    });
  });
}
