const jokeText = document.getElementById('joke-text');
const jokeBtn = document.getElementById('joke-btn');
const revealBtn = document.getElementById('reveal-btn');
const answerText = document.getElementById('answer-text');
const cardInner = document.getElementById('card-inner');

const jokes = [
  { question: "Neela ink kudichal engane kudavayar kurayum?", answer: "neela ink kudichal pallu neela aavum , neela pallu means bluetooth , bluetooth is വയർless!" },
  { question: "Suresh vazhiyiloode pokumbol oru 2000 roopa note um, oru unakka meenum kidakkunnathu kandu... Suresh unakka meeneduthu 2000 roopa avidethanne ittu. Enthukondu?", answer: "Suresh oru പൂച്ച aayirunnu" },
  { question: "Oraal oru empty roomil ottakkanu. Aa roominu no doors no windows. There's only a light bulb and a switch. The person wants to die. Engane marikkan pattum? (Electricity is not enough to electrocute and you can't break the bulb.)", answer: "Ayal switch ittu. Bulb kathi. A kathi eduth kuthi marichu." },
  { question: "Is Ganga a river or a pond?", answer: "It's a pond cuz GANGA IPO PONDA!!!" },
  { question: "Randalukal marubhoomiyil pettu poi. Avar ini evide jeevikkum?", answer: "Avar parasparam adi koodum... innatt adich adich flat aakum... Innatt aa flat il keri jeevikkum." },
  { question: "Kuttappan jail chaadi. Police enth cheythu?", answer: "Appurethe cellile Rajappane kulipichu Kuttappan aaki." },
  { question: "Oraal oru island il ottapettu poyi. Aake kayyil ullath oru vaal (sword). Engane rakshappedum?", answer: "Vaal eduthu swayam kuthi chora varuthuka. Aa chora vinna mannil ninnu poomaram. Aa poomaram kondu kappalundaki rekshapedalo." },
  { question: "Oru urumbum oru thimingalom koode adi kooduarnu. Urumbu jayichu. How???", answer: "Urumbu sunscreen thechindarn. Apo whale adichal onnum pattula." },
  { question: "ഒരു അച്ഛനും മകനും മരുഭൂമിയിൽ പെട്ടു പോയി. അച്ഛന്റെ കയ്യിൽ ആകെ ഒരു Dairy Milk ചോക്ലേറ്റ് ഉള്ളൂ. അവർ എങ്ങനെ രക്ഷപെടും?", answer: "അച്ഛൻ ആ Dairy Milk മകന് കൊടുക്കും, മകൻ സന്തോഷവാൻ ആകും, എന്നിട്ട് ആ van ഇൽ കേറി പോകും." },
  { question: "Oraal oru dosa chuttu. But aa dosa parannu poi. Enth kond?", answer: "Kaaranam ath oru plane dosa aayirunnu." },
  { question: "Googlenu patti kadichaal enthu sambhavikkum?", answer: "Google Pay." },
  { question: "Ammumma ravile ezhunnet pallu thechapo marich poi. Avde enthanu sambavichathu?", answer: "Ammumma Colgate Maxfresh upayogichaan pallu thechath. Apol unmeshathinte Amittu potti. Angane ammumma marichu guys." },
  { question: "Oraal ottakku oru idathu pettu. Ayyalude kayyil ake ullathu oru tyre illatha car aanu. Ayal engane rekshpedum?", answer: "Aa carinu chuttum odanam, appol tired aavum, ennittu aa tire ittu car odichu povaam." },
  { question: "Oru aal marubhoomiyil pettukidakkayirunnu. Ayaalde kaiyyil oru toy maathrame ullu. Ayaal engane rekshapedum?", answer: "Toy-il oru otta undakki aa Toyota yil kayari rekshapedaam." },
  { question: "Ningalk ottapedal anubhavikunundo?", answer: "Ennal oru cycle medikku. Athinu 2 pedal und." },
  { question: "How much time did the Malayali spend in the parlour?", answer: "Oru Manicure." },
  { question: "Randu electrical postukal thammil love aayal enthu aakum?", answer: "CURRENT AFFAIRS." },
  { question: "Aaril anju poyal baakki enthkittum?", answer: "Anjunte body." },
  { question: "Batman loves chapati. Why?", answer: "Because chapati is made of Gotham(b)." },
  { question: "What is the Malayalam version of 'The Fault in our Stars'?", answer: "Jathakadosham." },
  { question: "Gandhiji odicha car.....", answer: "Britishucar." },
  { question: "Ramu ottakk kaattiloode nadakumbol oru simhathe kandu. But Ramu rakshapettu. Engane?", answer: "Simhathe kandappol Ramunte kili poyi. Athinte kaalil pidich Ramu parann poyi." },
  { question: "Dineshante appante perru entha?", answer: "Gandhi. Gandhiji is the father of Denashan (the Nation)." },
  { question: "രാമുവിന് 10 ദിവസം അവധി വേണം. രാമു എന്തു ചെയ്യും?", answer: "അവൻ ഒരു സ്വിച്ч് ഓണാക്കും. ഓണായോണ്ട് 10 ദിവസം അവധി കിട്ടും." }
];

jokeBtn.addEventListener('click', function() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const joke = jokes[randomIndex];

  jokeText.textContent = joke.question;
  answerText.textContent = joke.answer;
  cardInner.classList.remove('flipped');
  revealBtn.style.visibility = 'visible';
  revealBtn.style.pointerEvents = 'auto';
});

revealBtn.addEventListener('click', function() {
  cardInner.classList.add('flipped');
  revealBtn.style.visibility = 'hidden';
  revealBtn.style.pointerEvents = 'none';
});