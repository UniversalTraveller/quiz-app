export default function switchPages() {
  const pages = document.querySelectorAll('[data-js="page"]');
  const navigationButtons = document.querySelectorAll(
    '[data-js="nav-bar__button"]'
  );

  console.log(navigationButtons);

  navigationButtons.forEach((navigationButton, buttonIndex) => {
    //const buttonIndex = Array.from(navigationButtons).indexOf(navigationButton);
    navigationButton.addEventListener('click', switchToPage);
    function switchToPage() {
      pages.forEach(page => {
        page.classList.add('make-invisible');
      });
      pages[buttonIndex].classList.remove('make-invisible');
    }
  });
}
