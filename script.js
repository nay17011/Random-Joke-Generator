const jokeText = document.getElementById('joke-text');
const jokeBtn = document.getElementById('joke-btn');

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "I'm reading a book about anti-gravity. It's impossible to put down.",
  "Why don't eggs tell jokes? They'd crack each other up."
];

jokeBtn.addEventListener('click', function() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  jokeText.textContent = jokes[randomIndex];
});