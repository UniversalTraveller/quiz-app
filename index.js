import setBookmark from "./components/molecules/question-card/setBookmark.js";
import switchPages from "./components/organisms/nav-bar/switchPages.js";
import getCards from "./components/molecules/question-card/cards.js";
import showAnswer from "./components/molecules/question-card/showAnswer.js";
import createHomePage from "./components/templates/createHomePage/createHomePage.js";

showAnswer();
setBookmark();
switchPages();
getCards();
const cards = getCards();
createHomePage("page--home", "Quiz-App", cards);
createHomePage("page--bookmarks", "Bookmarks", cards);
