export default function setBookmark() {
  const bookmarkButton = document.querySelector('[data-js="bookmark"]');
  let isBookmarked = false;
  bookmarkButton.addEventListener("click", () => {
    if (isBookmarked) {
      bookmarkButton.classList.remove("question-card__bookmark-button--active");
      isBookmarked = false;
    } else {
      bookmarkButton.classList.add("question-card__bookmark-button--active");
      isBookmarked = true;
    }
  });
}
