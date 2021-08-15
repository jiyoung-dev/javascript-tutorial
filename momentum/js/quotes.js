// 랜덤 명언 만들기 

const quotes = [
  {
    quote:"When you go through hardships and decide not to surrender, that is strength.",
    author:"Arnold Schwarzenegger",
  },
  {
    quote:"It is kind of fun to do the impossible.",
    author:"Walt Disney",
  },
  {
    quote:"Tough times never last, but tough people do.",
    author:"Robert H. Schuller",
  },
  {
    quote:"I’ve failed over and over and over again in my life and that is why I succeed.",
    author:"Michael Jordan",
  },
  {
    quote:"If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
    author:"Angelina Jolie",
  },
  {
    quote:"Grind Hard, Shine Hard.",
    author:"Dwayne Johnson",
  },
  {
    quote:"“Life is like riding a bicycle. To keep your balance, you must keep moving.”",
    author:"Albert Einstein",
  },
  {
    quote:"Be patient and tough: some day this pain will be useful to you.",
    author:"푸블리우스 오비디우스 나소",
  },
];  // 8개 

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math.random() 사용 -> quotes 인덱스 자리에 범위에 맞는 랜덤한 자연수 오도록 작성 
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
