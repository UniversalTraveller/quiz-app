export default function createTitleBar(title) {
  const pageHeader = document.createElement("header");
  pageHeader.classList.add("title-bar");
  pageHeader.innerHTML = `<h1 class="title-bar__page-title">${title}</h1>`;
  return pageHeader;
}
