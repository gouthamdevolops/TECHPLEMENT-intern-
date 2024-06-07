const quotes = [
  {
    text: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    text: "The best way to find yourself is to lose yourself in the service of others.",
    author: "Mahatma Gandhi"
  },
  {
    text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
    author: "Dr. APJ Abdul Kalam"
  },
  {
    text: "Let us sacrifice our today so that our children can have a better tomorrow.",
    author: "Dr. APJ Abdul Kalam"
  },
  {
    text: "Faith is the bird that feels the light when the dawn is still dark.",
    author: "Rabindranath Tagore"
  },
  {
    text: "Where the mind is without fear and the head is held high.",
    author: "Rabindranath Tagore"
  },
  {
    text: "The greatest mistake of a soul is non-recognition of its real self and can only be corrected through recognizing itself.",
    author: "Swami Vivekananda"
  },
  {
    text: "Arise, awake, and stop not until the goal is achieved.",
    author: "Swami Vivekananda"
  },
  {
    text: "In the end, these things matter most: How well did you love? How fully did you live? How deeply did you let go?",
    author: "Gautama Buddha"
  },
  {
    text: "Peace comes from within. Do not seek it without.",
    author: "Gautama Buddha"
  }
];

  const quoteText = document.getElementById("text");
  const quoteAuthor = document.getElementById("author");
  const newQuoteButton = document.getElementById("new-quote");
  
  newQuoteButton.addEventListener("click", displayNewQuote);
  
  function displayNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.innerHTML = quotes[randomIndex].text;
    quoteAuthor.innerHTML = quotes[randomIndex].author;
}

displayNewQuote();