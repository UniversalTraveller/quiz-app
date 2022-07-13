//import setBookmark from "./components/molecules/question-card/setBookmark.js";
import switchPages from "./components/organisms/nav-bar/switchPages.js";
import getCards from "./components/molecules/question-card/cards.js";
//import showAnswer from "./components/molecules/question-card/showAnswer.js";
import createPage from "./components/templates/createPage/createPage.js";

//showAnswer();
//setBookmark();
switchPages();
getCards();

//not used when carts are fetched from API
/*
const cards = getCards();
createPage("page--home", "Quiz-App", cards);
createPage("page--bookmarks", "Bookmarks", cards);
*/
