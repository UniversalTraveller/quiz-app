export default function switchPages() {
  const pages = document.querySelectorAll('[data-js="page"]');

  /*pages.forEach((page) => {
    const pageIndex = Array.from(pages).indexOf(page);
    
  });*/

  const navigationButtons = document.querySelectorAll(
    '[data-js="nav-bar__button"]'
  );

  navigationButtons.forEach((navigationButton) => {
    const buttonIndex = Array.from(navigationButtons).indexOf(navigationButton);

    navigationButton.addEventListener("click", switchToPage);

    function switchToPage() {
      pages.forEach((page) => {
        page.classList.add("make-invisible");
      });
      pages[buttonIndex].classList.remove("make-invisible");
    }
  });

  /*const homeButton = document.querySelector('[data-js="home_button"]');
  homeButton.addEventListener("click", switchToHome);

  function switchToHome() {
    pages.forEach((page) => {
      page.classList.add("make-invisible");
    });
    pages[0].classList.remove("make-invisible");
  }

  /*const homeButton = document.querySelector('[data-js="home_button"]');
  homeButton.addEventListener("click", switchToHome);

  function switchToHome() {
    pages.forEach((page) => {
      page.classList.add("make-invisible");
    });
    pages[0].classList.remove("make-invisible");
  }

  const bookmarkButton = document.querySelector('[data-js="bookmark_button"]');
  bookmarkButton.addEventListener("click", switchToBookmarks);

  function switchToBookmarks() {
    pages.forEach((page) => {
      page.classList.add("make-invisible");
    });
    pages[1].classList.remove("make-invisible");
  }

  const createButton = document.querySelector('[data-js="create_button"]');
  createButton.addEventListener("click", switchToCreate);

  function switchToCreate() {
    pages.forEach((page) => {
      page.classList.add("make-invisible");
    });
    pages[2].classList.remove("make-invisible");
  }

  const profileButton = document.querySelector('[data-js="profile_button"]');
  profileButton.addEventListener("click", switchToProfile);

  function switchToProfile() {
    pages.forEach((page) => {
      page.classList.add("make-invisible");
    });
    pages[3].classList.remove("make-invisible");
  }
  */
}
