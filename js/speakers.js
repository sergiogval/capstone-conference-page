const arr = [
  {
    id: 0, image: 'images/speaker1.png', name: 'Usaian Bolt', title: 'Holder of various running world records',
  },
  {
    id: 1, image: 'images/speaker2.png', name: 'Elon Musk', title: 'excentric multimillonaire',
  },
  {
    id: 2, image: 'images/speaker3.png', name: 'Ian Thorpe', title: 'The olimpyc swwimer with more Gold Medals in the history',
  },
  {
    id: 3, image: 'images/speaker4.png', name: 'James Franco', title: 'Actor and Hemp activist',
  },
  {
    id: 4, image: 'images/speaker6.png', name: 'Bob Marley', title: 'Reggue singer and Hemp activist',
  },
  {
    id: 5, image: 'images/speaker5.png', name: 'Maria Sabina', title: 'Mexican ancent culture sacerdotice',
  },
];

for (let i = 0; i <= arr.length; i += 1) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<div id="speakers"><div class="card-content"><img src="${arr[i].image}"><h3>${arr[i].name}</h3><p>${arr[i].title}</p></div></div>`;
  document.getElementById('speakers').appendChild(card);
}
