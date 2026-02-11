let phrases = [
  'sleeping underneath the same big sky',
  'eating Pastel de Belém (with cinnamon and sugar powder)',
  'taking pics in a photo booth',
  'ehehe',
  'crabbing for tissues',
  'doing our stoop dance',
  'having shared breakfasts',
  'having shared lunches',
  'having shared dinners',
  'choosing fancy bath bombs at Lush',
  'being awkvard buying the lube',
  'browsing bookstores',
  'doing Yoga clumsily',
  'me singing you songs',
  'taking a bath together',
  'being hugged from behind when watching nerdy videos',
  'exporing the world together',
  'getting lost in a new city and finding hidden gems',
  'playing video games together',
  'shared cinema visits',
  'looking at our moon',
  'couching togehter',
  "kissing monster's attac",
  'the thumb stroking thing',
  'shared grocery shopping',
  'our very special Fado experience',
  'Bacalhau cake',
  'receiving the special kiss',
  'the hotness indicator BEEPing when we entered the elevator',
  'being close and natural',
  'being skin to skin together',
  'our first airport kiss',
  'our vacation planning',
  'getting the milk from the source',
  'hearing my stoop chuckling when trying to hide',
  'us being very fancy in the SPA',
  'our future bouldering',
  'our future very clumsy and stoop (but ours!) ice skating',
  'being pickpocketed (by a very mysterious robber) on the train',
  'us sharing thoughts and impressions',
  'being curious and doing our projects',
  'miu.'
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button button');
let phrase = document.querySelector('.phrase');


button.addEventListener('click', function() {
  phrase.textContent = getRandomElement(phrases);
})
