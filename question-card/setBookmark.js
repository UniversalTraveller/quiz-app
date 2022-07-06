export default function setBookmark() {
  const bookmarkButton = document.querySelector('[data-js="bookmark"]');
  bookmarkButton.addEventListener("click", onBookmarkClick);
  function onBookmarkClick() {
    bookmarkButton.classList.toggle("question-card__bookmark-button--active");
  }
}
