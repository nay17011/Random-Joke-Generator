const jokeText = document.getElementById('joke-text');
const jokeBtn = document.getElementById('joke-btn');

const jokes = [
  { question: "Why did the chicken cross the road?", answer: "To get to the other side!" },
  { question: "Why don't scientists trust atoms?", answer: "Because they make up everything!" },
  { question: "What do you call a fake noodle?", answer: "An impasta!" },
  { question: "Why did the scarecrow win an award?", answer: "Because he was outstanding in his field!" },
  { question: "What do you call cheese that isn't yours?", answer: "Nacho cheese!" }
];

jokeBtn.addEventListener('click', function() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const joke = jokes[randomIndex];
  jokeText.innerHTML = joke.question + '<br><br>' + joke.answer;
});