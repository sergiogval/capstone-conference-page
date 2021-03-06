const arr = [
  {
    id: 0,
    image: 'images/speaker1.png',
    name: 'Usaian Bolt',
    title: 'Holder of various records',
    description: 'ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut',
  },
  {
    id: 1,
    image: 'images/speaker2.png',
    name: 'Elon Musk',
    title: 'excentric multimillonaire',
    description: 'ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut',
  },
  {
    id: 2,
    image: 'images/speaker3.png',
    name: 'Ian Thorpe',
    title: 'The swimmer with more Gold Medals.',
    description: 'ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut',
  },
  {
    id: 3,
    image: 'images/speaker4.png',
    name: 'James Franco',
    title: 'Actor and Hemp activist',
    description: 'ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut',
  },
  {
    id: 4,
    image: 'images/speaker6.png',
    name: 'Bob Marley',
    title: 'Reggae singer and Hemp activist',
    description: 'ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut',
  },
  {
    id: 5,
    image: 'images/speaker5.png',
    name: 'Maria Sabina',
    title: 'Mexican ancien culture sacerdotice',
    description: 'ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut',
  },
];

arr.forEach((elem) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
  <div class="cardContent">
  <img class="speakerImg" src="${elem.image}" alt="${elem.name}"  style="background-image: url('../images/chess.png');">  
  <div class="cardBody">
  <h4 class="speakerName">${elem.name}</h3>
  <span class="tumbnail1"></span>
  <p class="speakerBio">${elem.title}</p>
  <p class="speakerDescription">${elem.description}</p>
  </div>
  </div>
  </div>`;
  document.getElementById('speakers').appendChild(card);
});
