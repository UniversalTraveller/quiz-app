export default function getCards() {
  const cards = [
    {
      id: "1",
      question: "What are two things you can never eat for breakfast?",
      answer: "Lunch and Dinner",
      tags: ["food", "breakfast"],
      bookmarked: false,
    },
    {
      id: "2",
      question: "What is always coming but never arrives? ",
      answer: "Tomorrow",
      tags: ["permanence", "arrival"],
      bookmarked: true,
    },
    {
      id: "3",
      question: "What never asks a question but gets answered all the time?",
      answer: "A cellphone",
      tags: ["questions", "answers", "permanence"],
      bookmarked: false,
    },
    {
      id: "4",
      question:
        "If you have one, you want to share it. But once you share it, you do not have it. What is it?",
      answer: "A secret",
      tags: ["possession", "sharing"],
      bookmarked: true,
    },
    {
      id: "5",
      question:
        "What starts with “e” and ends with “e” but only has one letter in it?",
      answer: "An envelope",
      tags: ["letters", "e"],
      bookmarked: false,
    },
  ];

  return cards;
}
